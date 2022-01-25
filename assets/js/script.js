let currentDayPElement = $("#currentDay");
let container = $(".container");

let currentDay = moment().format("dddd, DD MMM YY");
// Stores the current hour of the day
let currentHour = moment().format("HH");
let tempHour = currentHour;
moment.duration(1,"hours");

let eventArray =  JSON.parse(localStorage.getItem(currentDay)) || [];

// Event listener for save button
container.on("click", ".saveBtn", saveEvent);

// Function will be called when page is loaded
$(function () {
    currentDayPElement.text(currentDay);
    colorCodeTimeBlock();
    displayEvents();
    clearPreviousDayInLocalStorage();

    // Color codes when each hour changes
    let timer = setInterval(function() {
        if (moment().format("mm") === "00") {
            colorCodeTimeBlock();
        }
    },1000);
});

// Color codes time block indicating whether it is in past, present or future
function colorCodeTimeBlock() {
    switch (currentHour) {
        case "01":
        case "02":
        case "03":
        case "04":
        case "05":
        case "06":
        case "07":
        case "08":
            $("#nine .col-10").addClass("future");
            $("#nine~.row .col-10").addClass("future");
            break;

        case "09":
            $("#nine .col-10").addClass("present");
            $("#nine~.row .col-10").addClass("future");
            break;

        case "10":
            $("#ten .col-10").addClass("present");
            $("#ten~.row .col-10").addClass("future");
            break;

        case "11":
            $("#eleven .col-10").addClass("present");
            $("#eleven~.row .col-10").addClass("future");
            break;

        case "12":
            $("#twelve .col-10").addClass("present");
            $("#twelve~.row .col-10").addClass("future");
            break;

        case "13":
            $("#thirteen .col-10").addClass("present");
            $("#thirteen~.row .col-10").addClass("future");
            break;

        case "14":
            $("#fourteen .col-10").addClass("present");
            $("#fourteen~.row .col-10").addClass("future");
            break;

        case "15":
            $("#fifteen .col-10").addClass("present");
            $("#fifteen~.row .col-10").addClass("future");
            break;

        case "16":
            $("#sixteen .col-10").addClass("present");
            $("#sixteen~.row .col-10").addClass("future");
            break;

        case "17":
            $("#seventeen .col-10").addClass("present");
            break;
    }
}

// Displays the events saved in local storage 
function displayEvents() {
    for (let i = 0; i < eventArray.length; i++) {
        let timeBlock = $("#" + eventArray[i].hour);
        timeBlock.children("textarea").eq(0).val(eventArray[i].plan);
    }
}

// Clears all previous day entries in local storage
function clearPreviousDayInLocalStorage() {
    for (let i = 0; i < localStorage.length; i++) {
        if (localStorage.key(i) !== currentDay) {
            localStorage.removeItem(localStorage.key(i));
        }
    }
}

// Event is stored in local storage
function saveEvent(event) {
    let hour = $(event.target).parent().attr("id");
    let plan = $(event.target).siblings("textarea").val();

    let eventObject = {
        hour: hour,
        plan: plan
    };

    eventArray.push(eventObject);
    localStorage.setItem(currentDay, JSON.stringify(eventArray));
}