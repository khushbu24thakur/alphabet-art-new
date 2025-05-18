const canvas = document.getElementById('drawCanvas');
const ctx = canvas.getContext('2d');
let drawing = false;
let erasing = false;

canvas.addEventListener('mousedown', () => drawing = true);
canvas.addEventListener('mouseup', () => {
  drawing = false;
  ctx.beginPath();
});
canvas.addEventListener('mousemove', draw);

function draw(e) {
  if (!drawing) return;

  ctx.lineWidth = 4;
  ctx.lineCap = 'round';
  ctx.strokeStyle = erasing ? '#ffffff' : '#ff6347'; 

  const rect = canvas.getBoundingClientRect();
  ctx.lineTo(e.clientX - rect.left, e.clientY - rect.top);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(e.clientX - rect.left, e.clientY - rect.top);
}

const clearBtn = document.getElementById('clearCanvas');
clearBtn.addEventListener('click', () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
});

const eraserBtn = document.getElementById('eraserToggle');
eraserBtn.addEventListener('click', () => {
  erasing = !erasing;
  eraserBtn.textContent = erasing ? '🖌️ Draw Mode' : '✏️ Eraser';
});
