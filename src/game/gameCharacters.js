class Character {
    constructor({ position, velocity }) {
        this.position = position;
        this.velocity = velocity;
    }
}

class SpaceCraft extends Character {
    constructor({ position, velocity }) {
        super({ position, velocity });
        
    }

}