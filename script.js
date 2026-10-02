console.log("Welcome to Tic Tac Toe Game");
let turn = "X";

//function: change the turn
const changeTurn = () => {
    return turn === "X" ? "0" : "X";
}

//function: check for  win

const checkWin = () => {}

// game logic

let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element =>{
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click', (e)=>{
        if(boxtext.innerText ===''){
            boxtext.innerText = turn;
            turn = changeTurn();
            checkWin();
            document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;

        }
    })
})