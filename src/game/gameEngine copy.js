const spaceCraft = {
    position: {
        x: 25,
        y: 100,
    },
    velocity: {
        x: 5,
        y: 5,
    },
};

export const preseedKeys = {
    'ArrowUp': false,
    'ArrowDown': false,
    'ArrowLeft': false,
    'ArrowRight': false,
};

const screenDimentsions = {
    width: innerWidth,
    height: innerHeight,
};

const initGame = () => {
    const gameContainerEL = document.querySelector('.game-screen');

    const spaceCraftEl = document.createElement('div');
    spaceCraftEl.classList.add('spacecraft');
    spaceCraftEl.style.left = spaceCraft.position.x + 'px';
    spaceCraftEl.style.top = spaceCraft.position.y + 'px';

    gameContainerEL.appendChild(spaceCraftEl);

    window.requestAnimationFrame(animate.bind(null, spaceCraftEl));

};

const moveSpaceCraft = (spaceCraftEl) => {

    const left = parseInt(spaceCraftEl.style.left);
    const top = parseInt(spaceCraftEl.style.top);

    if (preseedKeys.ArrowUp && top >= 0) {
        spaceCraftEl.style.top = top - spaceCraft.velocity.y + 'px';
    }
    
    if (preseedKeys.ArrowDown && top + 64 <= screenDimentsions.height) {
        spaceCraftEl.style.top = top + spaceCraft.velocity.y + 'px';
    }

    if (preseedKeys.ArrowLeft && left >= 0) {
        spaceCraftEl.style.left = left - spaceCraft.velocity.x + 'px';
        spaceCraftEl.classList.add('left');
    } else {
        spaceCraftEl.classList.remove('left');
    }

    if (preseedKeys.ArrowRight && left + 64 <= screenDimentsions.width) {
        spaceCraftEl.style.left = left + spaceCraft.velocity.x + 'px';
        spaceCraftEl.classList.add('right');
    } else {
        spaceCraftEl.classList.remove('right');
    }
};

const animate = (spaceCraftEl, time) => {

    moveSpaceCraft(spaceCraftEl);



    window.requestAnimationFrame(animate.bind(null, spaceCraftEl));
};

animate.lastTime = 0;

export const startGame = () => {
    initGame();
};
