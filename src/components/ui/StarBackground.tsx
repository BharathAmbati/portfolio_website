"use client";

import { useEffect, useRef } from "react";

interface Star {
    x: number;
    y: number;
    radius: number;
    speed: number;
    opacity: number;
}

interface ShootingStar {
    x: number;
    y: number;
    length: number;
    speed: number;
    angle: number;
    opacity: number;
    lifetime: number;
    maxLifetime: number;
}

const StarBackground = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let animationFrameId: number;
        let stars: Star[] = [];
        let shootingStars: ShootingStar[] = [];
        let lastShootingStarTime = 0;

        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            initStars();
        };

        const initStars = () => {
            const starCount = Math.floor((canvas.width * canvas.height) / 6000);
            stars = [];
            for (let i = 0; i < starCount; i++) {
                stars.push({
                    x: Math.random() * canvas.width,
                    y: Math.random() * canvas.height,
                    radius: Math.random() * 1.2 + 0.3,
                    speed: Math.random() * 0.15 + 0.05,
                    opacity: Math.random() * 0.5 + 0.3,
                });
            }
        };

        const createShootingStar = () => {
            const side = Math.random() > 0.5 ? "top" : "left";
            let x, y;
            
            if (side === "top") {
                x = Math.random() * canvas.width;
                y = 0;
            } else {
                x = 0;
                y = Math.random() * canvas.height * 0.5;
            }

            shootingStars.push({
                x,
                y,
                length: Math.random() * 80 + 40,
                speed: Math.random() * 8 + 6,
                angle: Math.PI / 4 + (Math.random() - 0.5) * 0.3,
                opacity: 1,
                lifetime: 0,
                maxLifetime: Math.random() * 60 + 30,
            });
        };

        const drawStars = (time: number) => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Draw regular stars with twinkling
            stars.forEach((star) => {
                const twinkle = Math.sin(time * 0.002 + star.x) * 0.2 + 0.8;
                ctx.beginPath();
                ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity * twinkle})`;
                ctx.fill();

                // Slow drift
                star.y += star.speed;
                if (star.y > canvas.height) {
                    star.y = 0;
                    star.x = Math.random() * canvas.width;
                }
            });

            // Create shooting stars occasionally
            if (time - lastShootingStarTime > 3000 + Math.random() * 5000) {
                createShootingStar();
                lastShootingStarTime = time;
            }

            // Draw shooting stars
            shootingStars = shootingStars.filter((ss) => {
                ss.lifetime++;
                if (ss.lifetime > ss.maxLifetime) return false;
                if (ss.x > canvas.width || ss.y > canvas.height) return false;

                const progress = ss.lifetime / ss.maxLifetime;
                ss.opacity = 1 - progress;

                // Draw trail
                const gradient = ctx.createLinearGradient(
                    ss.x,
                    ss.y,
                    ss.x - Math.cos(ss.angle) * ss.length,
                    ss.y - Math.sin(ss.angle) * ss.length
                );
                gradient.addColorStop(0, `rgba(255, 255, 255, ${ss.opacity})`);
                gradient.addColorStop(0.3, `rgba(168, 85, 247, ${ss.opacity * 0.6})`);
                gradient.addColorStop(1, "rgba(255, 255, 255, 0)");

                ctx.beginPath();
                ctx.moveTo(ss.x, ss.y);
                ctx.lineTo(
                    ss.x - Math.cos(ss.angle) * ss.length,
                    ss.y - Math.sin(ss.angle) * ss.length
                );
                ctx.strokeStyle = gradient;
                ctx.lineWidth = 2;
                ctx.lineCap = "round";
                ctx.stroke();

                // Move shooting star
                ss.x += Math.cos(ss.angle) * ss.speed;
                ss.y += Math.sin(ss.angle) * ss.speed;

                return true;
            });

            animationFrameId = requestAnimationFrame(drawStars);
        };

        window.addEventListener("resize", resizeCanvas);
        resizeCanvas();
        drawStars(0);

        return () => {
            window.removeEventListener("resize", resizeCanvas);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="fixed top-0 left-0 w-full h-full pointer-events-none z-[-1]"
            style={{ backgroundColor: "hsl(0, 0%, 4%)" }}
        />
    );
};

export default StarBackground;
