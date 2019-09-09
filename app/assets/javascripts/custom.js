$(document).on('turbolinks:load', function () {
    console.log(":load custom");
    $('.selectpicker').selectpicker();

    $('.input-group.date').datetimepicker({
        format: 'DD/MM/YYYY HH:mm',
        locale: 'el',
        allowInputToggle: true,
        showClose: true
    });
    init_MyDataTables();

});
$(document).ready(function () {
    console.log(":ready custom");
});
Array.prototype.clear = function () {
    this.length = 0;
};
let datatables_list = [];
document.addEventListener("turbolinks:before-cache", function () {
    clear_datatables_list()
});

function clear_datatables_list() {
    datatables_list.forEach(dataTable => {
        if (dataTable !== null) {
            dataTable.destroy();
            dataTable = null;
        }
    });
    datatables_list.clear()
}

function init_MyDataTables() {
    datatables_list.push($('#datatable-customer_products').DataTable({
        "order": [6],
        "columnDefs": [
            {"width": "0px", "targets": [7, 8], "orderable": false, "className": "dt-center"}
        ],
        "language": {
            "url": "//cdn.datatables.net/plug-ins/1.10.19/i18n/Greek.json"
        }
    }));

    datatables_list.push($('#datatable-customer_services').DataTable({
        "order": [6],
        "columnDefs": [
            {"width": "0px", "targets": [7, 8], "orderable": false, "className": "dt-center"}
        ],
        "language": {
            "url": "//cdn.datatables.net/plug-ins/1.10.19/i18n/Greek.json"
        }
    }));
    datatables_list.push($('#datatable-customer_products_by_customer').DataTable({
        "order": [3],
        "columnDefs": [
            {"width": "0px", "targets": [4], "orderable": false, "className": "dt-center"}
        ],
        "language": {
            "url": "//cdn.datatables.net/plug-ins/1.10.19/i18n/Greek.json"
        }
    }));

    datatables_list.push($('#datatable-customer_services_by_customer').DataTable({
        "order": [4],
        "columnDefs": [
            {"width": "0px", "targets": [5], "orderable": false, "className": "dt-center"}
        ],
        "language": {
            "url": "//cdn.datatables.net/plug-ins/1.10.19/i18n/Greek.json"
        }
    }));
}

function set_all_DaterRangePicker() {
    $('#date_range span').val("All time");
    console.log("ALL")
}

function init_MyDaterRangePicker(callback_f) {


    var start = moment('2018-01-01');
    var end = moment();
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