(function (root) {

    const size = 16;
    const gravity = .1;
    const radius = 15;
    const limit = .05;

    /**
     * Creates and animates ball
     * @param {number} x 
     * @param {number} y 
     */
    function drawBall(x, y, topHeight) {

        const span = document.createElement('span');
        const speed = 1 + (Math.random() * 4);
        const angle = 180 + (Math.random() * 180);

        span.style.position = 'fixed';
        span.style.width = size + 'px';
        span.style.height = size + 'px';
        span.style.borderRadius = size + '16px';
        span.style.display = 'block';
        span.style.backgroundColor = 'red';

        animateBall(span, x - (size / 2), y - (size / 2), speed, angle, topHeight);
        return span;
    }

    function animateBall(span, x, y, speed, angle, topHeight) {

        const radians = angle * Math.PI / 180;
        const vx = Math.cos(radians) * speed;
        const vy = Math.sin(radians) * speed;
        const ball = { x: x, y: y, velocityx: vx, velocityy: vy, radius: radius };

        function drawScreen() {

            const screenHeight = topHeight;

            if (ball.y + ball.radius <= screenHeight) {
                ball.velocityy += gravity;
            } else {
                ball.velocityx = 0;
                ball.velocityy = 0;
                ball.y = screenHeight - ball.radius;

                speed *= 0.9;
                if (speed > limit) {
                    animateBall(span, ball.x, ball.y, speed, angle, topHeight);
                }
                return;
            }

            ball.y += ball.velocityy;
            ball.x += ball.velocityx;

            span.style.top = ball.y + 'px';
            span.style.left = ball.x + 'px';

            requestAnimationFrame(() => {
                drawScreen();
            });

        }
        drawScreen();
    }

    root.drawBall = drawBall;
    root.animateBall = animateBall;

})(window);