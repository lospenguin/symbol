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

/*for return button, select values and the canvas are cleared*/
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
  let select = document.getElementById("inputChpt2MainA");
  select.selectedIndex = 0;
  let select2 = document.getElementById("inputChpt2ModB");
  select2.selectedIndex = 0;
}

/*unit org screen section to create unit org screen select items for main frame area A */
/*array for storing all Main A unit icon frames*/
const unitMainA = ["Select...", "Friendly", "Enemy", "Neutral", "Unknown"];
/*append all unitMainA list items to Main A HTML selector */
for (let i = 0; i < unitMainA.length; i++) {
  let option = document.createElement("option");
  option.text = unitMainA[i];
  option.value = i;
  let select = document.getElementById("inputChpt2MainA");
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
  let option = document.createElement("option");
  option.text = unitModB[i];
  option.value = i;
  let select = document.getElementById("inputChpt2ModB");
  select.appendChild(option);
}

/*unit org screen array for storing all img file names broken into two subsets for each of the two unit org selectors, note how a blank svg is added for the times when a user doesnt elect to use that selector*/
const imgArrayName = [
  [
    "./img/blank.svg",
    "./img/symbFrameActvInstFdlyK.svg",
    "./img/symbFrameActvInstEnyK.svg",
    "./img/symbFrameActvInstNeutK.svg",
    "./img/symbFrameActvInstUnkK.svg",
  ],
  [
    "./img/blank.svg",
    "./img/symbAmpBTm.svg",
    "./img/symbAmpBSqd.svg",
    "./img/symbAmpBSect.svg",
    "./img/symbAmpBPlt.svg",
    "./img/symbAmpBCo.svg",
    "./img/symbAmpBBn.svg",
    "./img/symbAmpBGrpRgt.svg",
    "./img/symbAmpBBde.svg",
    "./img/symbAmpBDiv.svg",
    "./img/symbAmpBCps.svg",
    "./img/symbAmpBTa.svg",
    "./img/symbAmpBAg.svg",
    "./img/symbAmpBT.svg",
    "./img/symbAmpBCmd.svg",
  ],
];

/*unit org screen array for storing all the img files paired to the file name array, could probably create a larger data set to store these all consolidated, anyways... this is to align each specific image against the canvas appropriately so they all match up nicely */
const imgArrayLocation = [
  [
    [0, 0, 0, 0, 0, 0, 0, 0], //proportionate placement complete ppc
    [0, 0, 1600, 800, 0, 0, 300, 150], //friendly, ppc
    [0, 0, 1600, 800, 0, 6, 300, 150], //enemy, ppc
    [0, 0, 1600, 800, 0, 0, 300, 150], //neutral, ppc
    [0, 0, 300, 300, 82.75, 11, 135, 135], //unknown, ppc
  ],
  [
    [0, 0, 0, 0, 0, 0, 0, 0], //ppc
    [0, 0, 50, 50, 129, 20, 32, 32], //team
    [0, 0, 112, 108, 140.5, 20, 20, 18], //squad
    [0, 0, 246, 108, 130, 20, 40, 18], //section
    [0, 0, 380, 108, 120, 20, 60, 18], //platoon
    [0, 0, 50, 50, 130.75, 15, 48, 48], //company
    [0, 0, 50, 50, 126.5, 15, 48, 48], //battalion
    [0, 0, 50, 50, 122.75, 15, 48, 48], //group or regiment
    [0, 0, 50, 50, 126.75, 16, 48, 48], //brigade
    [0, 0, 50, 50, 118, 16, 48, 48], //division
    [0, 0, 85, 50, 104.5, 16, 92, 48], //corps
    [0, 0, 100, 50, 100, 16, 98, 48], //theater army
    [0, 0, 112, 50, 92.75, 16, 108, 48], //army group
    [0, 0, 128, 50, 87.25, 16, 118, 48], //theater
    [0, 0, 50, 50, 115, 16, 52, 52], //command
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
    let source = imgArrayName[i][imgInput];
    console.log(source);
    imgVar.src = source;
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
