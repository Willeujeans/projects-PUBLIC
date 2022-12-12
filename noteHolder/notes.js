function noteBox(x, y) {
  this.body = document.createElement("DIV");
  this.head = document.createElement("DIV");
  this.textBox = document.createElement("TEXTAREA");
  this.type = "note";
  this.x = x;
  this.y = y;
  this.hidden = false;
  this.placement = () => {
    this.body.style.left = this.x + "px";
    this.body.style.top = this.y + "px";
  };
  this.addEvent = () => {
    this.head.draggable = "true";
    this.head.addEventListener("click", () => {
      if (this.hidden == true) {
        this.hidden = false;
        this.textBox.classList.add("growBox");
        this.textBox.classList.remove("shrinkBox");
        setTimeout(() => {
          this.textBox.style.opacity = "100%";
          this.textBox.style.height = "100%";
        }, 900);
        setTimeout(() => {
          this.textBox.classList.remove("growBox");
        }, 1000);
      } else {
        this.hidden = true;
        this.textBox.classList.add("shrinkBox");
        this.textBox.classList.remove("growBox");
        setTimeout(() => {
          this.textBox.style.opacity = "0%";
          this.textBox.style.height = "0%";
        }, 900);
        setTimeout(() => {
          this.textBox.classList.remove("shrinkBox");
        }, 1000);
      }
    });
    this.head.addEventListener("drag", (event) => {
      this.body.style.display = "none";
      this.x = event.clientX;
      this.y = event.clientY;
      this.placement();
    });
    this.head.addEventListener("dragend", (event) => {
      this.x = event.clientX;
      this.y = event.clientY;
      this.placement();
      this.body.style.display = "block";
    });
  };
  this.addSaveEvent = () => {
    this.textBox.addEventListener("input", () => {
      gridSpace.saveData(this);
    });
  };
  this.assemblePieces = () => {
    this.body.classList.add("box");
    this.body.classList.add(this.type);
    this.head.innerHTML = this.type;
    let grid = document.getElementById("grid");
    grid.appendChild(this.body);
    this.body.appendChild(this.head);
    this.head.classList.add("boxHeading");
    this.body.appendChild(this.textBox);
    this.textBox.classList.add("noteInsideText");
    this.textBox.contenteditable = "true";
    this.textBox.innerHTML = "TEXT";
  };

  this.placement();
  this.addEvent();
  this.addSaveEvent();
  this.assemblePieces();
}
function titleBox(x, y) {
  this.body = document.createElement("DIV");
  this.head = document.createElement("DIV");
  this.textBox = document.createElement("TEXTAREA");
  this.type = "title";
  this.x = x;
  this.y = y;
  this.hidden = false;
  this.placement = () => {
    this.body.style.left = this.x + "px";
    this.body.style.top = this.y + "px";
  };
  this.addEvent = () => {
    this.head.draggable = "true";
    this.head.addEventListener("click", () => {
      if (this.hidden == true) {
        this.hidden = false;
        this.textBox.classList.add("growBox");
        this.textBox.classList.remove("shrinkBox");
        setTimeout(() => {
          this.textBox.style.opacity = "100%";
          this.textBox.style.height = "100%";
        }, 900);
        setTimeout(() => {
          this.textBox.classList.remove("growBox");
        }, 1000);
      } else {
        this.hidden = true;
        this.textBox.classList.add("shrinkBox");
        this.textBox.classList.remove("growBox");
        setTimeout(() => {
          this.textBox.style.opacity = "0%";
          this.textBox.style.height = "0%";
        }, 900);
        setTimeout(() => {
          this.textBox.classList.remove("shrinkBox");
        }, 1000);
      }
    });
    this.head.addEventListener("drag", (event) => {
      this.body.style.display = "none";
      this.x = event.clientX;
      this.y = event.clientY;
      this.placement();
    });
    this.head.addEventListener("dragend", (event) => {
      this.x = event.clientX;
      this.y = event.clientY;
      this.placement();
      this.body.style.display = "block";
    });
  };
  this.addSaveEvent = () => {
    this.textBox.addEventListener("input", () => {
      gridSpace.saveData(this);
    });
  };
  this.assemblePieces = () => {
    this.body.classList.add("box");
    this.body.classList.add(this.type);
    this.head.innerHTML = this.type;
    let grid = document.getElementById("grid");
    grid.appendChild(this.body);
    this.body.appendChild(this.head);
    this.head.classList.add("titleHeading");
    this.body.appendChild(this.textBox);
    this.textBox.classList.add("titleText");
    this.textBox.contenteditable = "true";
    this.textBox.innerHTML = "TEXT";
  };

  this.placement();
  this.addEvent();
  this.addSaveEvent();
  this.assemblePieces();
}
let gridSpace = {
  boxArray: [],
  grid: document.getElementById("grid"),
  createBox: (type, x, y) => {
    let Boxy = 0;
    console.log(type);
    if (type == "note") {
      Boxy = new noteBox(x, y);
    } else if (type == "title") {
      Boxy = new titleBox(x, y);
    } else if (type == "square") {
      Boxy = new noteBox(x, y);
    }
    gridSpace.boxArray.push(Boxy);
  },
  saveData: (input) => {
    console.log(input.textBox.value);
  },
  setDropZone: () => {
    gridSpace.grid.addEventListener("dragover", (event) => {
      event.preventDefault();
    });
    gridSpace.grid.addEventListener("drop", (event) => {
      event.preventDefault();
    });
  },
};

let toolBar = {
  toolButton: document.getElementById("toolButton"),
  bar: document.getElementById("toolBar"),
  isOpen: false,
  addExpandBarClickEvent: () => {
    let toolBtn = document.getElementById("toolButton");
    toolBtn.addEventListener("click", () => {
      if (toolBar.isOpen == false) {
        toolBar.bar.style.opacity = "100%";
        toolBar.bar.style.height = "auto";
        toolBar.bar.style.pointerEvents = "all";
        toolBar.bar.style.cursor = "grab";
        toolBar.isOpen = true;
      } else {
        toolBar.bar.style.opacity = "0%";
        toolBar.bar.style.height = "0px";
        toolBar.bar.style.pointerEvents = "none";
        toolBar.bar.style.cursor = "default";
        toolBar.isOpen = false;
      }
    });
  },
  addDragEventToTools: () => {
    let note = document.getElementById("note");
    let title = document.getElementById("title");
    let square = document.getElementById("square");
    note.addEventListener("dragend", (event) => {
      console.log("dragged note");
      gridSpace.createBox("note", event.clientX, event.clientY);
    });
    title.addEventListener("dragend", (event) => {
      console.log("dragged title");
      gridSpace.createBox("title", event.clientX, event.clientY);
    });
    square.addEventListener("dragend", (event) => {
      console.log("dragged square");
      gridSpace.createBox("square", event.clientX, event.clientY);
    });
  },
};

gridSpace.setDropZone();
toolBar.addExpandBarClickEvent();
toolBar.addDragEventToTools();
