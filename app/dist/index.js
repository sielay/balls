(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

(function (root) {

    var size = 16;
    var gravity = .1;
    var radius = 15;
    var limit = .05;

    /**
     * Creates and animates ball
     * @param {number} x 
     * @param {number} y 
     */
    function drawBall(x, y, topHeight) {

        var span = document.createElement('span');
        var speed = 1 + Math.random() * 4;
        var angle = 180 + Math.random() * 180;

        span.style.position = 'fixed';
        span.style.width = size + 'px';
        span.style.height = size + 'px';
        span.style.borderRadius = size + '16px';
        span.style.display = 'block';
        span.style.backgroundColor = 'red';

        animateBall(span, x - size / 2, y - size / 2, speed, angle, topHeight);
        return span;
    }

    function animateBall(span, x, y, speed, angle, topHeight) {

        var radians = angle * Math.PI / 180;
        var vx = Math.cos(radians) * speed;
        var vy = Math.sin(radians) * speed;
        var ball = { x: x, y: y, velocityx: vx, velocityy: vy, radius: radius };

        function drawScreen() {

            var screenHeight = topHeight;

            if (ball.y + ball.radius <= screenHeight) {
                ball.velocityy += gravity;
            } else {
                ball.velocityx = 0;
                ball.velocityy = 0;
                ball.y = screenHeight - ball.radius;

                speed *= 0.9;
                if (speed > limit) {
                    animateBall(span, ball.x, ball.y, speed, angle);
                }
                return;
            }

            ball.y += ball.velocityy;
            ball.x += ball.velocityx;

            span.style.top = ball.y + 'px';
            span.style.left = ball.x + 'px';

            requestAnimationFrame(function () {
                drawScreen();
            });
        }
        drawScreen();
    }

    root.drawBall = drawBall;
    root.animateBall = animateBall;
})(window);

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQ0FBLENBQUMsVUFBVSxJQUFWLEVBQWdCOztBQUViLFFBQU0sT0FBTyxFQUFiO0FBQ0EsUUFBTSxVQUFVLEVBQWhCO0FBQ0EsUUFBTSxTQUFTLEVBQWY7QUFDQSxRQUFNLFFBQVEsR0FBZDs7QUFFQTs7Ozs7QUFLQSxhQUFTLFFBQVQsQ0FBa0IsQ0FBbEIsRUFBcUIsQ0FBckIsRUFBd0IsU0FBeEIsRUFBbUM7O0FBRS9CLFlBQU0sT0FBTyxTQUFTLGFBQVQsQ0FBdUIsTUFBdkIsQ0FBYjtBQUNBLFlBQU0sUUFBUSxJQUFLLEtBQUssTUFBTCxLQUFnQixDQUFuQztBQUNBLFlBQU0sUUFBUSxNQUFPLEtBQUssTUFBTCxLQUFnQixHQUFyQzs7QUFFQSxhQUFLLEtBQUwsQ0FBVyxRQUFYLEdBQXNCLE9BQXRCO0FBQ0EsYUFBSyxLQUFMLENBQVcsS0FBWCxHQUFtQixPQUFPLElBQTFCO0FBQ0EsYUFBSyxLQUFMLENBQVcsTUFBWCxHQUFvQixPQUFPLElBQTNCO0FBQ0EsYUFBSyxLQUFMLENBQVcsWUFBWCxHQUEwQixPQUFPLE1BQWpDO0FBQ0EsYUFBSyxLQUFMLENBQVcsT0FBWCxHQUFxQixPQUFyQjtBQUNBLGFBQUssS0FBTCxDQUFXLGVBQVgsR0FBNkIsS0FBN0I7O0FBRUEsb0JBQVksSUFBWixFQUFrQixJQUFLLE9BQU8sQ0FBOUIsRUFBa0MsSUFBSyxPQUFPLENBQTlDLEVBQWtELEtBQWxELEVBQXlELEtBQXpELEVBQWdFLFNBQWhFO0FBQ0EsZUFBTyxJQUFQO0FBQ0g7O0FBRUQsYUFBUyxXQUFULENBQXFCLElBQXJCLEVBQTJCLENBQTNCLEVBQThCLENBQTlCLEVBQWlDLEtBQWpDLEVBQXdDLEtBQXhDLEVBQStDLFNBQS9DLEVBQTBEOztBQUV0RCxZQUFNLFVBQVUsUUFBUSxLQUFLLEVBQWIsR0FBa0IsR0FBbEM7QUFDQSxZQUFNLEtBQUssS0FBSyxHQUFMLENBQVMsT0FBVCxJQUFvQixLQUEvQjtBQUNBLFlBQU0sS0FBSyxLQUFLLEdBQUwsQ0FBUyxPQUFULElBQW9CLEtBQS9CO0FBQ0EsWUFBTSxPQUFPLEVBQUUsR0FBRyxDQUFMLEVBQVEsR0FBRyxDQUFYLEVBQWMsV0FBVyxFQUF6QixFQUE2QixXQUFXLEVBQXhDLEVBQTRDLFFBQVEsTUFBcEQsRUFBYjs7QUFFQSxpQkFBUyxVQUFULEdBQXNCOztBQUVsQixnQkFBTSxlQUFlLFNBQXJCOztBQUVBLGdCQUFJLEtBQUssQ0FBTCxHQUFTLEtBQUssTUFBZCxJQUF3QixZQUE1QixFQUEwQztBQUN0QyxxQkFBSyxTQUFMLElBQWtCLE9BQWxCO0FBQ0gsYUFGRCxNQUVPO0FBQ0gscUJBQUssU0FBTCxHQUFpQixDQUFqQjtBQUNBLHFCQUFLLFNBQUwsR0FBaUIsQ0FBakI7QUFDQSxxQkFBSyxDQUFMLEdBQVMsZUFBZSxLQUFLLE1BQTdCOztBQUVBLHlCQUFTLEdBQVQ7QUFDQSxvQkFBSSxRQUFRLEtBQVosRUFBbUI7QUFDZixnQ0FBWSxJQUFaLEVBQWtCLEtBQUssQ0FBdkIsRUFBMEIsS0FBSyxDQUEvQixFQUFrQyxLQUFsQyxFQUF5QyxLQUF6QztBQUNIO0FBQ0Q7QUFDSDs7QUFFRCxpQkFBSyxDQUFMLElBQVUsS0FBSyxTQUFmO0FBQ0EsaUJBQUssQ0FBTCxJQUFVLEtBQUssU0FBZjs7QUFFQSxpQkFBSyxLQUFMLENBQVcsR0FBWCxHQUFpQixLQUFLLENBQUwsR0FBUyxJQUExQjtBQUNBLGlCQUFLLEtBQUwsQ0FBVyxJQUFYLEdBQWtCLEtBQUssQ0FBTCxHQUFTLElBQTNCOztBQUVBLGtDQUFzQixZQUFNO0FBQ3hCO0FBQ0gsYUFGRDtBQUlIO0FBQ0Q7QUFDSDs7QUFFRCxTQUFLLFFBQUwsR0FBZ0IsUUFBaEI7QUFDQSxTQUFLLFdBQUwsR0FBbUIsV0FBbkI7QUFFSCxDQXZFRCxFQXVFRyxNQXZFSCIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCIoZnVuY3Rpb24gKHJvb3QpIHtcblxuICAgIGNvbnN0IHNpemUgPSAxNjtcbiAgICBjb25zdCBncmF2aXR5ID0gLjE7XG4gICAgY29uc3QgcmFkaXVzID0gMTU7XG4gICAgY29uc3QgbGltaXQgPSAuMDU7XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGFuZCBhbmltYXRlcyBiYWxsXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHggXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHkgXG4gICAgICovXG4gICAgZnVuY3Rpb24gZHJhd0JhbGwoeCwgeSwgdG9wSGVpZ2h0KSB7XG5cbiAgICAgICAgY29uc3Qgc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgICAgY29uc3Qgc3BlZWQgPSAxICsgKE1hdGgucmFuZG9tKCkgKiA0KTtcbiAgICAgICAgY29uc3QgYW5nbGUgPSAxODAgKyAoTWF0aC5yYW5kb20oKSAqIDE4MCk7XG5cbiAgICAgICAgc3Bhbi5zdHlsZS5wb3NpdGlvbiA9ICdmaXhlZCc7XG4gICAgICAgIHNwYW4uc3R5bGUud2lkdGggPSBzaXplICsgJ3B4JztcbiAgICAgICAgc3Bhbi5zdHlsZS5oZWlnaHQgPSBzaXplICsgJ3B4JztcbiAgICAgICAgc3Bhbi5zdHlsZS5ib3JkZXJSYWRpdXMgPSBzaXplICsgJzE2cHgnO1xuICAgICAgICBzcGFuLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgICBzcGFuLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICdyZWQnO1xuXG4gICAgICAgIGFuaW1hdGVCYWxsKHNwYW4sIHggLSAoc2l6ZSAvIDIpLCB5IC0gKHNpemUgLyAyKSwgc3BlZWQsIGFuZ2xlLCB0b3BIZWlnaHQpO1xuICAgICAgICByZXR1cm4gc3BhbjtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBhbmltYXRlQmFsbChzcGFuLCB4LCB5LCBzcGVlZCwgYW5nbGUsIHRvcEhlaWdodCkge1xuXG4gICAgICAgIGNvbnN0IHJhZGlhbnMgPSBhbmdsZSAqIE1hdGguUEkgLyAxODA7XG4gICAgICAgIGNvbnN0IHZ4ID0gTWF0aC5jb3MocmFkaWFucykgKiBzcGVlZDtcbiAgICAgICAgY29uc3QgdnkgPSBNYXRoLnNpbihyYWRpYW5zKSAqIHNwZWVkO1xuICAgICAgICBjb25zdCBiYWxsID0geyB4OiB4LCB5OiB5LCB2ZWxvY2l0eXg6IHZ4LCB2ZWxvY2l0eXk6IHZ5LCByYWRpdXM6IHJhZGl1cyB9O1xuXG4gICAgICAgIGZ1bmN0aW9uIGRyYXdTY3JlZW4oKSB7XG5cbiAgICAgICAgICAgIGNvbnN0IHNjcmVlbkhlaWdodCA9IHRvcEhlaWdodDtcblxuICAgICAgICAgICAgaWYgKGJhbGwueSArIGJhbGwucmFkaXVzIDw9IHNjcmVlbkhlaWdodCkge1xuICAgICAgICAgICAgICAgIGJhbGwudmVsb2NpdHl5ICs9IGdyYXZpdHk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGJhbGwudmVsb2NpdHl4ID0gMDtcbiAgICAgICAgICAgICAgICBiYWxsLnZlbG9jaXR5eSA9IDA7XG4gICAgICAgICAgICAgICAgYmFsbC55ID0gc2NyZWVuSGVpZ2h0IC0gYmFsbC5yYWRpdXM7XG5cbiAgICAgICAgICAgICAgICBzcGVlZCAqPSAwLjk7XG4gICAgICAgICAgICAgICAgaWYgKHNwZWVkID4gbGltaXQpIHtcbiAgICAgICAgICAgICAgICAgICAgYW5pbWF0ZUJhbGwoc3BhbiwgYmFsbC54LCBiYWxsLnksIHNwZWVkLCBhbmdsZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgYmFsbC55ICs9IGJhbGwudmVsb2NpdHl5O1xuICAgICAgICAgICAgYmFsbC54ICs9IGJhbGwudmVsb2NpdHl4O1xuXG4gICAgICAgICAgICBzcGFuLnN0eWxlLnRvcCA9IGJhbGwueSArICdweCc7XG4gICAgICAgICAgICBzcGFuLnN0eWxlLmxlZnQgPSBiYWxsLnggKyAncHgnO1xuXG4gICAgICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgICAgICAgICAgIGRyYXdTY3JlZW4oKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIH1cbiAgICAgICAgZHJhd1NjcmVlbigpO1xuICAgIH1cblxuICAgIHJvb3QuZHJhd0JhbGwgPSBkcmF3QmFsbDtcbiAgICByb290LmFuaW1hdGVCYWxsID0gYW5pbWF0ZUJhbGw7XG5cbn0pKHdpbmRvdyk7Il19
