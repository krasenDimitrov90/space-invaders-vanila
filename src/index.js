const startScreenEl = document.querySelector('.start-screen');
const gameScreenEl = document.querySelector('.game-screen');

document.querySelector('.start-btn')
    .addEventListener('click', () => {
        gameScreenEl.classList.remove("hidden");
        startScreenEl.classList.add("hidden");
    })