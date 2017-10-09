//main.js

let yo = function (){
  console.log ("fooBar");
  alert ("JS loaded");
}

yo();


$('ul.nav').find('a').click(function(){
    let $href = $(this).attr('href');
    let $anchor = $('#'+$href).offset();
    window.scrollTo($anchor.left,$anchor.top);
    return false;
});


// Word Title changer
const words = ['Grateful', 'Humbled', 'Amazed'];
// Function that executes every 2000 milliseconds
let t = setInterval(function() {
  // Random number generator
  let randomNumber = Math.round( Math.random() * (words.length-1) );
  // Change the word in the span for a random one in the array of words
  $('#changing').html( words[ randomNumber ] );
}, 1500);
