import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')

const canvas = document.getElementById("gridCanvas");
        const ctx = canvas.getContext("2d");
        let scale = 1;
        let image = null;
        let offsetX = 0, offsetY = 0;
        let isDragging = false;
        let lastX = 0, lastY = 0;
        let gridSize = 20;
        let bounds = { left: -400, right: 400, top: -300, bottom: 300 };
        
        function drawGrid() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.save();
            ctx.translate(canvas.width / 2 + offsetX, canvas.height / 2 + offsetY);
            
            if (image) {
                ctx.drawImage(image, -canvas.width / 2, -canvas.height / 2, canvas.width, canvas.height);
            }
            
            ctx.beginPath();
            for (let x = bounds.left; x <= bounds.right; x += gridSize) {
                ctx.moveTo(x, bounds.top);
                ctx.lineTo(x, bounds.bottom);
            }
            for (let y = bounds.top; y <= bounds.bottom; y += gridSize) {
                ctx.moveTo(bounds.left, y);
                ctx.lineTo(bounds.right, y);
            }
            ctx.strokeStyle = "rgba(200, 200, 200, 0.5)";
            ctx.stroke();
            ctx.restore();
        }
        
        drawGrid();
        
        canvas.addEventListener("wheel", (event) => {
            event.preventDefault();
            const zoomIntensity = 0.1;
            const scaleFactor = event.deltaY > 0 ? (1 - zoomIntensity) : (1 + zoomIntensity);
            scale = Math.max(0.5, Math.min(2, scale * scaleFactor));
            gridSize = 20 / scale;
            drawGrid();
        });
        
        canvas.addEventListener("mousedown", (event) => {
            isDragging = true;
            lastX = event.clientX;
            lastY = event.clientY;
            canvas.style.cursor = "grabbing";
        });
        
        canvas.addEventListener("mousemove", (event) => {
            if (isDragging) {
                const dx = event.clientX - lastX;
                const dy = event.clientY - lastY;
                offsetX = Math.max(bounds.left, Math.min(bounds.right, offsetX + dx));
                offsetY = Math.max(bounds.top, Math.min(bounds.bottom, offsetY + dy));
                lastX = event.clientX;
                lastY = event.clientY;
                drawGrid();
            }
        });
        
        canvas.addEventListener("mouseup", () => {
            isDragging = false;
            canvas.style.cursor = "grab";
        });
        
        canvas.addEventListener("mouseleave", () => {
            isDragging = false;
            canvas.style.cursor = "grab";
        });
        
        document.getElementById("imageUpload").addEventListener("change", function(event) {
            const file = event.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = function(e) {
                    image = new Image();
                    image.onload = drawGrid;
                    image.src = e.target.result;
                };
                reader.readAsDataURL(file);
            }
        });
        
        document.getElementById("resetButton").addEventListener("click", function() {
            offsetX = 0;
            offsetY = 0;
            scale = 1;
            gridSize = 20;
            bounds = { left: -400, right: 400, top: -300, bottom: 300 };
            drawGrid();
        });