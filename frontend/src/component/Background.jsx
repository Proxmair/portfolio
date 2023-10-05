import React,{useRef,useEffect} from 'react'

const Background = () => {
    const canvasRef = useRef(null);
    const numverOfParticles = 50;
    let particlesArray = [];
    class Particles {
        constructor() {
            this.x = Math.random() * window.innerWidth / 25;
            this.y = Math.random() * window.innerHeight / 5;
            this.size = Math.random() * 0.3 + 0.2;
            this.speed = Math.random() * 0.5 + 0.5;
        }
        update(canvas) {
            this.x += this.speed;
            if (this.x >= canvas.width / 5 + this.size * 10) {
                this.x = 0;
                this.y = Math.random() * window.innerHeight / 5;
            }
        }
        draw = (context) => {
            context.beginPath();
            context.fillStyle = "white";
            context.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            context.fill();
            context.beginPath();
            context.arc(this.x - 0.5, this.y, this.size + 0.25, 0.5 * Math.PI, 1.5 * Math.PI);
            context.strokeStyle = "rgb(4, 21, 49)"
            context.lineWidth = 3;
            context.stroke();
        }
    }
    function init() {
        for (let i = 0; i < numverOfParticles; i++) {
            particlesArray.push(new Particles());
        }
    }
    init();
    const renderFrame = (context, canvas) => {
        for (let i = 0; i < particlesArray.length; i++) {
            particlesArray[i].update(canvas);
            particlesArray[i].draw(context);
        }
    };
    const tick = () => {
        if (!canvasRef.current) return;
        const context = canvasRef.current.getContext('2d');
        renderFrame(context, canvasRef.current);
        requestAnimationFrame(tick);
    };

    useEffect(() => {
        requestAnimationFrame(tick);
    });
    return (
        <canvas id="canvas-background" ref={canvasRef} />
    )
}

export default Background