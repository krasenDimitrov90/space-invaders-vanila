import { SpaceCraft, Projectile, Ufo } from "./gameCharachters.js";


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
    const enemies = [];

    const rows = 5;
    const cols = 10;
    for (let i = 0; i < rows; i++) {
        enemies[i] = [];
        for (let j = 0; j < cols; j++) {
            enemies[i].push(new Ufo({
                position: { x: j * 60, y: i * 60 },
                velocity: { x: 2, y: 0 }
            }, 'ufo'));
        }
    }

    console.log(enemies);
    window.requestAnimationFrame(animate.bind(null, spaceCraftEl, projectiles, enemies));

};



const animate = (spaceCraftEl, projectiles, enemies, time) => {


    spaceCraftEl.moveSpaceCraft(pressedKeys, screenDimensions)
    spaceCraftEl.update();


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

    enemies.map((row, idx) => {
        row.map(e => {
            e.update();
        });
    });

    document.querySelectorAll('.projectile')
        .forEach(projectile => {
            let posY = parseInt(projectile.style.top);
            if (posY < 0) {
                projectile.remove();
            }
        });

    window.requestAnimationFrame(animate.bind(null, spaceCraftEl, projectiles, enemies));
};


export const startGame = () => {
    initGame();
};
