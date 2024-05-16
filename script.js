

let tbutton = document.querySelectorAll(".tbutton");
let button = document.querySelectorAll(".button");
let player;
let message = document.querySelector(".message");
let h2 = document.querySelector(".h2");
let last2 = document.querySelector(".last2");
let newbtn = document.querySelector(".newbtn");
let reset = document.querySelector(".reset");
let sign;
let main = document.querySelector(".main");
let last = document.querySelector(".last");
const winningpattern = [
  [0,1,2],
  [3,4,5],
  [6,7,8],
  [0,3,6],
  [1,4,7],
  [2,5,8],
  [0,4,8],
  [2,4,6],
];
const show =() => {
  button.forEach((btn) => {
    btn.classList.remove("hide");
  });
}
const tbtnhidedisable = () => {
  for(tbtn of tbutton){
    tbtn.disabled = true;
    tbtn.classList.add("hide");
    h2.innerText = `First turn ${sign}`;
    main.classList.remove("hide");
    last.classList.remove("hide");
  }
  show();
}
const btndisable = () => {
    for(btn of button){
        btn.disabled = true;
    }
}
const turn = () => {
  tbutton.forEach((tbtn) => {
    tbtn.addEventListener("click", () => {
       if(tbtn.innerText == "X"){
         player = "one";
         sign = tbtn.innerText;
        }
       else{
         player = "two";
         console.log(tbtn.innerText);
         sign = tbtn.innerText;
        }
       tbtnhidedisable();
    });
  });
}
const game = () => {
button.forEach((btn) => {
  btn.addEventListener("click", () => {
  if(player =="one"){
    btn.innerText ="X";
    player ="two";
    btn.style.color = "rgb(151, 255, 220)";
    btn.style.backgroundColor = "rgba(205, 255, 255, 0.135)";
  }
  else{
    btn.innerText ="O";
    player ="one";
    btn.style.color = "rgb(255, 190, 255)";
    btn.style.backgroundColor = "rgba(255, 210, 255, 0.219)";
  }
  btn.disabled =true;
  check();
 });
});
};
const newgamee = () => {
  button.forEach((btn) => {
    btn.classList.add("hide");
  });
  last2.classList.add("hide");
  message.classList.add("hide");
  h2.classList.remove("hide");
  for(tbtn of tbutton){
    tbtn.classList.remove("hide");
    tbtn.disabled = false;
  }
  turn();
  for(btn of button){
    btn.disabled = false;
    btn.innerText = "";
    btn.style.backgroundColor = "rgba(128, 128, 128, 0.533)";
  }
  h2.innerText = "Choose your turn";
};
const resetgame = () => {
  last.classList.add("hide");
  newgamee();
};
const check = () => {
   for(let pattern of winningpattern){
    let val1 = button[pattern[0]].innerText;
    let val2 = button[pattern[1]].innerText;
    let val3 = button[pattern[2]].innerText;

    if(val1 != "" && val2 != "" && val3 != ""){
      if(val1 == val2 && val2 ==val3){
        if(val1 == "X"){
           message.classList.remove("hide");
           h2.classList.add("hide");
           message.innerText = "Winner is X"
        }
        else{
          message.classList.remove("hide");
          h2.classList.add("hide");
          message.innerText = "Winner is O"
        }
        btndisable();
        last.classList.add("hide");
        last2.classList.remove("hide");
      }
    }
   }
};
newbtn.addEventListener("click", newgamee);
reset.addEventListener("click", resetgame);
turn();
game();