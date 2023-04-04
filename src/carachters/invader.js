import { canvas, ctx } from "../../index.js";

const imgUrl = '../../images/invader.png';

class Invader {
    constructor({ position }) {
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
                x: position.x,
                y: position.y,
            };
        }
    }

    draw() {
        if (this.image) {
            ctx.drawImage(this.image, this.position.x, this.position.y, this.width, this.height);
        }
    }

    update({ velocity }) {
        if (this.image) {
            this.draw();
            // this.position.x += velocity.x;
            // this.position.y += velocity.y;
            this.position.x += velocity.x;
            this.position.y += velocity.y;
        }
    }
}

export default Invader;