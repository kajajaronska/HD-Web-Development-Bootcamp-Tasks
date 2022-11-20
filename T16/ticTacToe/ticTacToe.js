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
    // Creating varaible to hold winner and the loser
    let winner, loser;

    // forLoop for each case to check every row/column to match one of the scenarios

    // CASE 1: Row win
    for(let i = 0; i < 3; i++) {
        let row = grid[i];

        // If statement checking if all elements in the row are the same and not empty
        if(row[0] === row[1] && row[0] === row[2] && row[0]){
            winner = row[0];
            break;
        } else {
            continue;
        };
    };

   // CASE 2: Column win 
    for(let i = 0; i < 3; i++){

        // If statement checking if column elements match and are not empty
        if(grid[0][i] === grid[1][i] && grid[0][i] === grid[2][i] && grid[0][i]){
            winner = grid[0][i];
            break;
        } else {
            continue;
        };
    };

    // CASE 3: Diagonal win



    

    

    
    // if statement within loops
    // add winner

    // If statements to determine the loser
    if (winner === "X") loser = "O";
    if (winner === "O") loser = "X";
    
    // Variable holding output of the game
    let output = `${winner} Won \n${loser} Lost`;

    console.log(output)

    return output;


    // ------------------------------- Have -------------------------------------------

    // ------------------------------- Fun  -------------------------------------------
}


evaluatePlay(colWin);
