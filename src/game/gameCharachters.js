
class Charachter {
    constructor({ position, velocity }, className) {
        this.position = position;
        this.velocity = velocity;
        this.element = this.createCharacter(className);
        this.width = null;
        this.height = null;
        this.draw();
    }

    createCharacter(className) {
        const c = document.createElement('div');
        c.classList.add(className);
        return c;
    }

    draw() {
        this.element.style.left = this.position.x + 'px';
        this.element.style.top = this.position.y + 'px';
        document.querySelector('.game-screen').appendChild(this.element);
    }

    update() {
        if (!this.width) {
            let { width, height } = this.element.getBoundingClientRect();
            this.width = width;
            this.height = height;
        }

        this.position.x += this.velocity.x;
        this.position.y += this.velocity.y;
        this.element.style.left = this.position.x + 'px';
        this.element.style.top = this.position.y + 'px';
    }
}

class SpaceCraft extends Charachter {
    constructor({ position, velocity }, className) {
        super({ position, velocity }, className);
    }

    moveSpaceCraft(pressedKeys, screenDimensions) {
        const posX = this.position.x;
        const posY = this.position.y;
        const width = this.width;
        const height = this.height;
    
        if (pressedKeys.ArrowRight && (posX + width) <=  screenDimensions.width) {
            this.velocity.x = 5;
            this.element.classList.add('right');
        } else if (pressedKeys.ArrowLeft && posX >= 0) {
            this.velocity.x = -5;
            this.element.classList.add('left');
        } else {
            this.velocity.x = 0;
            this.element.classList.remove('right');
            this.element.classList.remove('left');
        }
    
        if (pressedKeys.ArrowUp && posY >= 0) {
            this.velocity.y = -5;
        } else if (pressedKeys.ArrowDown && (posY + height) <= screenDimensions.height) {
            this.velocity.y = 5;
        } else {
            this.velocity.y = 0;
        }
    }
}

class Projectile extends Charachter {
    static nextSpawnTimeStamp = 0;
    static fireRate = 200;

    constructor({ position, velocity }, className) {
        super({ position, velocity }, className);
    }
}

class Ufo extends Charachter {
    constructor({ position, velocity }, className) {
        super({ position, velocity }, className);
    }
}


export {
    SpaceCraft,
    Projectile,
    Ufo,
}