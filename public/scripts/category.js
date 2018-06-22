$(function(){
console.log("hi");

$("#basic-addon2").click(function(){
  
console.log($("#search")[0].value);

});
$('.addtocart').click(function(){ 
  var image=$(this)[0].parentElement.parentElement.parentElement.children[0].src;
  console.log(image);
  
   var item= ($(this)[0]).parentElement.parentElement.children[0].innerText;
   var description=($(this)[0]).parentElement.parentElement.children[1].innerText;
   var price=($(this)[0]).parentElement.parentElement.children[2].innerText;
   
      var element={item:item,
        description:description,
        image:image,
        price:price
      }
      console.log(element);
      
   $.post(
    '/addtocart',
    {
        'json':JSON.stringify(element)
    },
    function(){

    }
);

});
var availableTags = [
    
  ];
  var data1=$.ajax({
    url : '/json',
    async : false
});

var data=data1.responseJSON;
console.log(data);

if(typeof data!="undefined"){
  availableTags=[];
  console.log(data);
  
var temp=data;
for(var i = 0 ; i < data.length ; i++){
  //console.log( data[i] + " --->  " + data[i].title )
  availableTags.push( data[i].title );
}
console.log("********#####");

console.log(availableTags);

}
console.log(data1);

  $( "#search" ).autocomplete({
    source: availableTags
  });

});     