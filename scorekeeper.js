var p1Button = document.getElementById('p1Button');
var p2Button = document.getElementById('p2Button');
var resetButton = document.getElementById('resetButton');
var numInput = document.querySelector('input[type="number"]');
var inputScore = document.querySelector('p span');
var p1Score = 0;
var p2Score = 0;
var score1 = document.getElementById('score1');
var score2 = document.getElementById('score2');
var gameOver = false;
var winningScore = 5;

p1Button.addEventListener("click", function(){
    if(!gameOver){
        p1Score++;
        if(p1Score === winningScore){
            score1.classList.add('winner');
            gameOver = true;
        }
        score1.textContent = p1Score;
    }  
})

p2Button.addEventListener("click", function(){
    if(!gameOver){
        p2Score++;
        if(p2Score === winningScore){
            score2.classList.add('winner');
            gameOver = true;
        }
        score2.textContent = p2Score;
    }
})

resetButton.addEventListener("click", function(){
    reset();
})

function reset(){
    p1Score = 0;
    p2Score = 0;
    score1.textContent = p1Score;
    score2.textContent = p2Score;
    score1.classList.remove('winner');
    score2.classList.remove('winner');
    gameOver = false;
}

numInput.addEventListener("change", function(){
    inputScore.textContent = numInput.value;
    winningScore = Number(numInput.value);
    reset();
})