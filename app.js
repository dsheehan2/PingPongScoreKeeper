const p1 = {
    score: 0,
    button: document.querySelector('#p1Button'),
    display: document.querySelector('#p1Display'),
}
const p2 = {
    score: 0,
    button: document.querySelector('#p2Button'),
    display: document.querySelector('#p2Display'),
}

const resetButton = document.querySelector('#Reset');
const winningScoreSelect = document.querySelector('#playto');
const img = document.querySelector('#theimg');

let winningScore = 3;
let isGameOver = false;

function updateScores(player, opponent) {
    if(!isGameOver) {
        player.score += 1;
        if(player.score === winningScore) {
            isGameOver = true;
            player.display.classList.add('has-text-success');
            opponent.display.classList.add('has-text-danger');
            player.button.disabled = true;
            opponent.button.disabled = true;
            img.setAttribute('src', 'https://miro.medium.com/max/1400/1*wi0puUggTtBCmKMDnVk7AQ.jpeg');
            $('#fireworks').fireworks();
        }
        player.display.innerText = player.score;
    }
}

p1.button.addEventListener('click', function() {
    updateScores(p1, p2);
});

p2.button.addEventListener('click', function() {
    updateScores(p2, p1);
});

winningScoreSelect.addEventListener('change', function () {
    winningScore = parseInt(this.value);
    reset();
});

resetButton.addEventListener('click', reset);

function reset() {
    isGameOver = false;
    for(let p of [p1, p2]) {
        p.score = 0;
        p.display.innerText = 0;
        p.display.classList.remove('has-text-success', 'has-text-danger');
        p.button.disabled = false;
        img.setAttribute('src', 'https://st2.depositphotos.com/4431055/11855/i/600/depositphotos_118559020-stock-photo-professional-ping-pong-rockets.jpg');
        $('#fireworks').fireworks('destroy');
    }
}


