var topics = [
    "Office humor",
    "Weekend vibes",
    "Lazy days",
    "Sleepy",
    "Random"
];

function displayGIF() {
    var topic = $(this).attr("data-name");
    var APIkey = "&api_key=JwHOoKapA4DZls18ePCOR0T2skwmDImv";
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + topic + APIkey + "&limit=10";

// creating AJAX call
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response){
        console.log(response);
        console.log(response.data[0].images.original.url)

// Saving the image_original_url property
// confused on what index # to use bc dont I need to all the URL's? or do i not even need this step. was looking at the cat-button solved example - line:38
        var imageURL = response.data[0].images.original.url;
// Creating and storing an image tag  
        var gifImage = $("<img>");

// Setting the catImage src attribute to imageUrl
        gifImage.attr("src", imageURL);
        gifImage.attr("alt", "data-name");

// Prepending the catImage to the images div
        $("#images").append(gifImage);

    });
}
// displayGIF();

// Looping through topics array and dynamically creating buttons with the class and ID assigned; adding text to the buttons; appending the buttons to our button-view div
function renderButtons(){
    $("#buttons-view").empty();
    for (var i = 0; i < topics.length; i++) {
        var a = $("<button>");
        a.addClass("gif-btn");
        a.attr("data-name", topics[i]);
        a.text(topics[i]);
        $("#buttons-view").append(a);
    }
}

// pushing the user's choice to our array from the textbox
$("#addGIF").on("click", function(event) {
    event.preventDefault();
    var topic = $("#inputGIF").val().trim();
    topics.push(topic);
    $("#inputGIF").empty();
    renderButtons();
});

$(document).on("click", ".gif-btn", displayGIF);


// Calling fxn to display initial buttons
renderButtons();

