window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 95 || document.documentElement.scrollTop > 95) {
    document.getElementById("header").style.fontSize = "0.90rem";
    //document.getElementById("navBar").style.fontFamily="KumbhSans-Med"
    //document.getElementById("header").style.fontFamily = "KumbhSans-Bold";
    document.getElementById("header").style.transition = "all linear 0.05s";
    document.getElementById("webTitle").style.fontSize = "1.8rem";
    document.getElementById("webTitle").style.fontFamily = "KumbhSans-Med";
    document.getElementById("webTitle").style.paddingBottom = "0px";
    document.getElementById("webTitle").style.transition = "all linear 0.05s";
    
  }
  else{
    document.getElementById("webTitle").style.fontFamily = "kumbhsans-reg";
    document.getElementById("header").style.fontSize = "1rem";
    document.getElementById("webTitle").style.fontSize = "48px";
  }
}