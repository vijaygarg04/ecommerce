$(function(){
console.log("hi");
$('.addtocart').click(function(){
   var item= ($(this)[0]).parentElement.parentElement.children[0].innerText;
   var description=($(this)[0]).parentElement.parentElement.children[1].innerText;
   var price=($(this)[0]).parentElement.parentElement.children[2].innerText;
   console.log(item+description+price);
  
});
var availableTags = [
    "ActionScript",
    "AppleScript",
    "Asp",
    "BASIC",
    "C",
    "C++",
    "Clojure",
    "COBOL",
    "ColdFusion",
    "Erlang",
    "Fortran",
    "Groovy",
    "Haskell",
    "Java",
    "JavaScript",
    "Lisp",
    "Perl",
    "PHP",
    "Python",
    "Ruby",
    "Scala",
    "Scheme"
  ];
  $( "#search" ).autocomplete({
    source: availableTags
  });

});     