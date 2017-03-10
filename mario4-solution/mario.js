"use strict";

var heightElem = document.getElementById("height");
var formElem = document.getElementById("draw-form");

// set a handler function for the form's submission event
formElem.addEventListener("submit", function(event) {
    // prevent the form from submitting (otherwise page will refresh)
    event.preventDefault();

    // clear any previous error message that might be displayed from last time
    clearError();

    // figure out the height the user typed
    var heightStr = heightElem.value;

    // if they didn't type anything, yell at them and exit early
    if (heightStr == "") {
        displayError("Please provide a height");
        return;
    }

    // convert the string to an int
    var height = parseInt(heightStr);

    // if the height is not-a-number or not positive, yell at them and exit early
    if (isNaN(height) || height < 1) {
        displayError("That's not a valid height.");
        return;
    }

    // if the height is absurdly tall, yell at them and exit early
    var tooTall = 100;
    if (height > tooTall) {
        displayError("Are you crazy? I can't build a pyramid that tall.");
        return;
    }

    // draw pyramid with the specified height
    drawPyramid(height);
});

/**
 * displayError
 *
 * Displays an error message on the text input, and colors it red
 */
function displayError(message) {
    heightElem.className = "invalid-field";
    document.querySelector(".error-message").innerHTML = message;
}

/*
 * clearError
 *
 * Undisplays the error message and removes the red CSS style
 */
function clearError(message) {
    heightElem.className = "";
    document.querySelector(".error-message").innerHTML = "";
}

/**
 * drawPyramid
 *
 * Renders, in the HTML document, a Mario pyramid of the specified height
 */
function drawPyramid(height) {
    var pyramid = document.getElementById("pyramid");

    // first, clear the old content
    pyramid.innerHTML = "";

    // for each row....
    for (var row = 0; row < height; row++) {

        // figure out number of bricks and spaces
        var numBricks = row + 2;
        var numSpaces = height - row - 1;

        // build up a string for this row
        var rowStr = "";
        for (var i = 0; i < numSpaces; i++) {
            var spaceChar = "&nbsp";
            rowStr += spaceChar;
        }
        for (var i = 0; i < numBricks; i++) {
            rowStr += "#";
        }

        // make a <p> element for this row, and insert it into the #pyramid container
        var rowElem = document.createElement("p");
        rowElem.innerHTML = rowStr;
        pyramid.appendChild(rowElem);
    }
}
