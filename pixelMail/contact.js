let body = document.body;
let result = document.getElementById("result");
let lock = document.getElementById("lock");
let canvasCont = document.createElement("SPAN");
let canvasCont2 = document.createElement("DIV");
canvasCont.classList.add("backGraph");
canvasCont2.classList.add("backGraph");
canvasCont2.style.position = "absolute";
canvasCont2.style.top = "0";
canvasCont.style.cursor = "pointer";
canvasCont2.style.cursor = "pointer";
canvasCont.style.position = "absolute";
canvasCont.style.top = "0";
canvasCont.style.left = "50%";
canvasCont.style.transform = "translateX(-50%)";
canvasCont2.style.left = "50%";
canvasCont2.style.transform = "translateX(-50%)";
let canvasHolster = document.getElementById("canvasHolster");
canvasHolster.style.position = "relative";
canvasHolster.appendChild(canvasCont);
canvasHolster.appendChild(canvasCont2);
let title = document.getElementById("title");
let contactButton = document.getElementById("contactButton");
let resetButton = document.getElementById("reset");
let symButton = document.getElementById("symButton");
let display = document.getElementById("displayText");
let squareArray = [];
let squareArray2 = [];
let selectedColor = "white";
let size = 0;
let center = 0;
let sym = true;
if (sym == true) {
  symButton.classList.add("selectedTool");
}

function setSize(inputSize) {
  size = inputSize;
  if (size % 2 == 0) {
    size += 1;
  }
  center = Math.floor(size / 2);
}
setSize(18);

let colors = {
  blackButton: document.getElementById("cButBlack"),
  whiteButton: document.getElementById("cButWhite"),
  orangeButton: document.getElementById("cButOrange"),
  greenButton: document.getElementById("cButGreen"),
  blueButton: document.getElementById("cButBlue"),
  setColors: () => {
    symButton.addEventListener("click", () => {
      sym = !sym;
      if (sym == true) {
        symButton.classList.add("selectedTool");
      } else {
        symButton.classList.remove("selectedTool");
      }
    });
    colors.blackButton.addEventListener("click", () => {
      colors.clearSelected();
      selectedColor = "black";
      colors.blackButton.classList.add("selectedTool");
    });
    colors.whiteButton.addEventListener("click", () => {
      colors.clearSelected();
      selectedColor = "white";
      colors.whiteButton.classList.add("selectedTool");
    });
    colors.orangeButton.addEventListener("click", () => {
      colors.clearSelected();
      selectedColor = "orange";
      colors.orangeButton.classList.add("selectedTool");
    });
    colors.greenButton.addEventListener("click", () => {
      colors.clearSelected();
      selectedColor = "olive";
      colors.greenButton.classList.add("selectedTool");
    });
    colors.blueButton.addEventListener("click", () => {
      colors.clearSelected();
      selectedColor = "teal";
      colors.blueButton.classList.add("selectedTool");
    });
  },
  clearSelected: () => {
    console.log(selectedColor);
    colors.blackButton.classList.remove("selectedTool");
    colors.whiteButton.classList.remove("selectedTool");
    colors.orangeButton.classList.remove("selectedTool");
    colors.greenButton.classList.remove("selectedTool");
    colors.blueButton.classList.remove("selectedTool");
  },
};

function gridCreate(size, array, canvas) {
  for (let r = 0; r < size; r++) {
    let row = document.createElement("SPAN");
    row.style.display = "flex";
    row.style.flexDirection = "row";
    row.style.flexDirection = "row";
    row.style.lineHeight = ".8rem";
    canvas.appendChild(row);
    array[r] = new Array();
    for (let s = 0; s < size; s++) {
      let square = document.createElement("DIV");
      square.innerHTML = "&lhblk;";
      square.style.color = "black";
      square.style.backgroundColor = "black";
      square.style.fontFamily = "sans-serif";
      square.classList.add("pixel");
      row.appendChild(square);
      array[r][s] = square;
      square.addEventListener("click", () => {
        if (sym == true) {
          if (s < center) {
            console.log(center - s + center);
            array[r][center - s + center].style.color = selectedColor;
            array[r][center - s + center].style.backgroundColor = selectedColor;
          }
        }
        square.style.color = selectedColor;
        square.style.backgroundColor = selectedColor;
      });
    }
  }
}
gridCreate(size, squareArray, canvasCont);
gridCreate(size, squareArray2, canvasCont2);

resetButton.addEventListener("click", () => {
  for (let x = 0; x < size; x++) {
    for (let y = 0; y < size; y++) {
      squareArray[x][y].style.color = "black";
      squareArray[x][y].style.backgroundColor = "black";
      squareArray2[x][y].style.color = "black";
      squareArray2[x][y].style.backgroundColor = "black";
    }
  }
  console.log("cleared");
});

body.onkeyup = () => {
  if (title.value.length === 16) {
    saveImage();
    contactButton.style.opacity = "100%";
    title.style.marginTop = "1rem";
  } else {
    contactButton.style.opacity = "0%";
    title.style.marginTop = "18rem";
  }
};

colors.whiteButton.classList.add("selectedTool");
colors.setColors();

let outter = document.getElementById("holsterHolster");

function saveImage() {
  canvasCont.style.visibility = "visible";
  canvasCont2.style.visibility = "visible";
  canvasCont2.style.display = "block";
  canvasHolster.style.height = "16rem";
  canvasHolster.style.overflow = "hidden";
  result.value = outter.innerHTML;
}

let frameButton = document.getElementById("frameFlip");
frameButton.innerHTML = "1";
let currentFrame = true;
canvasCont2.style.visibility = "hidden";
frameButton.addEventListener("click", () => {
  if (currentFrame) {
    frameButton.innerHTML = "2";
    canvasCont2.style.visibility = "visible";
    canvasCont.style.visibility = "hidden";
    console.log("show2");
  } else {
    frameButton.innerHTML = "1";
    canvasCont.style.visibility = "visible";
    canvasCont2.style.visibility = "hidden";
    console.log("show1");
  }
  currentFrame = !currentFrame;
});

let playButton = document.getElementById("playButton");
let play = false;
playButton.addEventListener("click", () => {
  play = !play;

  function flipFlop() {
    if (currentFrame) {
      frameButton.innerHTML = "2";
      canvasCont2.style.visibility = "visible";
      canvasCont.style.visibility = "hidden";
      console.log("show2");
    } else {
      frameButton.innerHTML = "1";
      canvasCont.style.visibility = "visible";
      canvasCont2.style.visibility = "hidden";
      console.log("show1");
    }
    currentFrame = !currentFrame;
    if (play) {
      setTimeout(flipFlop, 1000);
    }
  }
  flipFlop();
});
