"use strict";

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

/*listen for button click on Create Button to trigger function1*/
let btnClick = document.getElementById("button1");
btnClick.addEventListener("click", function1);

/*reconfigure the source image locations on the screen to display the correct icon*/
function function1() {
  let inputChpt2MainA = document.getElementById("inputChpt2MainA").value;
  let outputChpt2MainA = document.getElementById("outputChpt2MainA");
  outputChpt2MainA.src = imgArrayName[inputChpt2MainA];
}
