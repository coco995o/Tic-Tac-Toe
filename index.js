const game=(()=>{
    const player=(name, mark)=>{
        return {name, mark};
    }
    const player1=player("Player 1", "X");
    const player2=player("Player 2", "O");

    let gameboard=[];
    const item=document.querySelectorAll(".grid-item");
    const display=document.querySelector(".display");

    let moves=0;
    let endGame=false;

    const marking=()=>{
        item.forEach(element => {
            element.addEventListener("click", ()=>{
                if(endGame===false){
                    const gridId=element.getAttribute("id");
                    while(element.textContent==""){
                        console.log(gridId);
                        if(moves==0){
                            gameboard.splice(gridId, 0, "X");
                            item[gridId].textContent=player1.mark;
                        }
                        else if(moves==1){
                            gameboard.splice(gridId, 0, "O");
                            item[gridId].textContent=player2.mark;
        
                        }
                        else if(moves==2){
        
                            gameboard.splice(gridId, 0, "X");
                            item[gridId].textContent=player1.mark;
        
                        }
                        else if(moves==3){
                            gameboard.splice(gridId, 0, "O");
                            item[gridId].textContent=player2.mark;
        
                        }
                        else if(moves==4){
                            gameboard.splice(gridId, 0, "X");
                            item[gridId].textContent=player1.mark;
    
        
                        }
                        else if(moves==5){
                            gameboard.splice(gridId, 0, "O");
                            item[gridId].textContent=player2.mark;
                            
                        }
                        else if(moves==6){
                            gameboard.splice(gridId, 0, "X");
                            item[gridId].textContent=player1.mark;
        
                        }
                        else if(moves==7){
                            gameboard.splice(gridId, 0, "O");
                            item[gridId].textContent=player2.mark;
        
                        }
                        else if(moves==8 && endGame==false){
                            gameboard.splice(gridId, 0, "X");
                            item[gridId].textContent=player1.mark;
                            display.textContent="Its a tie";
                        }
                        console.log(gameboard);
                        moves++;
                        checkWinner();
                    }
                }else{
                    return;
                }  
            });
        });        
    }
    
    
    const checkWinner=()=>{
        if(item[0].textContent==player1.mark && item[1].textContent==player1.mark && item[2].textContent==player1.mark){
            display.innerHTML="Player 1 Wins";

            endGame=true;
        }
        else if(item[0].textContent==player2.mark && item[1].textContent==player2.mark && item[2].textContent==player2.mark){
            display.innerHTML="Player 2 Wins";
            endGame=true;
        }
        else if(item[0].textContent==player1.mark && item[3].textContent==player1.mark && item[6].textContent==player1.mark){
            display.innerHTML="Player 1 Wins";
            endGame=true;
        }
        else if(item[0].textContent==player2.mark && item[3].textContent==player2.mark && item[6].textContent==player2.mark){
            display.innerHTML="Player 2 Wins";
            endGame=true;
        }
        else if(item[2].textContent==player1.mark && item[5].textContent==player1.mark && item[8].textContent==player1.mark){
            display.innerHTML="Player 1 Wins";
            endGame=true;
        }
        else if(item[2].textContent==player2.mark && item[5].textContent==player2.mark && item[8].textContent==player2.mark){
            display.innerHTML="Player 2 Wins";
            endGame=true;
        }
        else if(item[0].textContent==player1.mark && item[4].textContent==player1.mark && item[8].textContent==player1.mark){
            display.innerHTML="Player 1 Wins";
            endGame=true;
        }
        else if(item[0].textContent==player2.mark && item[4].textContent==player2.mark && item[8].textContent==player2.mark){
            display.innerHTML="Player 2 Wins";
            endGame=true;
        }
        else if(item[6].textContent==player1.mark && item[7].textContent==player1.mark && item[8].textContent==player1.mark){
            display.innerHTML="Player 1 Wins";
            endGame=true;
        }
        else if(item[6].textContent==player2.mark && item[7].textContent==player2.mark && item[8].textContent==player2.mark){
            display.innerHTML="Player 2 Wins";
            endGame=true;
        }
        else if(item[3].textContent==player1.mark && item[4].textContent==player1.mark && item[5].textContent==player1.mark){
            display.innerHTML="Player 1 Wins";
            endGame=true;
        }
        else if(item[3].textContent==player2.mark && item[4].textContent==player2.mark && item[5].textContent==player2.mark){
            display.innerHTML="Player 2 Wins";
            endGame=true;
        }
        else if(item[1].textContent==player1.mark && item[4].textContent==player1.mark && item[7].textContent==player1.mark){
            display.innerHTML="Player 1 Wins";
            endGame=true;
        }
        else if(item[1].textContent==player2.mark && item[4].textContent==player2.mark && item[7].textContent==player2.mark){
            display.innerHTML="Player 2 Wins";
            endGame=true;
        }
        else if(item[2].textContent==player1.mark && item[4].textContent==player1.mark && item[6].textContent==player1.mark){
            display.innerHTML="Player 1 Wins";
            endGame=true;
        }
        else if(item[2].textContent==player2.mark && item[4].textContent==player2.mark && item[6].textContent==player2.mark){
            display.innerHTML="Player 2 Wins";
            endGame=true;
        }
        
    }

    const restartButton=document.querySelector(".restart");
    restartButton.addEventListener("click", ()=>{
        item.forEach(element => {
            element.textContent="";
            
        });
        moves=0;
        endGame=false;
        gameboard=[];
        display.textContent="";
    });
    
    
    return {marking};
})();
game.marking();

