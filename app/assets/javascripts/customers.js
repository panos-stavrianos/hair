function refresh_by_range(s, e, l) {
    s._d.setTimezone("Europe/Athens");
    e._d.setTimezone("Europe/Athens");

    let data_j = {
        start: s._d.getTime(),
        end: e._d.getTime(),
        label: l,
    };

    $.post(location.pathname, data_j, function (response) {
        $("#show_content").html(response);
        clear_datatables_list();
        init_MyDataTables();
    });
    if (l === "All") {
        set_all_DaterRangePicker()
    }
}


$(document).on('turbolinks:load', function () {
    console.log(":load customer");
    init_MyDaterRangePicker(refresh_by_range);
});

$(document).ready(function () {
    console.log(":ready customers");
    init_MyDaterRangePicker(refresh_by_range);

});

