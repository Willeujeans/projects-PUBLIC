let submitButton = document.getElementById("submitButton");
let fileButton = document.getElementById("file-upload");
let bigBox = document.getElementById("bigBox");
fileButton.addEventListener("change", () => {
  let fileDisplay = document.getElementById("fileDisplay");
  var files = document.getElementById("file-upload").files;
  if (files.length > 0) {
    submitButton.style.opacity = "100%";
    submitButton.style.transform = "translateY(0px);"
    submitButton.style.pointerEvents = "all";
    submitButton.style.cursor = "pointer";
    for (var i = 0; i < files.length; i++) {
      fileDisplay.innerHTML += files[i].name;
      fileDisplay.innerHTML += "</br>";
    }
  }

});
let plan1 = document.getElementById("planDigital");
let plan2 = document.getElementById("planPrinted");
let plan3 = document.getElementById("planThemed");
let planBox1 = document.getElementById("planBox1");
let planBox2 = document.getElementById("planBox2");
let planBox3 = document.getElementById("planBox3");
let planPrice1 = document.getElementById("digitalPrice");
let planPrice2 = document.getElementById("printedPrice");
let planPrice3 = document.getElementById("themedPrice");

function clearPlans() {
  plan1.checked = false;
  plan2.checked = false;
  plan3.checked = false;
  planBox1.style.color = "rgba(62, 42, 10, 1.00)";
  planBox1.style.background = "transparent";
  planPrice1.style.color = "rgba(62, 42, 10, 1.00)";
  planBox2.style.color = "rgba(62, 42, 10, 1.00)";
  planBox2.style.background = "transparent";
  planPrice2.style.color = "rgba(62, 42, 10, 1.00)";
  planBox3.style.color = "rgba(62, 42, 10, 1.00)";
  planBox3.style.background = "transparent";
  planPrice3.style.color = "rgba(62, 42, 10, 1.00)";


}
planBox1.addEventListener("click", () => {
  clearPlans();
  plan1.checked = true;
  planBox1.style.color = "white";
  planBox1.style.background = "rgba(62, 42, 10, 1.00)";
  planPrice1.style.color = "white";
});

planBox2.addEventListener("click", () => {
  clearPlans();
  plan2.checked = true;
  planBox2.style.color = "white";
  planBox2.style.background = "rgba(62, 42, 10, 1.00)";
  planPrice2.style.color = "white";
});

planBox3.addEventListener("click", () => {
  clearPlans();
  plan3.checked = true;
  planBox3.style.color = "white";
  planBox3.style.background = "rgba(62, 42, 10, 1.00)";
  planPrice3.style.color = "white";
});
