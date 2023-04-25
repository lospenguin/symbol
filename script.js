"use strict";

/*listen for button click on Create Button to trigger function1*/
let touchEvent = "ontouchstart" in window ? "touchstart" : "click";
document.getElementById("button1").addEventListener(touchEvent, function1);

/*let btnClick = document.getElementById("button1");
btnClick.addEventListener("click", function1);*/

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

/*array for storing all img file names*/
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

/*array for storing all html wrapper modifier and amplifier user inputs paired with their output areas in html wrapper2 */
const imgSelectors = ["inputChpt2MainA", "inputChpt2ModB"];

/*run through list of input selections in imgTileArea array to pull from selector and push to img output in html wrapper2*/
function function1() {
  const canvas = document.getElementById("canvas1");
  const ctx = canvas.getContext("2d");
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
