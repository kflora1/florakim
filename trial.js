window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 95 || document.documentElement.scrollTop > 95) {
    document.getElementById("header").style.fontSize = "90%";
    document.getElementById("header").style.fontWeight = "80%";
    document.getElementById("webTitle").style.fontSize = "1.5rem";
  }
  else{
      document.getElementById("header").style.fontSize = "1rem";
      document.getElementById("webTitle").style.fontSize = "48px";
  }
}