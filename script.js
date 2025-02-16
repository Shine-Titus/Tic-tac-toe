const boxes = document.querySelectorAll('button:not(#reset)');
const msg = document.querySelector('span');
const reset = document.getElementById('reset');
let markX = true;
let object = {1:'',2:'',3:'',4:'',5:'',6:'',7:'',8:'',9:''};
let checkAdded = 0;

function addCheck(box) {

    if (msg.innerText == 'X goes first always!') {
        if (markX && box.innerText == '') {
            box.innerText = 'X';
            object[box.value] = 'X';
            markX = false;
        };
        if (!markX && box.innerText == '') {
            box.innerText = 'O';
            object[box.value] = 'O';
            markX = true;
        };
        checkAdded += 1;
    };
};

function checkGameStatus() {

    if ((object[1] == object[3] && object[2] == object[3]) && object[1] != '')  {
        msg.innerText = `${object[1]} won !!!`;
        return;
    }
    if ((object[4] == object[6] && object[5] == object[6]) && object[4] != '') {
        msg.innerText = `${object[4]} won !!!`;
        return;
    }
    if ((object[7] == object[9] && object[8] == object[9]) && object[7] != '') {
        msg.innerText = `${object[7]} won !!!`;
        return;
    }

    if ((object[1] == object[4] && object[4] == object[7]) && object[1] != '') {
        msg.innerText = `${object[1]} won !!!`;
        return;
    }
    if ((object[2] == object[5] && object[5] == object[8]) && object[2] != '') {
        msg.innerText = `${object[2]} won !!!`;
        return;
    }
    if ((object[3] == object[6] && object[6] == object[9]) && object [3] != '') {
        msg.innerText = `${object[3]} won !!!`;
        return;
    }

    if ((object[1] == object[5] && object[5] == object[9]) && object[1] != '') {
        msg.innerText = `${object[1]} won !!!`;
        return;
    }
    if ((object[3] == object[5] && object[5] == object[7])&& object[3] != '') {
        msg.innerText = `${object[3]} won !!!`;
        return;
    }
}

function gameReset() {
    if (msg.innerText != 'X goes first always!') {
        object = {1:'',2:'',3:'',4:'',5:'',6:'',7:'',8:'',9:''};
        msg.innerText = 'X goes first always!';
        boxes.forEach(box => {
        box.innerText = '';
        });
    } else {
        alert('complete the game to reset.');
    };
};



boxes.forEach(box => {

    box.addEventListener('click', () => {
        
        addCheck(box);
        checkGameStatus();

        if (checkAdded == 9) {
            msg.innerText = 'Its a tie!';
        }

    });

});

reset.addEventListener('click', gameReset);