//Moment.js Variables
var today = moment().local();
var currentHour = moment().hour();

//Global jQuery variables
var $currentDayEl = $('#currentDay');

//Other Global Variables
var buttonID = '#button-';
var timeArray = ['9AM', '10AM', '11AM', '12PM', '1PM', '2PM', '3PM', '4PM', '5PM'];

//displays current day/time at the top of the page
$currentDayEl.text(today.format("dddd, MMMM Do YYYY"));

//Time block color code - past, present, or future
var timeBlockedColor = function(){
    var length = timeArray.length;
    var timeIndex = currentHour - length;

    for(var i = 0; i < length; i++){
        //past
        if(i < timeIndex){
            pastColor(i);
        }
        //present
        else if(i === timeIndex){
            presentColor(i);
        }
        //future
        else{
            futureColor(i);
        }
        
    }
}

//function to change the text area color to the past background class
var pastColor = function(index){
    var textID = $("#"+timeArray[index]);
    //Remove the previous color if there was one
    textID.removeClass('background-future background-present');
    
    //add color
    textID.addClass('background-past')
}
//function to change the text area color to the present background class
var presentColor = function(index){
    var textID = $("#"+timeArray[index]);
    //Remove the previous color if there was one
    textID.removeClass('background-future background-past');
    
    //add color
    textID.addClass('background-present')
}
//function to change the text area color to the future background class
var futureColor = function(index){
    var textID = $("#"+timeArray[index]);
    //Remove the previous color if there was one
    textID.removeClass('background-past background-present');

    //add color
    textID.addClass('background-future')
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

        //using time array as the key for getting items in storage
        var lastEntry = localStorage.getItem(i);

        if(lastEntry !==null){
            textID.val(lastEntry);
        }

    })
}

//Clear your schedule function to clear local storage & The current schedule
var clearSchedule = function(){
    var clear = $('#button-clear');
    clear.on('click', function(){
        localStorage.clear();
        clearTextArea();
    })
}

//Clear the text area 
var clearTextArea = function(){
    timeArray.forEach(function(i){
        var textID = $('#'+i);

        textID.val('');

    })
}

// * Main function calls
createEventListeners();
getEntry();
timeBlockedColor();
clearSchedule();