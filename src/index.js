import { startGame } from "./game/gameEngine.js";
import { pressedKeys } from "./game/gameEngine.js";

document.querySelectorAll('.start-btn')
    .forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelector('.game-screen').classList.remove("hidden");
            document.querySelector('.start-screen').classList.add("hidden");
            document.querySelector('.game-over').classList.add("hidden");
            document.querySelector('.win-game').classList.add("hidden");
            startGame();
        })
    })



window.addEventListener('keydown', (e) => {
    pressedKeys[e.code] = true;
});

window.addEventListener('keyup', (e) => {
    pressedKeys[e.code] = false;
});