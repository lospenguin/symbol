
const btnElement = document.getElementById("button1");
btnElement.addEventListener("click", function1);

function function1() {
  img1 = new Image();
  img1.src = "./symbFrameActvInstFdlyK.svg";
  let c = document.getElementById("canvas1");
  let ctx = c.getContext("2d");
  ctx.drawImage(img1, 0, 0, 500, 500, 95, 45, 100, 100);
}

