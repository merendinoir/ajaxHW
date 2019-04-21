var topics = [
    "Office humor",
    "Weekend vibes",
    "Lazy days",
    "Sleepy",
    "Random"
];

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

$("#add-GIF").on("click", function(event) {
    event.preventDefault();
    var topic = $("#GIF-input").val().trim();
    topics.push(topic);
    $("#GIF-input").empty();
    renderButtons();
});

renderButtons();

