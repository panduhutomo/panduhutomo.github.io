document.addEventListener("DOMContentLoaded", function() {
    const canvas = document.getElementById("canvas");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    const ctx = canvas.getContext("2d");

    const colors = ["#D6E2E6", "#C2D9DF", "#9BC3D3", "#7EAFBF", "#6598AC", "#4E8397"];
    const numStars = 500;
    const maxRadius = Math.min(canvas.width, canvas.height) / 2;
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const speed = 0.0005;

    const stars = Array.from({ length: numStars }, () => ({
        radius: Math.random() * maxRadius,
        angle: Math.random() * 2 * Math.PI,
        color: colors[Math.floor(Math.random() * colors.length)],
    }));

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        stars.forEach(star => {
            const x = centerX + star.radius * Math.cos(star.angle);
            const y = centerY + star.radius * Math.sin(star.angle);
            ctx.fillStyle = star.color;
            ctx.beginPath();
            ctx.arc(x, y, 1, 0, 2 * Math.PI);
            ctx.closePath();
            ctx.fill();
            star.angle += speed;
        });
        requestAnimationFrame(animate);
    }

    document.getElementById("startAnimation").addEventListener("click", function() {
        animate();
    });
});
