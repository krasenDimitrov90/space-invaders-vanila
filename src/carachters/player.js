import { canvas, ctx } from '../../index.js';

const imgUrl = '../../images/spaceship.png';

class Player {
    constructor() {
        this.velocity = {
            x: 0,
            y: 0,
        };


        const image = new Image();
        image.src = imgUrl;

        image.onload = () => {
            this.image = image;
            this.width = image.width * 0.15;
            this.height = image.height * 0.15;
            this.position = {
                x: canvas.width / 2,
                y: canvas.height - 50,
            };
        }
    }

    draw() {
        if (this.image) {
            ctx.drawImage(this.image, this.position.x, this.position.y, this.width, this.height);
        }
    }

    update() {
        if (this.image) {
            this.draw();
            this.position.x += this.velocity.x;
            this.position.y += this.velocity.y;
        }
    }
}

export default Player;
