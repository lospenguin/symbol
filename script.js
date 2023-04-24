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

function function1() {
  let inputChpt2MainA = document.getElementById("inputChpt2MainA").value;
  let outputChpt2MainA = document.getElementById("outputChpt2MainA");
  outputChpt2MainA.src = imgArrayName[inputChpt2MainA];
  let inputChpt2MainB = document.getElementById("inputChpt2MainB").value;
  let outputChpt2MainB = document.getElementById("outputChpt2MainB");
  outputChpt2MainB.src = imgArrayName[inputChpt2MainB];
  console.log(inputChpt2MainA);
  console.log(inputChpt2MainB);
}
