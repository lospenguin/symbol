"use strict";

let screenSel;
let screenSelVal;
let btnSelOpt1;
let btnSelOpt2 = "empty";
let btnSelOpt3; //not used
let btnSelOpt4; //not used
/*


BREAK


*/
/*arrays for all main and mod icon selectors*/
let arraySelectors = [
  [
    //unit,installation main frame A type
    ["Frame Type...", "img/blank.svg"],
    ["Friendly", "img/mainAFrameFdly.svg"],
    ["Enemy", "img/mainAFrameEny.svg"],
    ["Neutral", "img/mainAFrameNeu.svg"],
    ["Unknown", "img/mainAFrameUnk.svg"],
  ],
  [
    //unit modifier B echelon
    ["Echelon...", "img/blank.svg"],
    ["Team", "img/ampBTm.svg"],
    ["Squad", "img/ampBSqd.svg"],
    ["Section", "img/ampBSect.svg"],
    ["Platoon", "img/ampBPlt.svg"],
    ["Company", "img/ampBCo.svg"],
    ["Battalion", "img/ampBBn.svg"],
    ["Group/Rgmt", "img/ampBReg.svg"],
    ["Brigade", "img/ampBBde.svg"],
    ["Division", "img/ampBDiv.svg"],
    ["Corps", "img/ampBCorps.svg"],
    ["Theater Army", "img/ampBArmy.svg"],
    ["Army Group", "img/ampBAGrp.svg"],
    ["Theater", "img/ampBThtr.svg"],
    ["Command", "img/ampBCmd.svg"],
  ],
  [
    //equipment frame A type
    ["Frame Type...", "img/blank.svg"],
    ["Friendly", "img/mainAFrameFdlyEquip.svg"],
    ["Enemy", "img/mainAFrameEny.svg"],
    ["Neutral", "img/mainAFrameNeu.svg"],
    ["Unknown", "img/mainAFrameUnk.svg"],
  ],
  [
    //equipment modifier B equipment type
    ["Equipment...", "img/blank.svg"],
    ["Rifle", "img/mainAEquipRfl.svg"],
    ["Rifle . Single Shot", "img/mainAEquipRflSngl.svg"],
    ["Rifle . Semi Auto", "img/mainAEquipRflSemi.svg"],
    ["Rifle . Automatic", "img/mainAEquipRflAuto.svg"],
    ["Machine Gun", "img/mainAEquipMg.svg"],
    ["Machine Gun . Light", "img/mainAEquipMgLt.svg"],
    ["Machine Gun . Medium", "img/mainAEquipMgMed.svg"],
    ["Machine Gun . Heavy", "img/mainAEquipMgHvy.svg"],
  ],
  [
    //equipment modifier R mobility
    ["Mobility...", "img/blank.svg"],
    ["Wheeled . Road", "img/ampRWhlR.svg"],
    ["Wheeled . X-Ctry", "img/ampRWhlX.svg"],
    ["Tracked", "img/ampRTrk.svg"],
    ["Wheeled + Tracked", "img/ampRTrkW.svg"],
  ],
  [
    //graphic control measure
    ["Control Measure...", "img/blank.svg"],
    ["Battle Position", "img/gcmbp1.svg"],
  ],
];
/*array for screenDisplay - primary array*/
let arrayCategory = [
  ["Select Category"],
  ["Unit & Organizations", arraySelectors[0], arraySelectors[1]],
  ["Equipment", arraySelectors[2], arraySelectors[3], arraySelectors[4]],
  ["Installation & Activities", arraySelectors[0]],
  ["Control Measures & Tasks", arraySelectors[5]],
];
/*


BREAK


*/
/* LISTENER BUTTONS . button click to go from main screen to symbol subsection */
let touchEvent1 = "ontouchstart" in window ? "touchstart" : "click";
document.getElementById("btnMain").addEventListener(touchEvent1, funcMain);

/*button click to return from symbol subsection to main screen*/
let touchEvent2 = "ontouchstart" in window ? "touchstart" : "click";
document.getElementById("btnReturn").addEventListener(touchEvent2, funcReturn);

/*button click to generate symbol from symbol subsection*/
let touchEvent3 = "ontouchstart" in window ? "touchstart" : "click";
document.getElementById("btnCreate").addEventListener(touchEvent3, funcCreate);
/*


BREAK


*/
/*for return button, select values and the canvas are cleared*/
function funcMain() {
  screenSel = document.getElementById("selMainCategory");
  screenSelVal = screenSel.value;
  if (screenSelVal !== "0") {
    document.getElementById("screenMain").style.display = "none";
    document.getElementById("screenDisplay").style.display = "block";
    document.getElementById("selMainCategory").selectedIndex = 0;
    document.getElementById("screenInfo").innerHTML =
      arrayCategory[
        screenSelVal
      ][0]; /* get the first item, screenInfo element, from the list for the selected category */
    for (let i = 0; i < arrayCategory[screenSelVal].length - 1; i++) {
      /*create selector elements equal to the number of selectors for each category in arrayCategory */
      let divSel = document.getElementById("divSel");
      let sel = document.createElement("select");
      sel.className = "selector";
      sel.id = `selector${i}`;
      btnSelOpt1 = i + 1;
      divSel.appendChild(sel);
      for (let i = 0; i < arrayCategory[screenSelVal][btnSelOpt1].length; i++) {
        let opt = document.createElement("option");
        opt.text = arrayCategory[screenSelVal][btnSelOpt1][i][0];
        opt.value = i;
        sel.appendChild(opt);
      }
    }
  }
}

function funcReturn() {
  document.getElementById("screenMain").style.display = "block";
  document.getElementById("screenDisplay").style.display = "none";
  let canvas = document.getElementById("canvas");
  let ctx = canvas.getContext("2d");
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  btnSelOpt1 = "0";
  btnSelOpt2 = "0";
  let removeSel = document.getElementById("divSel");
  while (removeSel.firstChild) {
    removeSel.removeChild(removeSel.firstChild);
  }
}

/*unit org screen image build function to run through list of input selections in imgTileArea array to pull from selector and push to img output in html wrapper2*/
function funcCreate() {
  /*Instantiate Canvas & Clear Former Rect*/
  const canvas = document.getElementById("canvas");
  const ctx = canvas.getContext("2d");
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  /*
  BREAK
  */
  for (let i = 0; i < arrayCategory[screenSelVal].length - 1; i++) {
    let selVal = document.getElementById(`selector${i}`).value;
    let catVal = arrayCategory[screenSelVal][i + 1];
    let imgInput = catVal[selVal][1];
    let imgVar = new Image();
    imgVar.src = imgInput;
    imgVar.onload = function () {
      ctx.drawImage(imgVar, 0, 0, 3400, 1700, 0, 0, 300, 150);
    };
  }
}
