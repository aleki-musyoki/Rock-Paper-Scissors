const startGame = () =>{
    const playBtn = document.querySelector('.intro button');
    const introScreen = document.querySelector('.intro');
    const match = document.querySelector('.match');

    playBtn.addEventListener('click', ()=>{
        introScreen.classList.add('fadeOut');
        match.classList.add('fadeIn');
    });
};

const playGame = () =>{
    const playerInput = document.querySelector('.option button');
    const playerIcon = document.querySelector('.player-hands');
    const computerIcon = document.querySelector('.computer-hands');
    const changeText = document.querySelector('.winner');
    
    // Computer choices
    const computerOptions = ["rock", "paper", "scissors"];
    const computerChoice = Math.floor(Math.random() *3);
    const computerAnswer = computerOptions[computerChoice];

    //Player Choices
    playerInput.forEach(option => {
        option.addEventListener('click', function (){
            console.log(this);
        });
    });
    

    //console.log(computerAnswer);

    const compareOptions = () => {
        if(computerAnswer===paper || computerAnswer === rock || computerAnswer===scissors){
            changeText.textContent = "It's a tie!";
            
        }
    };

    const updateIcons = () =>{
        computerIcon.src = `../assets/${computerAnswer}.png`;
        playerIcon.src = `../assets/${playerInput}.png`
    };
};








//Call the functions
startGame();
playGame();