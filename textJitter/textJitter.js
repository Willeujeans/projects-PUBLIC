let running = false;
let elementCount = 0;
let flickerElements =0;
function rand(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
function randStr() {
  return String.fromCharCode(rand(32, 126));
}
String.prototype.replaceAt = function (index, replacement) {
  return (
    this.substring(0, index) +
    replacement +
    this.substring(index + replacement.length)
  );
};

function flicker(elm, sort, speed) {
  let e = elm;
  let o = e.innerHTML;
  let s = "";
  for (let x = 0; x < o.length; x++) {
    s += "i";
  }
  loop(e, o, s);
  function loop(elm, org, str) {
    for (let n = 0; n < org.length; n++) {
      if (sort == true) {
        if (str[n] == org[n] && str[n - 1] == org[n - 1]) {
        } else {
          str = str.replaceAt(n, randStr());
        }
      } else {
        if (str[n] == org[n]) {
        } else {
          str = str.replaceAt(n, randStr());
        }
      }
    }
    if (str === org) {
      console.log(
        "%c" + str + "=" + org,
        "color: gold; font-family:sans-serif; font-size: 1rem"
      );
      elm.style.opacity = "100%";
      elementCount++;
      if(elementCount >= flickerElements){
        elementCount = 0;
        running = false;
      }
    } else {
      setTimeout(function () {
        loop(elm, org, str);
      }, speed);
    }
    elm.innerHTML = str;
  }
}

function callFlickers(classN, sort, speed) {
  let elements = document.getElementsByClassName(classN);
  flickerElements = elements.length;
  for (let u = 0; u < elements.length; u++) {
    elements[u].style.opacity = "70%";
    flicker(elements[u], sort, speed);
  }
}
function hideAllFlickers() {
  let hideElm = document.getElementsByClassName("flicker");
  for (let h = 0; h < hideElm.length; h++) {
    hideElm[h].style.opacity = "0%";
  }
}

hideAllFlickers();
document.body.addEventListener("click",()=>{
  if(running == false){
     callFlickers("flicker", false, 10);
    running = true;
  }
});

