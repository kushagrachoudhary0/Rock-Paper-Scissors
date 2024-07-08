let userscore = 0;
let compscore = 0;

const choices =document.querySelectorAll(".choices");
const msg =document.querySelector("#msg");

const userScorepara =document.querySelector("#user-score");
const compScorepara =document.querySelector("#comp-score");

const gencompChoice = () => {
const options = [ "rock", "paper", " scissor"];
const randIdx = Math.floor(Math.random() * 3);
// console.log("random",randIdx);
return options[randIdx];
};


 const drawGame = () => {
   //  console.log("game was draw. ");
 }



 const showWINNER = (userwin , userChoice, CompChoice) => {
   if(userwin){
      userscore++;
      userScorepara.innerText = userscore;
      msg.innerText = `You Win! Your ${userChoice} beats ${CompChoice} `;
      msg.style.backgroundColor = "green";
   } else {
      compscore++;
      compScorepara.innerText = compscore;
      // console.log("You Loss!");
      msg.innerText = `You Loss.  ${CompChoice} beats Your ${userChoice}`;
      msg.style.backgroundColor = "red";
   }
 };

const playGame = (userChoice) => {
     console.log("user Choice =" , userChoice );
     const CompChoice = gencompChoice();
     console.log("comp Choice =" , CompChoice );

     if(userChoice === CompChoice){
        //draw game
        drawGame();
        msg.innerText = "Game was Draw. Play Again.";
        msg.style.backgroundColor = "#081b31";
     } else{
        let userwin = true;
     if(userChoice === "rock"){
        userwin = CompChoice === "paper" ? false : true;
     }else if (userChoice === "paper"){
        userwin = CompChoice === "scissors" ? false : true;
     }else{
      userwin =  CompChoice === "rock" ? false : true ;
     }
     showWINNER(userwin,userChoice,CompChoice);
    }
};

// choices.forEach((Choice) => {
//         console.log(Choice);
//         choices.addEventListener("click" , () => {
//         const ChoiceID = Choice.getAttribute("id");
//         PlayGame(userChoice);
//     });
// });
choices.forEach((choice) => {
    choice.addEventListener("click", () => {
      const userChoice = choice.getAttribute("id");
      playGame(userChoice);
    });
  });