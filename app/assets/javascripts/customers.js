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
    });
    if (l === "All") {
        set_all_DaterRangePicker()
    }
}


$(document).on('turbolinks:load', function () {
    console.log(":load customer");
    refresh_by_range(start, end, "All");
    init_MyDaterRangePicker(refresh_by_range);
});

$(document).ready(function () {
    console.log(":ready customers");
    // refresh_by_range(start, end, "All");
    // init_MyDaterRangePicker(refresh_by_range);
});

