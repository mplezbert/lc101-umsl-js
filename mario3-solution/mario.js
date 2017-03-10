"use strict";

function getHeightAndDrawPyramid() {
    // Get the entered height.
    var heightStr = heightElement.value;

    // Convert the string to an int.
    var height = parseInt(heightStr);

    // Draw the pyramid with that height.
    drawPyramid(height);
}

// Attach a keypress handler to the height field to draw the pyramid
// when the enter key is pressed.
var heightElement = document.getElementById("height");
heightElement.addEventListener("keypress", function(event) {
    if (event.keyCode == 13) {  // 13 is the enter key
        getHeightAndDrawPyramid();
    }
});

// Attach a click handler to the button.
var button = document.getElementById("draw-button");
button.addEventListener("click", function(event) {
    getHeightAndDrawPyramid();
});

/**
 * drawPyramid
 *
 * Renders, in the HTML document, a Mario pyramid of the specified height.
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
            rowStr += ".";
        }
        for (var i = 0; i < numBricks; i++) {
            rowStr += "#";
        }

        // create a text element with the string of characters
        var textElem = document.createTextNode(rowStr);

        // create a <p> element with the text inside
        var rowElem = document.createElement("p");
        rowElem.appendChild(textElem);

        // insert the paragraph as a child of the container <div>
        pyramid.appendChild(rowElem);
    }
}
