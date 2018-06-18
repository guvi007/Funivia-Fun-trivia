var inst = document.getElementById('instructions');
var go_back = document.getElementById('go_back');

var disp =   document.getElementById('disp');
var buttons = document.getElementById('buttons');

inst.addEventListener("click",function(){

  $(buttons).fadeOut("slow");
  setTimeout(function(){
    $(disp).fadeIn("slow");
  },600);
})

go_back.addEventListener("click",function(){

  $(disp).fadeOut("slow");
  setTimeout(function(){
    $(buttons).fadeIn("slow");
  },600);

})
