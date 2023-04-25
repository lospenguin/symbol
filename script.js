

  const canvas = document.getElementById("canvas1");
  const ctx = canvas.getContext("2d");
  ctx.lineWidth = 1.2;
  ctx.reset();
  ctx.beginPath();
  ctx.moveTo(25,25);
  ctx.lineTo(50,50);
  ctx.stroke();
