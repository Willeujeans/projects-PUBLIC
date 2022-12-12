/*eslint-env browser*/
var width = window.innerWidth;
var height = window.innerHeight;
var body = document.body;
var gridOutter = [];
var boxSize = 25;
var orgSpeed = (boxSize*2);
var speed = orgSpeed;
var heightGrid = Math.ceil((height / boxSize));
var widthGrid = Math.ceil((width / boxSize));
var boxList = [];
var flexGrid = document.createElement('div');
body.append(flexGrid);
flexGrid.style.height = '100%';
flexGrid.style.width = '100%';
flexGrid.className = 'flexContainer';
flexGrid.style.display = 'grid';
var gridInner = [];
var pressed = false;
var change = .5;
var startingGridSize = 0;
console.log(widthGrid, heightGrid);
var spaceBar = document.getElementById('spaceBar');

spaceBar.addEventListener("click", function spaceClicked() {
    pressed = true;
    spaceBar.style.opacity = '0%';
    spaceBar.style.pointerEvents = 'none';
        randomGrabber();
    })

document.body.onkeyup = function(e) {
  if (e.key == " " ||
      e.code == "Space" ||      
      e.keyCode == 32      
  ) {
      if(pressed == false){
          pressed = true;
          spaceBar.style.opacity = '0%';
          spaceBar.style.pointerEvents = 'none';
          speed = orgSpeed;
          randomGrabber(); 
      }else{
          pressed = false;
          speed = 10000000;
      }

  }
}

function createGrid() {
    flexGrid.style.grid = 'repeat(' + heightGrid + ','+boxSize+'px)/ repeat('+widthGrid+','+boxSize+'px)';
    for (var x = 0; x < widthGrid; x++) {
        gridOutter[x] = gridInner;
        for (var y = 0; y < heightGrid; y++) {
            var box = document.createElement('div');
            flexGrid.appendChild(box);
            gridInner[y] = box;
            box.style.width = boxSize;
            box.style.height = boxSize;
            box.style.transition = 'background .2s';
            box.className = 'box';
            boxList.push(box);
        }
    }
    startingGridSize = boxList.length;
    console.log(boxList);
}

function timeChanger(){
     if(boxList.length < startingGridSize/4){
        change = .6;
         speed = speed+change;
    }else{
        change = .5;
        speed = speed-change;
    }
}

        
        
function randomGrabber(){
timeChanger();
        if(boxList.length <= 0){
        clearTimeout(grabLoop);  
    }else{     
    var choice = Math.floor(Math.random() * boxList.length);
    var grabbedBox = boxList[choice];
    grabbedBox.style.background = 'transparent';
    boxList.splice(choice, 1);
    console.log('POP!');
    var grabLoop = setTimeout(randomGrabber, speed);
    }
}

createGrid();

//"repeat(" + widthGrid + "," + boxSize + "px)" + "/" + "repeat(" + heightGrid + "," + boxSize + "px)";
//    var box = document.createElement('div')
