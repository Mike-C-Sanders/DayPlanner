var $currentDayEl = $('#currentDay');
var today = moment().local();
var $button9AM= $('#button-9AM');
var $text9AM = $('#9AM');

//displays current day/time at the top of the page
$currentDayEl.text(today.format("dddd, MMMM Do YYYY"));

//TODO Determine standard business hours

//TODO Time block color code - past, present, or future

//TODO Events are stored in Local Storage

$button9AM.on('click', function(event){
    event.preventDefault();
    var text = $text9AM.val();
    localStorage.setItem('9AM', text)

});

var newText = localStorage.getItem('9AM');

$text9AM.val(newText);