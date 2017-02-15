

// VARIABLES

 $(document).ready(function() {





// GLOBAL SCOPE VARIABLES =================================

var target = Math.floor((Math.random() * 102 ) +19);
$("#targetnumber").text(target);


var counter = 0;
var wins = 0;
var loss = 0;
    // displays the wins and losses in the .winslosses div.
$(".winslosses").text("Wins " + wins + "Losses " + loss);

// Generates random values for the rupees, a number between 1 and 12. 


options = {

  rupeevalue1: Math.floor((Math.random()*12)+1),
  rupeevalue2: Math.floor((Math.random()*12)+1),
  rupeevalue3: Math.floor((Math.random()*12)+1),
  rupeevalue4: Math.floor((Math.random()*12)+1)

};
// creates img tags for each image, gives them the same class and image. 
var rupee1 = $("<img class='rupee-image' src='assets/images/rupee.png'>");
var rupee2 = $("<img class='rupee-image' src='assets/images/rupee.png'>");
var rupee3 = $("<img class='rupee-image' src='assets/images/rupee.png'>");
var rupee4 = $("<img class='rupee-image' src='assets/images/rupee.png'>");

// assigns the random values from the options object above to each rupee. 
rupee1.attr("data-rupeeValue", options.rupeevalue1);
rupee2.attr("data-rupeeValue", options.rupeevalue2);
rupee3.attr("data-rupeeValue", options.rupeevalue3);
rupee4.attr("data-rupeeValue", options.rupeevalue4);

// adds each image to the .crystal section of the page.
$(".crystals").append(rupee1,rupee2,rupee3,rupee4);

// start of reset function for use at the end of the game.
var reset = function () { 


counter = 0;
$(".counter").text("Your counter: " + counter);
// Reset global crystal values below. 

// have to create a new object so the original value created after the page first loads is no longer used. 
resetoptions = {

  resetvalue1: Math.floor((Math.random()*12)+1),
  resetvalue2: Math.floor((Math.random()*12)+1),
  resetvalue3: Math.floor((Math.random()*12)+1),
  resetvalue4: Math.floor((Math.random()*12)+1)

};


rupee1.attr("data-rupeeValue", resetoptions.resetvalue1);
rupee2.attr("data-rupeeValue", resetoptions.resetvalue2);
rupee3.attr("data-rupeeValue", resetoptions.resetvalue3);
rupee4.attr("data-rupeeValue", resetoptions.resetvalue4);

target = Math.floor((Math.random() * 102) + 19);

$("#targetnumber").text(target);


  rupeevalue1 = resetoptions.resetvalue1,
  rupeevalue2 = resetoptions.resetvalue2,
  rupeevalue3 = resetoptions.resetvalue3,
  rupeevalue4 = resetoptions.resetvalue4



}; // end of reset function.


// Start of on click function. Makes it so each image with the class rupee-image does something when clicked. Also defines a win and a loss, and adds the wins and losses to the page for display. 
$(".rupee-image").on("click", function(){


var rupeeValue = ($(this).attr("data-rupeeValue"));

  rupeeValue= parseInt(rupeeValue);

  counter += rupeeValue;
$(".counter").text("Your counter " + counter);



  if (counter === target) {
    alert("You win!")
    wins++;
    $(".winslosses").text("Wins " + wins + "Losses " + loss);
    reset();    
} 
  else if (counter >= target) {
    alert("You lose!!");
    loss++;
    $(".winslosses").text("Wins " + wins + "Losses " + loss);

    reset();

};




}); // end of onclick function



}); // end document ready 

