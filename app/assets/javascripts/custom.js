const start = moment('2018-01-01');
const end = moment();
$(document).on('turbolinks:load', function () {
    console.log(":load custom");
    $('.selectpicker').selectpicker();

    $('.input-group.date').datetimepicker({
        format: 'DD/MM/YYYY HH:mm',
        locale: 'el',
        allowInputToggle: true,
        showClose: true
    });
});
$(document).ready(function () {
    console.log(":ready custom");
});

Array.prototype.clear = function () {
    this.length = 0;
};

function set_all_DaterRangePicker() {
    $('#date_range span').val("All time");
    console.log("ALL")
}

function init_MyDaterRangePicker(callback_f) {

    $('.date_range').daterangepicker({
        startDate: start,
        endDate: end,
        ranges: {
            'All': [start, end],
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
    }, callback_f);

    $('.date_range').on('cancel.daterangepicker', function (ev, picker) {
        $(this).val('');
    });
    set_all_DaterRangePicker()
}