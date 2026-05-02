let gameSeq=[];//what us the game sequence 
let userSeq=[];//what is the sequence user followd ?
let color=["red","yellow","green","purple"];
let h2 = document.querySelector("h2");
let max=0;
let started=false;
let level=0;
// we wre applying eventlistner on document itself
document.addEventListener("keydown",function(){
    if(started==false){
        console.log("game started");
        started=true;
        levelup();
    }
    
});
function gameFlash(btn){
    btn.classList.add("flash")
    setTimeout(function (){
        btn.classList.remove("flash")
    },250);

}

function userFlash(btn){
    btn.classList.add("userflash")
    setTimeout(function (){
        btn.classList.remove("userflash")
    },250);
}
function levelup(){
    userSeq=[];// Here we are adding this because every time user need to click from starting sequence so that always the user array should be empty so that he can start from beginning
    level++;
    h2.innerText=`(level ${level})`;
    let randIdx=Math.floor(Math.random()*4);
    let rndColor=color[randIdx];
    let rndBtn=document.querySelector(`.${rndColor}`)
    console.log(rndColor);
    // Actually what happens in the Above step First we take a random number so that random number will be index of the colours which We have initialised there
    // From Random index that will be stored in a random colour So that in html we took like Class red yellow green purple right so List also present same colours This random index Some colour has been came so we gonna access that colour class for example random index has been given index zero where it has a red so we are seeing which element has a class property red colour
    gameSeq.push(rndColor);
    console.log(gameSeq);
    gameFlash(rndBtn);
}

function verifyAns(idx){1
    // console.log("your current level is ", level);
    // let idx=level-1; We comment on this because it's a static index for example you are at Level 3 but the user sequence should be checked from zero1 and two so that we need to use an dynamic index so that we are using every from user sequence length
    if(userSeq[idx]==gameSeq[idx]){
        // console.log("you clicked correct and your level is" ,level);
        if(userSeq.length==gameSeq.length){// This condition is used to check at the middle time for example it gave red yellow green but you have entered just red even though it will be correct if this condition is not here
        // levelup() We need to add a delay because we can't find which calories flashing again so we are adding a set time out function
        setTimeout(levelup,1000);
        }
    }else{;
        h2.innerHTML=`Game over! <b> your score is ${level}</b> <br>press any key to start`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white ";
        },200)
        highScore();
        reset();
    }
}



function btnPress(){
    // console.log(this);// Here this means The button which you have pressed The function name itself button press so that we need to know which button was pressed So that we are using the this keyword to know which button has been pressed 
    let btn=this;
    userFlash(btn);     

    let userColor= btn.getAttribute("id");
    userSeq.push(userColor);
    verifyAns(userSeq.length-1);

}

let allBtns=document.querySelectorAll(".btn")//we need to access all the buttons 
for(btn of allBtns){
    btn.addEventListener("click", btnPress);
}


function reset(){
    started=false;
    level=0;
    gameSeq=[];
    userSeq=[];

}
let h3=document.querySelector("h3")
function highScore(){
    
    if(max<level){
    console.log("higest score");
    max=level;
    h3.innerText=`High score :${level}`;
    
    }
}