let currentDayPElement = $("#currentDay") ;
let containerDiv = $(".container");

$(function () {
    currentDayPElement.text(moment().format("dddd, DD MMM YY"));
});