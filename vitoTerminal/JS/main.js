var mytext =
    "Hello this is CodeWithVito Terminal here you Can go faster to Any think you need type help for get commands",
  i = 0,
  mybutton = document.getElementById("button");

window.onload = function () {
  var typeWriter = setInterval(function () {
    document.getElementById("myEffect").textContent += mytext[i];
    i++;
    if (i == mytext.length) {
      clearInterval(typeWriter);
    }
  }, 100);
};

let bot = document.getElementById("submit");

let dataFromConsole = document.getElementById("inputT");

let data = {
  1: "https://www.youtube.com/channel/UCrhtoH8XDmHn0VUyI7cB1gA",
  2: "https://www.instagram.com/codewithvito/",
  Youtube: "https://www.youtube.com/channel/UCrhtoH8XDmHn0VUyI7cB1gA",
  youtube: "https://www.youtube.com/channel/UCrhtoH8XDmHn0VUyI7cB1gA",
  instagram: "https://www.instagram.com/codewithvito/",
  Instagram: "https://www.instagram.com/codewithvito/",
};
let helpp = document.getElementById("help");

let mainn = document.getElementById("main");
let cloneN = mainn.cloneNode(true);
let notfound = document.getElementById("notfound");

let coloned = document.getElementById("forClone");
dataFromConsole.addEventListener("keyup", function () {
  if (event.which === 13) {
    if (dataFromConsole.value == "help") {
      helpp.style.visibility = "visible";
      setInterval(function () {
        if (dataFromConsole.value.length > 1) {
          helpp.style.visibility = "hidden";
        }
      }, 500);
    } else if (data[dataFromConsole.value] == undefined) {
      notfound.style.visibility = "visible";
    } else if (dataFromConsole.value in data) {
      window.open(data[dataFromConsole.value]);
      setInterval(function () {
        if (dataFromConsole.value.length > 2) {
          notfound.style.visibility = "hidden";
        }
      }, 500);
    }
  } else {
  }
  if (event.which === 13) {
    dataFromConsole.value = "";
  }
});

console.log(cloneN);
