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

    if (!discount)
        discount = 0;

    sum = ((100 - discount) * sum / 100).toFixed(2);

    $('.sum').text(`${sum}€`)
}


$(document).on('turbolinks:load', function () {
    console.log(":load dashboard");
});


$(document).ready(function () {
    console.log(":ready dashboard");
    $(document).on('click', '#add_service,#add_product', function (event) {
        event.preventDefault();
        event.stopPropagation();
        $('.collapse').collapse();
        $('.selectpicker').selectpicker();
        $("input").tooltip();
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
        console.log('more_fields_toggle');
        $(this).parent().children(".more_fields").slideToggle();
        $(this).children('i').toggleClass("glyphicon-chevron-up glyphicon-chevron-down");
    });
});
