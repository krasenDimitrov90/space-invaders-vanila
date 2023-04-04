import { startGame } from "./game/gameEngine.js";
import { preseedKeys } from "./game/gameEngine.js";

document.querySelector('.start-btn')
    .addEventListener('click', () => {
        document.querySelector('.game-screen').classList.remove("hidden");
        document.querySelector('.start-screen').classList.add("hidden");
        startGame();
    })



window.addEventListener('keydown', (e) => {
    preseedKeys[e.key] = true;
});

window.addEventListener('keyup', (e) => {
    preseedKeys[e.key] = false;
});