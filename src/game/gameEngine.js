import { SpaceCraft, Projectile, Ufo, Enemies } from "./gameCharachters.js";
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
    const enemies = new Enemies(screenDimensions.width);
    let gameIsOver = false;

    window.requestAnimationFrame(animate.bind(null, spaceCraftEl, projectiles, enemies, gameIsOver));

};



const animate = (spaceCraftEl, projectiles, enemies, gameIsOver, time) => {

    if (gameIsOver) {
        return;
    }

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

    projectiles.map((p, idx) => {
        p.update();
    });

    enemies.grid.map((row, idx) => {
        row.map(e => {
            e.update();
            e.updateVelocity(screenDimensions, Enemies.velocity);
        });
    });

    const enemiesElements = document.querySelectorAll('.ufo');
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

    window.requestAnimationFrame(animate.bind(null, spaceCraftEl, projectiles, enemies, gameIsOver));
};


export const startGame = () => {
    initGame();
};
