
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

        if (pressedKeys.ArrowRight && (posX + width) <= screenDimensions.width) {
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

    updateVelocity(screenDimensions, velocity) {
        this.velocity = velocity;

    }
}

class Enemies {
    static velocity = {
        x: 2,
        y: 0,
    };
    constructor(screenWidth) {
        this.grid = this.fillGrid(screenWidth);
    }

    fillGrid(screenWidth) {
        let enemies = [];
        const rows = 5;
        const cols = 10;
        const quaterOfScreen = screenWidth / 4;
        for (let i = 0; i < rows; i++) {
            enemies[i] = [];
            for (let j = 0; j < cols; j++) {
                enemies[i].push(new Ufo({
                    position: { x: quaterOfScreen + (j * 60), y: i * 60 },
                    velocity: { x: 2, y: 0 }
                }, 'ufo'));
            }
        }
        return enemies;
    }

    updateVelocity(screenDimensions) {
        let enemiesOnEveryRowPositions = this.grid.reduce((acc, row) => {
            let length = row.length;
            if (length > 0) {
                let posX = row[0].position.x;
                acc.push(posX);
                if (length > 1) {
                    let posXOfLastEnemyInTheRow = row[length - 1].position.x;
                    acc.push(posXOfLastEnemyInTheRow);
                }
            }
            return acc;
        }, []);

        let mostLeftEnemiePosition = null;
        let mostRightEnemiePosition = null;

        if (enemiesOnEveryRowPositions.length > 0) {
            mostRightEnemiePosition = Math.max(...enemiesOnEveryRowPositions);
            mostLeftEnemiePosition = Math.min(...enemiesOnEveryRowPositions);

        }

        if (mostRightEnemiePosition && mostRightEnemiePosition + 60 >= screenDimensions.width) {
            Enemies.velocity = {x: -2, y: 5};
        } else if (mostLeftEnemiePosition && mostLeftEnemiePosition <= 0) {
            Enemies.velocity = {x: 2, y: 5};
        } else {
            Enemies.velocity.y = 0;
        }
    }
}


export {
    SpaceCraft,
    Projectile,
    Ufo,
    Enemies,
}