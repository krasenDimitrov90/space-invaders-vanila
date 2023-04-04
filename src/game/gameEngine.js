import { SpaceCraft } from "./gameCharachters.js";


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

    const position = {
        x: 100,
        y: 100,
    };
    const velocity = {
        x: 0,
        y: 0,
    }
    const spaceCraftEl = new SpaceCraft({ position, velocity });

    console.log(spaceCraftEl);

    window.requestAnimationFrame(animate.bind(null, spaceCraftEl));

};

const moveSpaceCraft = (spaceCraftEl) => {


    if (preseedKeys.ArrowRight) {
        spaceCraftEl.velocity.x = 5;
        spaceCraftEl.element.classList.add('right');
    } else if (preseedKeys.ArrowLeft) {
        spaceCraftEl.velocity.x = -5;
        spaceCraftEl.element.classList.add('left');
    } else {
        spaceCraftEl.velocity.x = 0;
        spaceCraftEl.element.classList.remove('right');
        spaceCraftEl.element.classList.remove('left');
    }

    if (preseedKeys.ArrowUp) {
        spaceCraftEl.velocity.y = -5;
    } else if (preseedKeys.ArrowDown) {
        spaceCraftEl.velocity.y = 5;
    } else {
        spaceCraftEl.velocity.y = 0;
    }

    // if (preseedKeys.ArrowDown && top + 64 <= screenDimentsions.height) {
    //     // spaceCraftEl.style.top = top + spaceCraft.velocity.y + 'px';
    // }

    // if (preseedKeys.ArrowLeft && left >= 0) {
    //     // spaceCraftEl.style.left = left - spaceCraft.velocity.x + 'px';
    //     // spaceCraftEl.classList.add('left');
    // } else {
    //     // spaceCraftEl.classList.remove('left');
    // }


};

const animate = (spaceCraftEl, time) => {

    moveSpaceCraft(spaceCraftEl);

    spaceCraftEl.update();

    window.requestAnimationFrame(animate.bind(null, spaceCraftEl));
};


export const startGame = () => {
    initGame();
};
