//main.js

let yo = function (){
  console.log ("fooBar");
  alert ("JS loaded");
}

yo();


$('ul.nav').find('a').click(function(){
    var $href = $(this).attr('href');
    var $anchor = $('#'+$href).offset();
    window.scrollTo($anchor.left,$anchor.top);
    return false;
});
