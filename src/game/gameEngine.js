import { SpaceCraft, Projectile, Ufo, Enemies, EnemyProjectile } from "./gameCharachters.js";
import { detectColision } from "../utils/detectColision.js";


export const pressedKeys = {
    'ArrowUp': false,
    'ArrowDown': false,
    'ArrowLeft': false,
    'ArrowRight': false,
    'Space': false
};

const screenDimensions = {
    width: innerWidth,
    height: innerHeight,
};


const endGame = (winner) => {

    if (winner) {
        document.querySelector('.win-game').classList.remove("hidden");

    } else {
        document.querySelector('.game-over').classList.remove("hidden");
    }
    document.querySelector('.game-screen').innerHTML = '';

    document.querySelector('.game-screen').classList.add("hidden");

};

const initGame = () => {

    const position = {
        x: screenDimensions.width / 2,
        y: screenDimensions.height - 100,
    };
    const velocity = {
        x: 0,
        y: 0,
    }
    const spaceCraftEl = new SpaceCraft({ position, velocity }, 'spacecraft');
    const projectiles = [];
    const enemyProjectiles = [];
    const enemies = new Enemies(screenDimensions.width);
    let gameIsOver = false;

    window.requestAnimationFrame(animate.bind(null, spaceCraftEl, projectiles, enemies, enemyProjectiles, gameIsOver));

};



const animate = (spaceCraftEl, projectiles, enemies, enemyProjectiles, gameIsOver, time) => {

    if (gameIsOver) {
        return;
    }
    const enemiesElements = document.querySelectorAll('.ufo');

    spaceCraftEl.moveSpaceCraft(pressedKeys, screenDimensions)
    spaceCraftEl.update();
    enemies.updateVelocity(screenDimensions);




    if (pressedKeys.Space && time > Projectile.nextSpawnTimeStamp) {
        Projectile.nextSpawnTimeStamp = time + Projectile.fireRate;
        let position = {
            x: spaceCraftEl.position.x + spaceCraftEl.width / 2 - 4,
            y: spaceCraftEl.position.y - 6,
        }
        let velocity = { x: 0, y: -5 }
        projectiles.push(new Projectile({
            position: position,
            velocity: velocity,
        }, 'projectile'));
    }

    if (time > EnemyProjectile.nextSpawnTimeStamp) {
        let randomNumber = Math.floor(Math.random() * (2000 - 1000 + 1)) + 1000;
        EnemyProjectile.nextSpawnTimeStamp = time + EnemyProjectile.fireRate + randomNumber;

        let randomEnemie = enemiesElements[Math.floor(Math.random() * enemiesElements.length)];
        const [row, col] = randomEnemie.getAttribute('data-index').split('-').map(Number);
        const e = enemies.grid[row][col];

        let position = {
            x: e.position.x + e.width / 2 - 4,
            y: e.position.y - 6,
        }
        let velocity = { x: 0, y: 5 }

        enemyProjectiles.push(new EnemyProjectile({
            position: position,
            velocity: velocity,
        }, 'enemyiprojectile'));
    }

    projectiles.map((p, idx) => {
        p.update();
    });

    enemyProjectiles.map(p => {
        p.update();
    });

    enemies.grid.map((row, idx) => {
        row.map(e => {
            e.update();
            e.updateVelocity(screenDimensions, Enemies.velocity);

        });
    });

    if (enemiesElements.length === 0) {
        gameIsOver = true;
        endGame(true);
    }
    enemiesElements.forEach(enemie => {
        if (detectColision(enemie, spaceCraftEl.element)) {
            gameIsOver = true;
            endGame(false);
        }


    });

    document.querySelectorAll('.projectile')
        .forEach(projectile => {
            let posY = parseInt(projectile.style.top);


            enemiesElements.forEach((enemie, idx) => {
                if (detectColision(enemie, projectile)) {
                    // const [row, col] = enemie.getAttribute('data-index').split('-').map(Number);
                    enemie.remove();
                    projectile.remove();

                }

            });

            if (posY < 0) {
                projectile.remove();
            }
        });

    document.querySelectorAll('.enemyiprojectile')
        .forEach(p => {
            let posY = parseInt(p.style.top);
            if (detectColision(p, spaceCraftEl.element)) {
                gameIsOver = true;
                endGame(false);
            }
            if (posY > screenDimensions.height) {
                p.remove();
            }
        });

    window.requestAnimationFrame(animate.bind(null, spaceCraftEl, projectiles, enemies, enemyProjectiles, gameIsOver));
};


export const startGame = () => {
    initGame();
};
