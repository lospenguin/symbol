/*
window.addEventListener('load',function(){
  let callFunction2 = document.getElementById("button1")
  callFunction2.addEventListener('touchstart',function(e){
    e.preventDefault();
    function2();
  }, false)
  callFunction2.addEventListener('click',function(e){
    e.preventDefault();
    function2();
  }, false)
});
*/

img1 = new Image();
img2 = new Image();
img3 = new Image();
img4 = new Image();
img5 = new Image();
img6 = new Image();
img7 = new Image();
img8 = new Image();

img1.src = "symbFrameActvInstFdlyK.svg";
img2.src = "symbFrameActvInstEnyK.svg";
img3.src = "symbFrameActvInstNeutK.svg";
img4.src = "symbFrameActvInstUnkK.svg";
img5.src = "symbAmpBSqd.svg";
img6.src = "symbAmpBSect.svg";
img7.src = "symbAmpBPlt.svg";
img8.src = "symbAmpBCo.svg";

/*declare and assign software variables to element input IDs*/
let [a, b, c] = ["canvas1", "type1", "type2"];

function function2() {

  let canvas = document.getElementById(a);
  let type1 = document.getElementById(b).value;
  let type2 = document.getElementById(c).value;
  let ctx = canvas.getContext("2d");
  ctx.reset();
  ctx.lineWidth = 1.2;
  console.log(type1);


/* IF statement for drawing types of frames for units and organizations, FM 1-02.2 Chpt 2*/
  if (type1 === "1") {
    ctx.drawImage(img1,0,0,500,500,95,45,100,100);
  } else if (type1 === "2") {
    ctx.drawImage(img2,0,0,500,500,101,40,100,100);
  } else if (type1 === "3") {
    ctx.drawImage(img3,0,0,500,500,112,45,100,100);
  } else if (type1 === "4") {
    ctx.drawImage(img4,0,0,500,500,105,40,100,100);
  }

/* IF statement for drawing Amplifier B for units and organizations, FM 1-02.2 Chpt 2*/
  if (type2 === "1") {
    ctx.drawImage(img5,0,0,500,500,132,20,91,91);
  } else if (type2 === "2") {
    ctx.drawImage(img6,0,0,500,500,119,22,90,90);
  } else if (type2 === "3") {
    ctx.drawImage(img7,0,0,500,500,109,20,86,86);
  } else if (type2 === "4") {
    ctx.drawImage(img8,0,0,500,500,139.75,16,102,102);
  }


  return false;
}



