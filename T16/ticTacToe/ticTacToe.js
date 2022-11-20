// Define arrays
const rowWin = [
    ["O", "O", "O"],
    ["", "", ""],
    ["", "", ""]
]

const colWin = [
    ["", "X", ""],
    ["", "X", ""],
    ["", "X", ""]
]

const diagonalWin = [
    ["", "", "O"],
    ["", "O", ""],
    ["O", "", ""]
]

const diagonalWinInverse = [
    ["X", "", ""],
    ["", "X", ""],
    ["", "", "X"]
]

// evaluatePlay function.
// Within this function, write the code to evaluate weather a winning play has been made or not
// Your program must be able to evaluate all the grids defined above.
// The function should inform the user of which sign has  won and which sign has lost
// You may add additional parameters to assist you
function evaluatePlay(grid){

    // Creating varaible to hold winner
    let winner;

    // forLoop for each case to check every row/column to match scenario

    // CASE 1: Row win
    for(let i=0; i < grid.length; i++) {
        let row = grid[i];
        if(row[0] === row[1] && row[0] === row[2]){
            winner = row[0];
            break;
        } else {
            continue;
        }
    }
    

    

    
    // if statement within loops
    // add winner
    

    // ------------------------------- Have -------------------------------------------

    // ------------------------------- Fun  -------------------------------------------
}
