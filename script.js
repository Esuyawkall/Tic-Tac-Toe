document.addEventListener('DOMContentLoaded', () => {

    const buttons = document.querySelectorAll('.cell');
    const status = document.getElementById('status');
    const restart = document.getElementById('restart');
    
    const winning_combo = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 4, 8],
        [2, 4, 6],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8]
    ];

    let player = false;
    let  player_X = [];
    let player_Y = [];


    buttons.forEach(button => { button.addEventListener('click',() =>{
        const allDisabled = Array.from(buttons).every(button => button.disabled);
       if(player==false) {
        button.innerHTML="X";
        button.disabled=true;
        player = !player;
        const num = parseInt(button.getAttribute('data-index'));
        player_X.push(num);
        status.innerHTML="Player Y's turn";
        for(x=0;x<8;x++){
            let isSubset = winning_combo[x].every(elem => player_X.includes(elem));
            if(isSubset){
                status.innerHTML="Player X wins";
                endGame();
            }
            else if(allDisabled){
                status.innerHTML="Draw";
                endGame();
            }
        }
       }
        else{
            button.innerHTML="O";
            button.disabled=true;
            player = !player;
            const num = parseInt(button.getAttribute('data-index'));
            player_Y.push(num);
            status.innerHTML="Player X's turn";
            for(x=0;x<8;x++){
                let isSubset = winning_combo[x].every(elem => player_Y.includes(elem));
                if(isSubset){
                    status.innerHTML="Player Y wins";
                    endGame();
                }
                else if(allDisabled){
                    status.innerHTML="Draw";
                    endGame();
            }
       }
    }
    
    });   
    });
    restart.addEventListener('click',()=>{
        startGame();
    })
    function endGame(){
        const butt = document.querySelectorAll(".tic-tac-toe button");
        butt.forEach(button => {
            button.disabled = true;
        });    }
    function startGame(){
        const butt = document.querySelectorAll(".tic-tac-toe button");
        butt.forEach(button => {
            button.disabled = false;
        });
        player_X = [];
        player_Y = [];
        for(x=0;x<9;x++){
        buttons[x].innerHTML = '';}
        status.innerHTML="Player X's turn";
    }
});