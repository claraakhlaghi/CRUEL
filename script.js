function myFunction() {
  var text;
  var person = prompt("Please enter your name: ", "Clara Akhlaghi");

  if(person == null || person == "") {
    text = "You are not signed up.";
  }

  else {
    text = "thanks " + person + ". congrats! You are signed up.";
  }

  document.getElementById("message").innerHTML = text;
}










function init() {
  image = document.getElementById("mothernature");
  image.style.position = "relative";
}

var id = null;
function myMove() {
  var elem = document.getElementById("mothernature");   
  var pos = 0;
  clearInterval(id);
  id = setInterval(frame, 7);
  function frame() {
    if (pos == 1021) {
      clearInterval(id);
    } else {
      pos++; 
      elem.style.left = pos + "px"; 
      elem.style.right = pos + "px"; 
    }
  }
}

window.onload = init;



function init() {
  image = document.getElementById("raindrop");
  image.style.position = "relative";
}

var id = null;
function myMove() {
  var elem = document.getElementById("raindrop");   
  var pos = 0;
  clearInterval(id);
  id = setInterval(frame, 5);
  function frame() {
    if (pos == 350) {
      clearInterval(id);
    } else {
      pos++; 
      elem.style.top = pos + "px"; 
      elem.style.bottom = pos + "px"; 
    }
  }
}

window.onload = init;