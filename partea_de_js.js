'use strict';

window.onload = function(){
    const sectionLeft = document.querySelector('.section--left');
    const sectionRight = document.querySelector('.section--right');
    const buttonRoll = document.querySelector('.button--roll');
    const buttonHold = document.querySelector('.button--hold');
    const buttonNew = document.querySelector('.button--new-game');
    const diceSide = document.querySelector('.dice-side');
    const score0 = document.querySelector('.score--0');
    const score1 = document.querySelector('.score--1');
    const currentScore0 = document.querySelector('.current-score--0');
    const currentScore1 = document.querySelector('.current-score--1');


    let scores;

    let activePlayer;
    let currentScoreCollected;
    let playing;
    

    const restartGame = function(){
        score0.textContent = 0;     
        score1.textContent = 0;
        currentScore0.textContent = 0;
        currentScore1.textContent = 0;
        diceSide.classList.add('hidden');
        activePlayer = 0;
        sectionLeft.classList.add('player--active');
        sectionRight.classList.remove('player--active');
        currentScoreCollected = 0;
        scores = [0, 0];
        playing = true;
        document.querySelector('.player--0-wins').classList.add('hidden');
        document.querySelector('.player--1-wins').classList.add('hidden');
        
    }
    restartGame();

    //ROLL
    buttonRoll.addEventListener('click', function(){
        

        if(score0.textContent<100 && score1.textContent<100){
        let dice = Math.trunc(Math.random()*6)+1;
        console.log(dice);
        diceSide.src=`diceSide--${dice}.png`;
        diceSide.classList.remove('hidden');

        if(dice!=1){
        currentScoreCollected += dice;
        document.querySelector(`.current-score--${activePlayer}`).textContent = currentScoreCollected;
        
        }
    else
        {
        currentScoreCollected = 0;
        document.querySelector(`.current-score--${activePlayer}`).textContent = 0;
        activePlayer = activePlayer == 0 ? 1:0;


        
        console.log("Playerul este: " + activePlayer);

        sectionLeft.classList.toggle('player--active');
        sectionRight.classList.toggle('player--active');
        
        }
    }
  
    
    });


    //HOLD
    buttonHold.addEventListener('click', function(){
        
        scores[activePlayer] += currentScoreCollected;
        currentScoreCollected = 0;
        document.querySelector(`.score--${activePlayer}`).textContent = scores[activePlayer];
       
        if(scores[activePlayer] >= 100){
            document.querySelector(`.player--${activePlayer}-wins`).classList.remove('hidden');
        }
        else
        {
        document.querySelector(`.current-score--${activePlayer}`).textContent = 0;    
        activePlayer = activePlayer == 0 ? 1:0;
        sectionLeft.classList.toggle('player--active');
        sectionRight.classList.toggle('player--active');
        }
        

      
        
    });

    //NEW
    buttonNew.addEventListener('click', restartGame);
    

}