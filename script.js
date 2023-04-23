/* window.onload = function () {
  let c = document.getElementById("canvas1");
  let ctx = c.getContext("2d");
  let img = document.getElementById("img0");
  ctx.drawImage(img, 10, 10, 45, 45);
};

*/

const btnElement = document.getElementById("button1");
btnElement.addEventListener("click",function1);

function function1() {
  img1 = new Image()
  img1.src = "symbFrameActvInstFdlyK.svg";
  let c = document.getElementById("canvas1");
  let ctx = c.getContext("2d");
  ctx.drawImage(img1, 10, 10, 45, 45);
}


