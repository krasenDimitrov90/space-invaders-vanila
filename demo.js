const imgesPaths = {
    'air-plain': '../../images/air-plain.png',
};

class Charachter {
    constructor({ position, velocity }, imagePath) {
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
    constructor({ position, velocity }) {
        super({ position, velocity });
    }
}

class FireBall extends Charachter {
    constructor({ position, velocity }) {
        super({ position, velocity });

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


[
    {
        "position": {
            "x": 475.5,
            "y": 280
        },
        "velocity": {
            "x": 2,
            "y": 0
        },
        "element": {},
        "width": 60,
        "height": 50
    },
    {
        "position": {
            "x": 535.5,
            "y": 280
        },
        "velocity": {
            "x": 2,
            "y": 0
        },
        "element": {},
        "width": 60,
        "height": 50
    },
    {
        "position": {
            "x": 715.5,
            "y": 280
        },
        "velocity": {
            "x": 2,
            "y": 0
        },
        "element": {},
        "width": 60,
        "height": 50
    },
    {
        "position": {
            "x": 775.5,
            "y": 280
        },
        "velocity": {
            "x": 2,
            "y": 0
        },
        "element": {},
        "width": 60,
        "height": 50
    },
    {
        "position": {
            "x": 835.5,
            "y": 280
        },
        "velocity": {
            "x": 2,
            "y": 0
        },
        "element": {},
        "width": 60,
        "height": 50
    },
    {
        "position": {
            "x": 895.5,
            "y": 280
        },
        "velocity": {
            "x": 2,
            "y": 0
        },
        "element": {},
        "width": 60,
        "height": 50
    },
    {
        "position": {
            "x": 955.5,
            "y": 280
        },
        "velocity": {
            "x": 2,
            "y": 0
        },
        "element": {},
        "width": 60,
        "height": 50
    },
    {
        "position": {
            "x": 1015.5,
            "y": 280
        },
        "velocity": {
            "x": 2,
            "y": 0
        },
        "element": {},
        "width": 60,
        "height": 50
    }
]