

var targetNumber = 0;
var losses = 0;
var wins = 0;
var targetNumber = 0;
var img = ["assets/images/Star1.jpg","assets/images/Star2.jpg","assets/images/Star3.jpg","assets/images/Star4.jpg"];
var counter = 0;

// Computer to chose a random Target Number

function generateTargetNumber () {
    targetNumber = Math.floor(Math.random()*50);
}

// track and display score


function updateScoreHTML() {
  var html = "<h1>" + counter + "</h1>";
  document.querySelector("#score-here").innerHTML = html;
}

// display current target number

function updateTargetNumberHTML() {
  $("#target-number").text(targetNumber);
}

//reset the game using a button


function reset_game (){
  counter = 0;
  generateTargetNumber();
  updateScoreHTML()
  updateTargetNumberHTML();
}

function playAudio(){
       var audio = document.getElementById("myAudio");
       console.log(audio);

       audio.play();
                 }


function pauseAudio(){
       var audio = document.getElementById("myAudio");
       audio.pause();
                 }





generateTargetNumber();

updateTargetNumberHTML();

  


  // Creating multiple galaxies each with their own unique number value.
  var numberOptions = [10, 5, 3, 7];

  // Create a for loop to create galaxies for every numberOption.
  for (var i = 0; i < numberOptions.length; i++) {

    // For each iteration, create an imageGalaxy
    var imageGalaxy = $("<img>");

    // First each galaxy will be given the class ".galaxy-image".
    imageGalaxy.addClass("galaxy-image");

    // Each imageGalaxy will be given a src link to the galaxy image
    imageGalaxy.attr("src", img[i]);

    // Each imageGalaxy will be given a data attribute called data-galaxyValue.
    // This data attribute will be set equal to the array value.
    imageGalaxy.attr("data-galaxyvalue", numberOptions[i]);

    // Each galaxy image will get added to the page.
    $("#galaxies").append(imageGalaxy);
  }




  // Click event applied to every single galaxy on the page.
  $(".galaxy-image").on("click", function() {

    // Determining the galaxy's value requires us to extract the value from the data attribute.
    // Using the $(this) keyword specifies that we should be extracting the galaxy value of the clicked galaxy.
    // Using the .attr("data-galaxyvalue") allows us to grab the value out of the "data-galaxyvalue" attribute.
    // Since attributes on HTML elements are strings, we must convert it to an integer before adding to the counter
    
    var galaxyValue = ($(this).attr("data-galaxyvalue"));
    galaxyValue = parseInt(galaxyValue);
    // We then add the galaxyValue to the user's "counter" which is a global variable.
    // Every click, from every galaxy adds to the global counter.
    counter += galaxyValue;

    // All of the same game win-lose logic applies. So the rest remains unchanged.
   updateScoreHTML()

    // alert("New score: " + counter);

    if (counter === targetNumber) {
      
      wins = wins + 1

      var html =
          "<p> " + wins + "</p>";

    document.querySelector("#wins-here").innerHTML = html;
    }

    else if (counter >= targetNumber) {
      // var losses = losses + 1
losses = losses + 1

    var html = "<p>" + losses + "</p>";

    document.querySelector("#losses-here").innerHTML = html;
    } 
  });


document.querySelector("#button_reset").addEventListener('click', reset_game);








