let currentDayPElement = $("#currentDay");

// Stores the current hour of the day
let currentTime = moment().format("kk");

// Function will be called when page is loaded
$(function () {
    currentDayPElement.text(moment().format("dddd, DD MMM YY"));
    colorCodeTimeBlock();
});

// Color codes time block indicating whether it is in past, present or future
function colorCodeTimeBlock() {
    // The current hour is set as bg-warning, all future hours are set as bg-info
    switch (currentTime) {
        case "1":
        case "2":
        case "3":
        case "4":
        case "5":
        case "6":
        case "7":
        case "8":
            $("#eight~.container .col-10").addClass("bg-info");
            break;

        case "9":
            $("#nine .col-10").addClass("bg-warning");
            $("#nine~.container .col-10").addClass("bg-info");
            break;

        case "10":
            $("#ten .col-10").addClass("bg-warning");
            $("#ten~.container .col-10").addClass("bg-info");
            break;

        case "11":
            $("#eleven .col-10").addClass("bg-warning");
            $("#eleven~.container .col-10").addClass("bg-info");
            break;

        case "12":
            $("#twelve .col-10").addClass("bg-warning");
            $("#twelve~.container .col-10").addClass("bg-info");
            break;

        case "13":
            $("#thirteen .col-10").addClass("bg-warning");
            $("#thirteen~.container .col-10").addClass("bg-info");
            break;

        case "14":
            $("#fourteen .col-10").addClass("bg-warning");
            $("#fourteen~.container .col-10").addClass("bg-info");
            break;

        case "15":
            $("#fifteen .col-10").addClass("bg-warning");
            $("#fifteen~.container .col-10").addClass("bg-info");
            break;

        case "16":
            $("#sixteen .col-10").addClass("bg-warning");
            $("#sixteen~.container .col-10").addClass("bg-info");
            break;

        case "17":
            $("#seventeen .col-10").addClass("bg-warning");
            $("#seventeen~.container .col-10").addClass("bg-info");
            break;
    }

}