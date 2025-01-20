let boxes=document.querySelectorAll(".box");
let resetBtn=document.querySelector(".reset-btn");
let newBtn=document.querySelector(".new_btn");
let msg_container=document.querySelector(".msg");
let p=document.querySelector(".winner_msg");

let turn=true;

const wins=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];
boxes.forEach((box) => {
    box.addEventListener("click",() => {
        
        if(turn){
            box.innerText="O";
            turn=false;
        }else{
            box.innerText="X";
            turn=true;
        }
        box.disabled=true;
        checkWinner();
    })
});

let reset=()=>{
    turn =true;
    ennableBtns();
    msg_container.classList.add("hide"); 
    p.innerText="";
}

let disableBtns=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}
let ennableBtns=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}

let showWinner=(winner)=>{
    disableBtns();
    p.innerText=`Congrats.Winner is ${winner}`;
    msg_container.classList.remove("hide");
}

let checkWinner=()=>{
    for(let pat of wins){
        let p1val=boxes[pat[0]].innerText;
        let p2val=boxes[pat[1]].innerText;
        let p3val=boxes[pat[2]].innerText;

        if(p1val !="" && p2val!="" && p3val!=""){
            if(p1val===p2val && p2val===p3val){
                showWinner(p1val);
            }
        }
    }
    
}
resetBtn.addEventListener("click",reset);
newBtn.addEventListener("click",reset);


