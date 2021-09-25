export var BallList = [];

function degrees_to_radians(degrees) {
    var pi = Math.PI;
    var deg = degrees * (pi / 360);

    return deg;
}
export default class Ball extends HTMLElement {



    constructor() {
        super();

        this.velocity = { x: 0, y: 0 };
        this.lastForce = new Date();
        this.velocityDir = 0;
        this.x = 50;
        this.y = 50;

        document.addEventListener('onPhysicsUpdate', this.onUpdate.bind(this), false);
    }
    init() {
        this.setAttribute('velocity', { X: 0, Y: 0 });
        this.className = "pool_ball";

        var oImg = document.createElement("img");

        oImg.src = "https://www.nicepng.com/png/full/805-8057245_billiard-ball-2-png.png";

        console.log(document.getElementsByClassName('pool_table')[0]);
        this.appendChild(oImg);
        document.getElementsByClassName('pool_table')[0].appendChild(this);




        BallList.push(this);
    }
    addForce(direction, strength) {

        direction = degrees_to_radians(direction);
        this.velocity.x = Math.cos(direction) * strength
        this.velocity.y = Math.sin(direction) * strength;
        this.lastDirection = direction;
        this.lastForce = new Date();
        console.log(' force angle ' + direction);
    }

    checkWallCollision() {

    
    
        var angle = -1;

        console.log(this.y);

        if (this.x <= 45 && this.y <= 45){
            alert('1')
        } 
    }


    onUpdate() {


        this.x += this.velocity.x;
        this.y += this.velocity.y;

        this.checkWallCollision();

        // if (this.x < 50 || this.y < 50 || this.x > ball.parentElement.offsetWidth - 80 || this.y > ball.parentElement.offsetHeight - 80) {
        //     /// this.addForce(Math.sin(this.lastDirection), 3);  
        //     return;
        // }


        this.style.left = this.x + 'px';
        this.style.top = this.y + 'px';

        //  console.log('velocity ' + JSON.stringify(this.velocity));

        //  console.log('x: ' + this.x + " y " + this.y);
    }
    connectedCallback() {

    }
}

customElements.define('ball-element', Ball);


var event = new CustomEvent("onPhysicsUpdate");


setInterval(() => {
    document.dispatchEvent(event);
}, 1000 / 60);