var $currentDayEl = $('#currentDay');
var today = moment().local();

//displays current day/time at the top of the page
$currentDayEl.text(today.format("dddd, MMMM Do YYYY"));

//TODO Determine standard business hours

//TODO Time block color code - past, present, or future

//TODO Events are clickable and typeable text

//TODO Events are stored in Local Storage