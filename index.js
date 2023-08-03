window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("nav-element").style.padding = "5px 5px";
  } else {
    document.getElementById("nav-element").style.padding = "20px 5px";
  }
}