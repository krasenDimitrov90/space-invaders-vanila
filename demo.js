const imgesPaths = {
    'air-plain': '../../images/air-plain.png',
};

class Charachter {
    constructor({position, velocity}, imagePath) {
        this.position = position;
        this.velocity = velocity;
        this.imagePath = imagePath;
        this.element = this.createCharacter(imagePath);
    }

    createCharacter(path) {
        const c = document.createElement('img');
        c.src = imgesPaths[path];
    }
}

class SpaceCraft extends Charachter {
    constructor({position, velocity}) {
        super({position, velocity});
    }
}

class FireBall extends Charachter {
    constructor({position, velocity}) {
        super({position, velocity});
        
    }
}

const fireBall = new FireBall({
    position: {
        fX: 0,
        fY: 0,
    },
    velocity: {
        fX: 1,
        fY: 1,
    }
})

const spaceCraft = new SpaceCraft({
    position: {
        SX: 10,
        SY: 10,
    },
    velocity: {
        SX: 12,
        SY: 12,
    }
})

console.log(fireBall);
console.log(spaceCraft);