import { canvas, ctx } from "../../index.js";

const imgUrl = '../../images/invader.png';

class Invader {
    constructor() {
        this.velocity = {
            x: 0,
            y: 0,
        };


        const image = new Image();
        image.src = imgUrl;

        image.onload = () => {
            this.image = image;
            this.width = image.width;
            this.height = image.height;
            this.position = {
                x: canvas.width / 2,
                y: canvas.height / 2,
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

export default Invader;