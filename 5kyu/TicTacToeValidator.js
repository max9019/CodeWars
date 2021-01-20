let game = [['x', 'o', 'x'],
    ['o', undefined, 'x'],
    ['o', undefined, 'x']]

function ticTacToeValidator(game) {
    let statusChecker = 0;
    let winnerChecker = new Array(7).fill([]);

    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            winnerChecker[i] += game[i][j]
            if (j > 0 && j < 3) winnerChecker[j + 2] +=  game[i][j-1]
            if (i === 2) winnerChecker[i + 3] += game[j][i]
            if ((i === 1 && j === 1) || Math.abs(i-j) === 2) winnerChecker[7] += game[i][j]
            if (i === j) winnerChecker[6] +=  game[i][j]
            if (game[i][j] === undefined) statusChecker++;
        }
    }
    return winnerChecker.includes('xxx') ? 'Winner player X' :
        winnerChecker.includes('ooo') ? 'Winner player O' :
            statusChecker > 1 ? 'Keep playing!' :
                statusChecker <= 1 ? 'Game over!' : 0
}

console.log(ticTacToeValidator(game));