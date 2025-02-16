const boxes = document.querySelectorAll('button:not(#reset)');
const msg = document.querySelector('span');
const reset = document.getElementById('reset');
let markX = true;
let board = Array(9).fill('');

const winPatterns = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
    [0, 4, 8], [2, 4, 6]             // Diagonals
];

function addCheck(box, index) {
    if (box.innerText || msg.innerText.includes("won") || msg.innerText === "It's a tie!") return;

    board[index] = markX ? 'X' : 'O';
    box.innerText = board[index];
    markX = !markX;

    checkGameStatus();
}

function checkGameStatus() {
    for (const pattern of winPatterns) {
        const [a, b, c] = pattern;
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
            msg.innerText = `${board[a]} won !!!`;
            return;
        }
    }

    if (board.every(cell => cell)) {
        msg.innerText = "It's a tie!";
    }
}

function gameReset() {
    board.fill('');
    markX = true;
    msg.innerText = 'X goes first always!';
    boxes.forEach(box => box.innerText = '');
}

boxes.forEach((box, index) => box.addEventListener('click', () => addCheck(box, index)));
reset.addEventListener('click', gameReset);
