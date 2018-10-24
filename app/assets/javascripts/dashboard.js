$(document).on('turbolinks:load', function () {
    console.log("turbolinks:load dashboard");

    $('.selectpicker').selectpicker();

    $('.input-group.date').datetimepicker({
        format: 'DD/MM/YYYY HH:mm',
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


    init_MyDataTables();

    init_MyDaterRangePicker();

});
$(document).on('keyup change', "#discount_per_cent,input.amount,input.custom_price,select.in_price", function () {
    set_sum()
});

$(document).on('change', "#discount_id", function () {
    $(this).find("option:selected").each(function () {
        let per_cent = parseFloat($(this).data().percent);
        $('#discount_per_cent').val(per_cent);
    });
    set_sum()
});

$(document).on('click', ".more_fields_toggle", function () {
    console.log('ddd');
    $(this).parent().children(".more_fields").slideToggle();
    $(this).children('i').toggleClass("glyphicon-chevron-up glyphicon-chevron-down");
});

function set_sum() {

    let sum = 0.0;
    $('select.in_price').each(function () {
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
    let discount = parseFloat($('#discount_per_cent').val());
    console.log(discount);

    if (!discount)
        discount = 0;

    sum = (100 - discount) * sum / 100;
    $('.sum').text(`${sum}€`)
}

function init_MyDataTables() {
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
    $('#datatable-customer_products_by_customer').DataTable({
        "order": [3],
        "columnDefs": [
            {"width": "50px", "targets": [4], "orderable": false, "className": "text-center"}
        ],
        "language": {
            "url": "//cdn.datatables.net/plug-ins/1.10.19/i18n/Greek.json"
        }
    });

    $('#datatable-customer_services_by_customer').DataTable({
        "order": [4],
        "columnDefs": [
            {"width": "50px", "targets": [5], "orderable": false, "className": "text-center"}
        ],
        "language": {
            "url": "//cdn.datatables.net/plug-ins/1.10.19/i18n/Greek.json"
        }
    });
}


function init_MyDaterRangePicker() {
    $(document).ready(function () {
        $('.date_range').daterangepicker({
            ranges: {
                'Today': [moment(), moment()],
                'Yesterday': [moment().subtract('days', 1), moment().subtract('days', 1)],
                'Last 7 Days': [moment().subtract('days', 6), moment()],
                'Last 30 Days': [moment().subtract('days', 29), moment()],
                'This Month': [moment().startOf('month'), moment().endOf('month')],
                'Last Month': [moment().subtract('month', 1).startOf('month'), moment().subtract('month', 1).endOf('month')]
            },
            locale: {format: 'DD/MM/YYYY'},
            cancelLabel: 'Clear',
            opens: 'left'
        });

        $('.date_range').on('cancel.daterangepicker', function (ev, picker) {
            $(this).val('');
        });
    });

}

