

// calculator//

let screen = document.getElementById("display");
let clearbtn = document.getElementById("clearbtn");
let plusbtn = document.getElementById("plusbtn");
let deletebtn = document.getElementById("deletebtn");
let equalbtn = document.getElementById("equal");
let message = document.getElementById("message");
let munisbtn = document.getElementById("minus");

function display(num) {
  message.style.display = "none";
  if(screen.value == ""){
  screen.value += num ;
  }
  else if(screen.value =="Error" || screen.value == "too much !"){
    screen.value = "" + num ;
  }
  else if (screen.value.length >= 11) {
    message.style.display = "inline";
    screen.value += num ;
  }
  else {
    screen.value += num ;
  }
}
clearbtn.addEventListener('click' , function(){
  screen.value = '';
  message.style.display = "none";
  
})
plusbtn.addEventListener('click', function() {
  if(screen.value =="Error" || screen.value == "too much !"){
    screen.value = "" + '+' ;
  }
  else {
    screen.value += '+';
  }
})
munisbtn.addEventListener('click', function() {
  if(screen.value =="Error" || screen.value == "too much !"){
    screen.value = "" + '-' ;
  }
  else {
    screen.value += '-';
  } 
})
deletebtn.addEventListener('click', function(){
  if(screen.value == "Error" || screen.value == "too much !"){
    screen.value = "";
  }
  else if (screen.value.length < 13) {
    screen.value = screen.value.slice(0, -1);
    message.style.display = "none";
    screen.value += num ;
  } 
  else {
  screen.value = screen.value.slice(0, -1);
}})
equalbtn.addEventListener('click', function(){
  try {
    message.style.display = "none";
    screen.value = eval(screen.value);
    if(screen.value == "Infinity" || screen.value == "function Error() { [native code] }"){
      screen.value= "Error";
    }
    else if(screen.value == "undefined"){
      screen.value = "";
    }
    }
  catch(error) {
    screen.value = "Error";
  }
})



