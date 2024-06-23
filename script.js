window.addEventListener('load', function() {
    const prizes = [
        'images/500.jpg',
        'images/1000.jpg',
        'images/segui_participando.jpg'
    ];

    const canvas = document.getElementById('scratchCanvas');
    const ctx = canvas.getContext('2d');
    
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    ctx.fillStyle = 'silver';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    ctx.globalCompositeOperation = 'destination-out';

    let isDrawing = false;
    let hasScratched = false; // Flag para controlar si ya se ha raspad

    function getMousePos(canvas, evt) {
        const rect = canvas.getBoundingClientRect();
        return {
            x: evt.clientX - rect.left,
            y: evt.clientY - rect.top
        };
    }

    canvas.addEventListener('mousedown', function(evt) {
        if (!hasScratched) {
            isDrawing = true;
            const mousePos = getMousePos(canvas, evt);
            ctx.moveTo(mousePos.x, mousePos.y);

            // Seleccionar aleatoriamente una imagen del array prizes
            const randomIndex = Math.floor(Math.random() * prizes.length);
            const selectedPrize = prizes[randomIndex];
            
            // Aplicar la imagen seleccionada al canvas como fondo
            canvas.style.backgroundImage = `url(${selectedPrize})`;
        }
    });

    canvas.addEventListener('mousemove', function(evt) {
        if (isDrawing && !hasScratched) {
            const mousePos = getMousePos(canvas, evt);
            ctx.lineTo(mousePos.x, mousePos.y);
            ctx.lineWidth = 15;
            ctx.lineCap = 'round';
            ctx.stroke();
        }
    });

    canvas.addEventListener('mouseup', function() {
        if (isDrawing && !hasScratched) {
            isDrawing = false;
            hasScratched = true; // Marcar que se ha raspad
        }
    });

    canvas.addEventListener('mouseleave', function() {
        if (isDrawing && !hasScratched) {
            isDrawing = false;
            hasScratched = true; // Marcar que se ha raspad
        }
    });
});
