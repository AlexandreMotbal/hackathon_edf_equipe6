var targetData = document.getElementById("board");

function generateGrid(){
    targetData.innerHTML="";
    jsonVoiture = localStorage.getItem("voiture");
    jsonBoard = localStorage.getItem("board");
    board = JSON.parse(jsonBoard)
    voiture = JSON.parse(jsonVoiture)
    for(var n = 0; n < board.length; n++){
        targetData.innerHTML +="<div class='cases'>";
        for(var m = 0; m < board[0].length; m++){
            if((m ==voiture[0]) && (n == voiture[1])){
                targetData.innerHTML += "<image class='normal' src='img/voiture.png' width='8.5%''/>"
            }else{
                if(board[n][m] == 0){
                    targetData.innerHTML += "<image class='normal' src='img/route.png' width='8.5%'/>"
                }else if(board[n][m] == 1){
                    targetData.innerHTML += "<image class='normal' src='img/angle_hautdroit.png' width='8.5%'/>"
                }
                else if(board[n][m] == 2){
                    targetData.innerHTML += "<image class='normal' src='img/angle_hautgauche.png' width='8.5%'/>"
                }
                else if(board[n][m] == 3){
                    targetData.innerHTML += "<image class='normal' src='img/angle_basdroit.png' width='8.5%'/>"
                }
                else if(board[n][m] == 4){
                    targetData.innerHTML +="<image class='normal' src='img/angle_hautdroit.png' width='8.5%'/>"
                }
                else if(board[n][m] == 5){
                    targetData.innerHTML += "<image class='normal' src='img/angle_basgauche.png' width='8.5%'/>"
                }
                
            }
            
        }
       
        targetData.innerHTML +="</div>";
    }

}


function move(i){
    jsonVoiture = localStorage.getItem("voiture");
    jsonBoard = localStorage.getItem("board");

    board = JSON.parse(jsonBoard);
    voiture = JSON.parse(jsonVoiture)

    if(voiture[2]<2){
        console.log("NotEnoughBattery");
        //reloading function
    }
    else{
        voiture[2] = voiture[2] - 2

        if (voiture[0] + i >10){
            if(voiture[1]+1<=5){
                voiture[1] = voiture[1] + 1
                voiture[0] = voiture[0]+i%10
                jsonValue = JSON.stringify([voiture[0]%10,voiture[1]])
                localStorage.setItem("voiture",jsonValue)
            }
            else{
                alert("win !!");
            }
        }else{
            voiture[0] = voiture[0] + i
            localStorage.setItem("voiture", JSON.stringify([voiture[0],voiture[1]]))
        }
        if(voiture[0]>10 && voiture[1]>=4){
            alert("win");
        }
        generateGrid(board)
    }
}

function startingCost(board,voiture){
    result = 2;
    if(board[voiture[0]][voiture[1]] == 7){
        result = 4
    }else if(board[voiture[0]][voiture[1]] == 8){
        result = 1
    }
}



function startGame(){
    var board = [
        [1,0,0,0,0,0,0,0,0,0,4],
        [2,0,0,0,0,0,0,0,0,0,3],
        [5,0,0,0,0,0,0,0,0,0,4],
        [2,0,0,0,0,0,0,0,0,0,3],
        [5,0,0,0,0,0,0,0,0,0,4]
    ]
    //0 : route
    //1 : voiture
    //2 : haut gauche
    //3 : bas droit
    //4 : haut droit
    //5 : bas gauche

    //7 Montée
    //8 descentes


    //[x,y,energy]
    var voiture = [0,0,6]
    var jsonBoard = JSON.stringify(board);
    var jsonVoiture = JSON.stringify(voiture);
    localStorage.setItem("voiture", jsonVoiture);
    localStorage.setItem("board", jsonBoard);
    generateGrid();
}


function saveInStorage(data){

}
