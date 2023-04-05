import { SpaceCraft, Projectile } from "./gameCharachters.js";


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
        x: 100,
        y: 100,
    };
    const velocity = {
        x: 0,
        y: 0,
    }
    const spaceCraftEl = new SpaceCraft({ position, velocity }, 'spacecraft');

    window.requestAnimationFrame(animate.bind(null, spaceCraftEl));

};

const projectiles = [];

const animate = (spaceCraftEl, time) => {


    spaceCraftEl.moveSpaceCraft(pressedKeys, screenDimensions)
    spaceCraftEl.update();


    if (pressedKeys.Space && time > Projectile.nextSpawnTimeStamp) {
        console.log(Projectile.nextSpawnTimeStamp);
        Projectile.nextSpawnTimeStamp = time + Projectile.fireRate;
        let position = {
            x: spaceCraftEl.position.x + spaceCraftEl.width / 2 - 4,
            y: spaceCraftEl.position.y - 6,
        }
        let velocity = {x: 0, y: -5}
        projectiles.push(new Projectile({
            position: position,
            velocity: velocity,
        }, 'projectile'));
    }

    projectiles.map((p, idx) => {
        p.update();
        if (p.position.y < 0) {
            projectiles.splice(idx, 1);
        }
    });

    document.querySelectorAll('.projectile')
        .forEach(projectile => {
            let posY = parseInt(projectile.style.top);
            if (posY < 0) {
                projectile.remove();
            }
        });

    window.requestAnimationFrame(animate.bind(null, spaceCraftEl));
};


export const startGame = () => {
    initGame();
};
