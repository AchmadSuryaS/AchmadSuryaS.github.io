var i=0,text;
text = "ACHMAD SURYA SAPUTRA"

function ketik() {
  if(i<text.length){
    document.getElementById("text").innerHTML += text.charAt(i);
    i++;
    setTimeout(ketik,100);
  }
}
ketik();

function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

AOS.init();