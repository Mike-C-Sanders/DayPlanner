# DayPlanner

A simple calendar application that allows a user to save events for each hour of the working day. The assumption is that a standard working day is 9am - 5pm local time.

The user has the ability to clear their schedule when a snow day happens or they want to take the day off.

Access the application here: <https://mike-c-sanders.github.io/DayPlanner/>

    What to expect when opening the application
<img width="960" alt="Application" src="https://user-images.githubusercontent.com/71601403/150996157-90c8de33-dac1-4d47-817d-202522e63cf5.PNG">

    Example of application in action
<img width="959" alt="InAction" src="https://user-images.githubusercontent.com/71601403/150996353-8d53316c-b76a-4ab1-96c7-9b0e681fab04.PNG">

## Functional Notes

The application is leveraging local storage, it's recommended to clear your local storage before using this application. Feel free to use the clear schedule button to make this easier.

### To Use

1. Clear your schedule.

2. Time blocks will be shown in three colors. If a time is in the past the text area will be gray, if the time block is the current time it will be red, and if the time block is in the future it will be green.

3. Click the text area and record your entry.

4. Click the save button to the right.

5. Your entry is now saved in local storage. If you need to return to your schedule and check later, it will be there.

6. At the end of the day clear your schedule.

## Table of Contents

1. README.md - primary readme file
2. index.html - primary html source
3. CSS - Folder storing all style sheets
    a. style.css - primary css file
4. Images - Folder storing all images and screenshots
    a. Application - image showing the starting screen for the applicaiton
    b. favicon.ico - favicon image of an alarmclock
    c. InAction - application in use

## Libraries Used & Docs

1. JQuery - <https://api.jquery.com/>
2. BootStrap - <https://getbootstrap.com/docs/5.1/getting-started/introduction/>
3. Moment.js - <https://momentjs.com/docs/>