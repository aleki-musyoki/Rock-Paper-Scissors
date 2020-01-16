const game = ()=>{
    let pScore = 0;
    let cScore = 0;

    const startGame = ()=>{
        const playBtn = document.querySelector('.intro button');
        const introScreen = document.querySelector('.intro');
        const match = document.querySelector('.match');

        playBtn.addEventListener('click', ()=>{
            introScreen.classList.add('fadeOut');
            match.classList.add('fadeIn');
        });
    };
    //Play Match
    const playMatch = ()=> {
        const options = document.querySelectorAll('.option button');
        const playerHand = document.querySelector('.player-hands');
        const computerHand = document.querySelector('.computer-hands');
        //Computer Options
        const computerOptions = ["rock", "paper", "scissors"];

        options.forEach(option =>{
            option.addEventListener('click', function () {
                const computerNumber = Math.floor(Math.random() *3);
                const computerChoice = computerOptions[computerNumber];
                const playerChoice = this.textContent;
                // console.log(this.textContent);
                // console.log(computerChoice);
                // console.log(playerChoice);
                const computerAnswer = computerChoice[0].toUpperCase() + computerChoice.slice(1);
                console.log(computerAnswer);
                //Call function compare hands
                compareHands(playerChoice, computerAnswer);

                //Update Images
                playerHand.src = `assets/${playerChoice}.png`;
                computerHand.src = `assets/${computerAnswer}.png`;

            });
        });
    };

    const updateScore = () =>{
        const playerScore = document.querySelector('.player-score p');
        const computerScore = document.querySelector('.computer-score p');
        playerScore.textContent = pScore;
        computerScore.textContent = cScore;
    };

    const compareHands = (playerChoice, computerAnswer) =>{
        //Update text
        let winner = document.querySelector('.winner');
        if(playerChoice === computerAnswer){
            winner.textContent = 'Its a tie!';
            return;
        };
        //Check for rock
        if(playerChoice === "rock"){
            if(computerAnswer === "scissors"){
                winner.textContent = "Player Wins";
                pScore++;
                updateScore();
                return;
            }else{
                winner.textContent = "ComputerWins";
                cScore++;
                updateScore();
                return;
            }
        };
        //Check for Paper
        if(playerChoice === "paper"){
            if(computerAnswer === "rock"){
                winner.textContent = "Player Wins!";
                pScore++;
                updateScore();
                return;
            }else{
                winner.textContent = "Computer Wins!";
                cScore++;
                updateScore();
                return;
            }
        };
        //Check for scissors
        if(playerChoice === "scissors"){
            if(computerAnswer === "rock"){
                winner.textContent = "Computer Wins";
                cScore++;
                updateScore();
                return;
            }else{
                winner.textContent = "Player Wins";
                pScore++;
                updateScore();
                return;
            }
        };

    };

    //Call the inner functions
    startGame();
    playMatch();

};

//start the game function
game();