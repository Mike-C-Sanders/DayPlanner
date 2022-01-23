var $currentDayEl = $('#currentDay');
var today = moment();
console.log(moment());

$currentDayEl.text(today.format("dddd, MMMM Do YYYY"));

