$(document).on('turbolinks:load', function () {
    console.log("turbolinks:load dashboard");

    $('.selectpicker').selectpicker();

    $('.input-group.date').datetimepicker({
        format: 'DD/M/YYYY HH:mm',
        locale: 'el',
        allowInputToggle: true,
        showClose: true
    });

    $(document).on('click', '#add_service,#add_product', function (event) {
        event.preventDefault();
        event.stopPropagation();
        $('.collapse').collapse();
        $('.selectpicker').selectpicker();
        $("input").tooltip();
    });


    $('#datatable-customer_products').DataTable({
        "order": [4],
        "columnDefs": [
            {"width": "50px", "targets": [5], "orderable": false, "className": "text-center"}
        ],
        "language": {
            "url": "//cdn.datatables.net/plug-ins/1.10.19/i18n/Greek.json"
        }
    });

    $('#datatable-customer_services').DataTable({
        "order": [5],
        "columnDefs": [
            {"width": "50px", "targets": [6], "orderable": false, "className": "text-center"}
        ],
        "language": {
            "url": "//cdn.datatables.net/plug-ins/1.10.19/i18n/Greek.json"
        }
    });
});
$(document).on('keyup change', "#discount,input.amount,input.custom_price,select.in_price", function () {
    set_sum()
});

$(document).on('change', "#student_discount", function () {
    if ($(this).is(":checked"))
        $('#discount').val('20');
    else
        $('#discount').val('');
    set_sum()
});

$(document).on('click', ".more_fields_toggle", function () {
    console.log('ddd');
    $(this).parent().children(".more_fields").slideToggle();
    $(this).children('i').toggleClass("glyphicon-chevron-up glyphicon-chevron-down");
});

function set_sum() {
    let in_price = $('select.in_price');
    let sum = 0.0;
    in_price.each(function () {
        let amount = $(this).parent().parent().parent().find('input.amount').val();
        let custom_price = $(this).parent().parent().parent().find('input.custom_price').val();
        console.log(amount);
        console.log(custom_price);

        if (!amount.trim())
            amount = 1;


        $(this).find("option:selected").each(function () {
            let price = parseFloat($(this).data().price);
            if (custom_price.trim())
                price = custom_price;
            if (!isNaN(price))
                sum += price * amount;
        });
    });
    let discount = parseFloat($('#discount').val());
    console.log(discount);

    if (!discount)
        discount = 0;

    sum = (100 - discount) * sum / 100;
    $('.sum').text(`${sum}€`)
}

