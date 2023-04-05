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

    console.log(enemies);
    window.requestAnimationFrame(animate.bind(null, spaceCraftEl, projectiles, enemies));

};



const animate = (spaceCraftEl, projectiles, enemies, time) => {


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

    document.querySelectorAll('.projectile')
        .forEach(projectile => {
            let posY = parseInt(projectile.style.top);

            enemiesElements.forEach(enemie => {
                if (detectColision(enemie, projectile)) {
                    enemie.remove();
                    projectile.remove();
                }
            });


            if (posY < 0) {
                projectile.remove();
            }
        });

    window.requestAnimationFrame(animate.bind(null, spaceCraftEl, projectiles, enemies));
};


export const startGame = () => {
    initGame();
};
