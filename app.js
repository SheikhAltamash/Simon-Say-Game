let gameseq = [];
let userseq = [];
let level = 0;
let color = ["btn1", "btn2", "btn3", "btn4"];
let start = false;
let h2 = document.querySelector("h2");
let p = document.querySelector("#p");

let button=document.querySelector("button");
button.addEventListener("click", function () {
    if (start == false)
    {
      console.log("Started");
      button.innerText = "Started";
      p.style.display="none";
      button.classList.add("started");
        start = true;
            levelup();
    }
     
    else {

      button.classList.remove("started");
      button.innerText = "Start";
      // reset();
    }

});


function levelup() {
  userseq=[];
  level++;
  h2.innerText = "Level " + level;

  let randinx = Math.floor(Math.random() * 4);
  let randcolor = color[randinx];
  let btn = document.querySelector(`.${randcolor}`);

  gameseq.push(randcolor);
  console.log(gameseq);
  flash(btn);
setTimeout(() => {
   userClick(btn);

}, 1000);
}

//h2.style.color = "white";

function flash(btn) {
    btn.classList.add("flash");
    setTimeout(() => { btn.classList.remove("flash") }, 100);
}



//selecting all buttons

let btn = document.querySelectorAll(".btn");
function userClick() {
    for ( let btns of btn) {
      btns.addEventListener("click",btnpress);
    }
}



function btnpress() {
  let btn = this;
  userflash(btn);
  let id = btn.getAttribute("id");
  userseq.push(id);

  checkans(userseq.length-1);
}


function userflash(bt) {
  bt.classList.add("userflash");
  setTimeout(() => {
    bt.classList.remove("userflash");
  }, 100);
}



function checkans(index) {
 
  
  if (userseq[index] === gameseq[index]) {
    if (userseq.length === gameseq.length) {
      setTimeout(levelup, 1000);
    }
  }
  else {
    h2.innerHTML = `Game Over!<br> Your Score was <b>${level}</b> <br> Press Start `;
    reset();
    }
    
};




function reset() {
  start = false;
 
  userseq = [];
  gameseq = [];
  level = 0;
 
  p.style.display = "block";
  button.classList.remove("started");
  button.innerText = "Start";
}

