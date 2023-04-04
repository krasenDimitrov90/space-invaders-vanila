import { canvas, ctx } from '../index.js';
import Invader from './carachters/invader.js';

class InvadersGrid {
    constructor() {
        this.position = {
            x: 0,
            y: 0,
        };
        this.velocity = {
            x: 0,
            y: 0,
        };

        this.invaders = [];

        let cols = 10;
        let rows = 5;

        this.width = cols * 30;

        for (let x = 0; x < cols; x++) {
            for (let y = 0; y < rows; y++) {
                this.invaders.push(
                    new Invader({
                        position: { x: x * 30, y: y * 30 }
                    })
                );
            }
        }
    }

    update() {
        this.position.x += this.velocity.x;
        this.position.y += this.velocity.y;

        this.velocity.y = 0;

        if (this.position.x + this.width >= canvas.width ||
            this.position.x <= 0) {
            this.velocity.x = -this.velocity.x
            // this.velocity.y = 5
        }
    }
}

export default InvadersGrid;