/*
GAME RULES:
- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game
*/

var scores;
var roundScore;
var activePlayer;
var sixCounter;
var gamePlaying;

var lastDice;


initGame();


function initGame() {


    scores = [0, 0];
    roundScore = 0;
    activePlayer = 0;
    gamePlaying = true;
    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';

    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');

    document.querySelector('#name-0').textContent = 'Player 1';
    document.querySelector('#name-1').textContent = 'Player 2';

    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');


    document.querySelector('.player-0-panel').classList.add('active');

};


//Roll button function
document.querySelector('.btn-roll').addEventListener('click', function () {


    if (gamePlaying) {
        //var min = 4;
        //var max = 6;

        //var dice = Math.floor(Math.random() * (max - min + 1 )) + min;
        var dice1 = Math.floor(Math.random() * 6) + 1;
        var dice2 = Math.floor(Math.random() * 6) + 1;





        document.getElementById("dice-1").style.display = "block";
        document.getElementById("dice-2").style.display = "block";

        document.getElementById("dice-1").src = 'dice-' + dice1 + '.png';
        document.getElementById("dice-2").src = 'dice-' + dice2 + '.png';



        if (dice1 + dice2 !== 2) {
            roundScore += dice1 + dice2;
            document.querySelector('#current-' + activePlayer).textContent = roundScore;
        } else {
            nextPlayer();
            console.log(dice1 + dice2);
        }

    }
});

//Hold button function
document.querySelector('.btn-hold').addEventListener('click', function () {
    if (gamePlaying) {
        scores[activePlayer] += roundScore;
        document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];



        var playerInput = document.querySelector('.final-score').value;
        var gameWinScore;
        if (playerInput) {
            gameWinScore = playerInput
        } else {
            gameWinScore = 200;
        }



        if (scores[activePlayer] >= gameWinScore) {
            document.querySelector('#name-' + activePlayer).textContent = ' Player ' + activePlayer + ' Wins!';
            document.getElementById('dice-1').style.display = 'none';
            document.getElementById('dice-2').style.display = 'none';
            //document.querySelector('.dice').style.display = 'none';

            document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
            gamePlaying = false;
            if (activePlayer === 0) {
                document.querySelector('#name-' + activePlayer).textContent = ' Player 1 Wins!';
            } else {
                document.querySelector('#name-' + activePlayer).textContent = ' Player 2 Wins!';

            }
        } else {
            nextPlayer();
        }




    }
});


document.querySelector('.btn-new').addEventListener('click', initGame);


function nextPlayer() {

    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;

    document.getElementById('current-0').textContent = 0;
    document.getElementById('current-1').textContent = 0;

    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
    // document.querySelector('.dice').style.display = 'none';
    document.getElementById('dice-1').style.display = 'none';
    document.getElementById('dice-2').style.display = 'none';
};


document.querySelector

function setScore() {

    gameWinScore = document.getElementById('scoreSet').textContent;

}

/*
Challenges to improve game
1)
Player looses entire score if two 6 rolls in a row.
2)
Set method in HTML for total score
3)
Add another dice to the game, player looses score if one dice score 1.
*/