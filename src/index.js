import { startGame } from "./game/gameEngine.js";


document.querySelector('.start-btn')
    .addEventListener('click', () => {
        document.querySelector('.game-screen').classList.remove("hidden");
        document.querySelector('.start-screen').classList.add("hidden");
        startGame();
    })