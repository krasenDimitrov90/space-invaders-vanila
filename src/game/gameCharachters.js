const imgesPaths = {
    'air-plain': '../../images/air-plain.png',
};

class Charachter {
    constructor({ position, velocity }) {
        this.position = position;
        this.velocity = velocity;
        this.element = this.createCharacter();
        this.draw();
    }

    createCharacter() {
        const c = document.createElement('div');
        c.classList.add('spacecraft');
        return c;
    }

    draw() {
        this.element.style.left = this.position.x + 'px';
        this.element.style.top = this.position.y + 'px';
        document.querySelector('.game-screen').appendChild(this.element);
    }

    update() {
        // this.draw();
        this.position.x += this.velocity.x;
        this.position.y += this.velocity.y;
        this.element.style.left = this.position.x + 'px';
        this.element.style.top = this.position.y + 'px';
    }
}

class SpaceCraft extends Charachter {
    constructor({ position, velocity }, imagePath) {
        super({ position, velocity }, imagePath);
    }
}

class FireBall extends Charachter {
    constructor({ position, velocity }) {
        super({ position, velocity });

    }
}


export {
    SpaceCraft,
    FireBall,
}