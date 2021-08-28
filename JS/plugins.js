var onS = document.getElementById("content1");
var onS1 = document.getElementById("socialM");

var navvv = document.getElementById("navv");
var accc = document.getElementById("active");
var accx = document.getElementById("activea");
var galll = document.getElementById("photos");
window.onscroll = function () {
  if (window.scrollY > 235) {
    onS.classList.add("horizTranslate");
    onS1.classList.add("horizTranslate");
    navvv.classList.add("horizTranslate");

    navvv.style.visibility = "visible";
    onS.style.opacity = 0.3;
    onS1.style.opacity = 0.3;
    accc.style.color = "#f6f6f6";
    if (window.scrollY < 900) {
      galll.classList.add("horizTranslate");
      galll.style.opacity = "1";
      accx.style.color = "#FCB922";
    } else {
    }
  } else {
    galll.style.opacity = "0";
    onS.style.opacity = "100";
    onS1.style.opacity = "100";
    navvv.style.visibility = "hidden";
    accc.style.color = "#FCB922";
    accx.style.color = "#fff";
  }
};

// window.onscroll = function () {
//   if (accc.scrollY > 980) {
//   }
// };

var loading = document.getElementById("load");
$(document).ready(function () {
  setTimeout(function () {
    $(".loader").fadeOut("slow");
  }, 1000);
});
