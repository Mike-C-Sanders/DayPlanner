//Moment.js Variables
var today = moment().local();
var currentHour = moment().hour();

//jQuery variables
var $currentDayEl = $('#currentDay');
var $button9AM= $('#button-9AM');
var $text9AM = $('#9AM');


//displays current day/time at the top of the page
$currentDayEl.text(today.format("dddd, MMMM Do YYYY"));

//TODO Determine standard business hours

//TODO Time block color code - past, present, or future

var timeBlockedColor = function(){
    $text9AM.addClass('background-past');
}

//TODO Events are stored in Local Storage
//Loop through the event creation and local storage using an array?

$button9AM.on('click', function(event){
    event.preventDefault();
    var text = $text9AM.val();
    localStorage.setItem('9AM', text);
});

var newText = localStorage.getItem('9AM');

$text9AM.val(newText);