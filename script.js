"use strict";
let imgInput;
let imgOutput;

/*listen for button click on Create Button to trigger function1*/
let btnClick = document.getElementById("button1");
btnClick.addEventListener("click", function1);

/*run through list of input selections in imgTileArea array to pull from selector and push to img output in html wrapper2*/
function function1() {
  for (let i = 0; i < imgTileArea.length; i++) {
    imgInput = document.getElementById(imgTileArea[i][0]).value;
    imgOutput = document.getElementById(imgTileArea[i][1]);
    imgOutput.src = imgArrayName[imgInput];
  }
}

/*array for storing all img file names*/
const imgArrayName = [
  "blank.svg",
  "symbFrameActvInstFdlyK.svg",
  "symbFrameActvInstEnyK.svg",
  "symbFrameActvInstNeutK.svg",
  "symbFrameActvInstUnkK.svg",
  "symbAmpBSqd.svg",
  "symbAmpBSect.svg",
  "symbAmpBPlt.svg",
  "symbAmpBCo.svg",
];

/*array for storing all html wrapper modifier and amplifier user inputs paired with their output areas in html wrapper2 */
const imgTileArea = [
  ["inputChpt2MainA", "outputChpt2MainA"],
  ["inputChpt2MainB", "outputChpt2MainB"],
];
