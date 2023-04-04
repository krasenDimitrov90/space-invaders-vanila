const spaceCraft = {
    position: {
        x: 25,
        y: 100,
    },
    velocity: {
        x: 0,
        y: 0,
    },
};


const initGame = () => {
    const gameContainerEL = document.querySelector('.game-screen');

    const spaceCraftEl = document.createElement('div');
    spaceCraftEl.classList.add('spacecraft');
    spaceCraftEl.style.left = spaceCraft.position.x + 'px';
    spaceCraftEl.style.top = spaceCraft.position.y + 'px';

    gameContainerEL.appendChild(spaceCraftEl);
};

const animate = (time) => {
    window.requestAnimationFrame(animate);

};

animate.lastTime = 0;

export const startGame = () => {
    animate();

    initGame();
};
