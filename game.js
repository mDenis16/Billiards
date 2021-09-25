
import Ball from './modules/ball.js';
import { BallList } from './modules/ball.js';

window.createBall = () => {
    var ball = document.createElement('ball-element');
    ball.init();
    ball.addForce(0, 1.65);

}
window.ball = undefined;
document.addEventListener("DOMContentLoaded", function (event) {
    window.ball = document.createElement('ball-element');
    window.ball.init();

    document.getElementsByClassName('pool_table')[0].addEventListener('click', (e) => {
        let rect = e.target.getBoundingClientRect();
        let x = e.clientX - rect.left; //x position within the element.
        let y = e.clientY - rect.top;  //y position within the element.


        var angleDeg = Math.atan2(y - ball.y, x - ball.x) * 360 / Math.PI;



        window.ball.addForce(angleDeg, 4.15);
        console.log(angleDeg);
    });
});
document.addEventListener('onPhysicsUpdate', function () {

}, false);
