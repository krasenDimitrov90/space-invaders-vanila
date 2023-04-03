import Player from "./src/carachters/player.js";
import Projectile from "./src/carachters/projectile.js";

const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

canvas.width = innerWidth;
canvas.height = innerHeight;

const player = new Player();
const projectiles = [];

const keys = {
    a: { pressed: false },
    d: { pressed: false },
    w: { pressed: false },
    s: { pressed: false },
};

function animate() {
    requestAnimationFrame(animate);
    ctx.fillStyle = 'black';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    player.update();

    projectiles.forEach((p, index) => {
        if (p.position.y < 0) {
            projectiles.splice(index, 1);
            return;
        }
        p.update();
    });

    if (keys.a.pressed && player.position.x >= 0) {
        player.velocity.x = -7;
    } else if (keys.d.pressed && (player.position.x + player.width) <= canvas.width) {
        player.velocity.x = 7;
    } else {
        player.velocity.x = 0;
    }
}

animate();

const handleKeyDown = (e) => {
    switch (e.key) {
        case 'a':
        case 'ArrowLeft':
            keys.a.pressed = true;
            break;
        case 'w':
        case 'ArrowUp':
            player.velocity.y = -7;
            break;
        case 'd':
        case 'ArrowRight':
            keys.d.pressed = true;
            break;
        case 's':
        case 'ArrowDown':
            player.velocity.y = 7;
            break;
        case ' ':
            projectiles.push(
                new Projectile({
                    position: {
                        x: player.position.x + player.width / 2,
                        y: player.position.y,
                    },
                    velocity: {
                        x: 0,
                        y: -5,
                    }
                })
            );
            console.log(projectiles);
            break;
    }
};

const handleKeyUp = (e) => {
    switch (e.key) {
        case 'a':
        case 'ArrowLeft':
            keys.a.pressed = false;
            break;
        case 'w':
        case 'ArrowUp':
            player.velocity.y = 0;
            break;
        case 'd':
        case 'ArrowRight':
            keys.d.pressed = false;
            break;
        case 's':
        case 'ArrowDown':
            player.velocity.y = 0;
            break;
        case ' ':
            break;
    }
};

window.addEventListener('keydown', handleKeyDown);
window.addEventListener('keyup', handleKeyUp);

export { canvas, ctx };