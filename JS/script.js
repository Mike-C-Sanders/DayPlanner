//Moment.js Variables
var today = moment().local();
var currentHour = moment().hour();

//jQuery variables
var $currentDayEl = $('#currentDay');
// var $button9AM= $('#button-9AM');
var $text9AM = $('#9AM');

//Other Global Variables
var buttonID = '#button-';
var timeArray = ['9AM', '10AM', '11AM', '12PM', '1PM', '2PM', '3PM', '4PM', '5PM'];

var $button9AM = $(buttonID+timeArray[0]);
//displays current day/time at the top of the page
$currentDayEl.text(today.format("dddd, MMMM Do YYYY"));

//TODO Time block color code - past, present, or future

var timeBlockedColor = function(){
    $text9AM.addClass('background-past');
}

//function create event listener for each textarea. 
var createEventListeners = function(){
    //Loop through each time array element and apply event listeners
    timeArray.forEach(function(i){
        var $listener = $(buttonID+i);
        var textID = $('#'+i);

        //Event Listener on Save button
        $listener.on('click', function(event){
            event.preventDefault();
            var text = textID.val();
            console.log(text);
            //store items locally
            localStorage.setItem(i, text);
        });
    })
}

//function to get the local storage value for a given text field
var getEntry = function(){
    //Loop through all time entry fields 
    timeArray.forEach(function(i){
        //access the text field ID
        var textID = $('#'+ i);
        console.log(i);
        //using time array as the key for getting items in storage
        var lastEntry = localStorage.getItem(i);
        console.log(lastEntry);
        if(lastEntry !==null){
            textID.val(lastEntry);
        }

    })
}

createEventListeners();
getEntry();




