
test = [null, 1];

test = [null, null];

test = [1, 1];


//test.every(cell => cell !== null);   ---code works as expected


// --code works as expected.  Have to loop through
test.every(function(val){            
    return val !== null;
});

//had to loop through row arrays


    // let newArr = board.every(function(val){
    //   return val !== null;
    // });

const WIDTH = 7;
const HEIGHT = 6;

board = [];

function makeBoard() {
    for (let y=0; y<HEIGHT; y++){
        board.push(Array.from({length: WIDTH}));
    }
}