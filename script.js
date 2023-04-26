"use strict";

/*listen for button click on Main Button to trigger function1*/
let touchEvent1 = "ontouchstart" in window ? "touchstart" : "click";
document
  .getElementById("btnMain")
  .addEventListener(touchEvent1, funcMainScreen);

/*listen for button click on Unit-Org Button to trigger function2*/
let touchEvent2 = "ontouchstart" in window ? "touchstart" : "click";
document
  .getElementById("btnReturn")
  .addEventListener(touchEvent2, funcReturnMain);

/*listen for button click on Unit-Org Button to trigger function2*/
let touchEvent3 = "ontouchstart" in window ? "touchstart" : "click";
document.getElementById("button1").addEventListener(touchEvent3, funcUnitOrg);

function funcMainScreen() {
  let screenSel = document.getElementById("typeMain");
  let screenSelVal = screenSel.value;
  if (screenSelVal === "1") {
    document.getElementById("screenMain").style.display = "none";
    document.getElementById("screenUnit").style.display = "block";
    screenSelVal = undefined;
  }
}

function funcReturnMain() {
  document.getElementById("screenMain").style.display = "block";
  document.getElementById("screenUnit").style.display = "none";
  let canvas = document.getElementById("canvas1");
  let ctx = canvas.getContext("2d");
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

/*unit org screen section to create unit org screen select items for main frame area A */
/*array for storing all Main A unit icon frames*/
const unitMainA = ["Select...", "Friendly", "Enemy", "Neutral", "Unknown"];
/*append all unitMainA list items to Main A HTML selector */
for (let i = 0; i < unitMainA.length; i++) {
  var option = document.createElement("option");
  option.text = unitMainA[i];
  option.value = i;
  var select = document.getElementById("inputChpt2MainA");
  select.appendChild(option);
}

/*unit org screen section to create unit org echelon select items for mod B*/
/*array for storing all Mod B unit echelon modifiers*/
const unitModB = [
  "Select...",
  "Team",
  "Squad",
  "Section",
  "Platoon",
  "Company",
  "Battalion",
  "Group/Rgmt",
  "Brigade",
  "Division",
  "Corps",
  "Theater Army",
  "Army Group",
  "Theater",
  "Command",
];
/*append all unitModB list items to Mod B HTML selector */
for (let i = 0; i < unitModB.length; i++) {
  var option = document.createElement("option");
  option.text = unitModB[i];
  option.value = i;
  var select = document.getElementById("inputChpt2ModB");
  select.appendChild(option);
}

/*unit org screen array for storing all img file names broken into two subsets for each of the two unit org selectors, note how a blank svg is added for the times when a user doesnt elect to use that selector*/
const imgArrayName = [
  [
    "blank.svg",
    "symbFrameActvInstFdlyK.svg",
    "symbFrameActvInstEnyK.svg",
    "symbFrameActvInstNeutK.svg",
    "symbFrameActvInstUnkK.svg",
  ],
  [
    "blank.svg",
    "symbAmpBTm.svg",
    "symbAmpBSqd.svg",
    "symbAmpBSect.svg",
    "symbAmpBPlt.svg",
    "symbAmpBCo.svg",
    "symbAmpBBn.svg",
    "symbAmpBGrpRgt.svg",
    "symbAmpBBde.svg",
    "symbAmpBDiv.svg",
    "symbAmpBCps.svg",
    "symbAmpBTa.svg",
    "symbAmpBAg.svg",
    "symbAmpBT.svg",
    "symbAmpBCmd.svg",
  ],
];

/*unit org screen array for storing all the img files paired to the file name array, could probably create a larger data set to store these all consolidated, anyways... this is to align each specific image against the canvas appropriately so they all match up nicely */
const imgArrayLocation = [
  [
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 500, 500, 95, 45, 100, 100],
    [0, 0, 500, 500, 101, 40, 100, 100],
    [0, 0, 500, 500, 112, 45, 100, 100],
    [0, 0, 500, 500, 105, 40, 100, 100],
  ],
  [
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 150, 150, 118, 6, 91, 91],
    [0, 0, 600, 600, 133.5, 22, 91, 91],
    [0, 0, 600, 600, 123, 22, 90, 90],
    [0, 0, 600, 600, 114, 20, 86, 86],
    [0, 0, 175, 175, 139.5, 18, 102, 102],
    [0, 0, 175, 175, 134.25, 18, 102, 102],
    [0, 0, 175, 175, 129.25, 18, 102, 102],
    [0, 0, 150, 150, 121.0, 8, 102, 102],
    [0, 0, 150, 150, 113.0, 8, 102, 102],
    [0, 0, 150, 150, 106.0, 8, 102, 102],
    [0, 0, 150, 150, 100.0, 8, 102, 102],
    [0, 0, 150, 150, 92.0, 8, 102, 102],
    [0, 0, 150, 150, 84.0, 8, 102, 102],
    [0, 0, 150, 150, 109.0, 6, 102, 102],
  ],
];

/*unit org screen array for storing selector user inputs*/
const imgSelectors = ["inputChpt2MainA", "inputChpt2ModB"];

/*unit org screen image build function to run through list of input selections in imgTileArea array to pull from selector and push to img output in html wrapper2*/
function funcUnitOrg() {
  const canvas = document.getElementById("canvas1");
  const ctx = canvas.getContext("2d");
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.lineWidth = 1.2;
  for (let i = 0; i < imgSelectors.length; i++) {
    let imgInput = document.getElementById(imgSelectors[i]).value;
    let imgVar = document.createElement("img");
    imgVar.src = imgArrayName[i][imgInput];
    imgVar.onload = function () {
      ctx.drawImage(
        imgVar,
        imgArrayLocation[i][imgInput][0],
        imgArrayLocation[i][imgInput][1],
        imgArrayLocation[i][imgInput][2],
        imgArrayLocation[i][imgInput][3],
        imgArrayLocation[i][imgInput][4],
        imgArrayLocation[i][imgInput][5],
        imgArrayLocation[i][imgInput][6],
        imgArrayLocation[i][imgInput][7]
      );
    };
  }
}
