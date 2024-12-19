// Set up canvas for drawing
const canvas = document.getElementById("drawingCanvas");
const ctx = canvas.getContext("2d");

// Match canvas dimensions to profile picture
canvas.width = canvas.offsetWidth;
canvas.height = canvas.offsetHeight;

// Drawing state
let isDrawing = false;

// Pencil properties
ctx.strokeStyle = "black";
ctx.lineWidth = 2;
ctx.lineCap = "round";

// Start drawing
canvas.addEventListener("mousedown", (e) => {
    isDrawing = true;
    ctx.beginPath();
    ctx.moveTo(e.offsetX, e.offsetY);
    canvas.style.pointerEvents = "auto"; // Allow interaction
});

// Draw
canvas.addEventListener("mousemove", (e) => {
    if (isDrawing) {
        ctx.lineTo(e.offsetX, e.offsetY);
        ctx.stroke();
    }
});

// Stop drawing
canvas.addEventListener("mouseup", () => {
    isDrawing = false;
    ctx.closePath();
});

// Clear the drawing
document.getElementById("clearCanvas").addEventListener("click", () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
});