import { startGame } from "./game/gameEngine.js";
import { pressedKeys } from "./game/gameEngine.js";

document.querySelector('.start-btn')
    .addEventListener('click', () => {
        document.querySelector('.game-screen').classList.remove("hidden");
        document.querySelector('.start-screen').classList.add("hidden");
        startGame();
    })



window.addEventListener('keydown', (e) => {
    pressedKeys[e.code] = true;
});

window.addEventListener('keyup', (e) => {
    pressedKeys[e.code] = false;
});