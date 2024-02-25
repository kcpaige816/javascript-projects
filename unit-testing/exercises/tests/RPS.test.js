const whoWon = require('../RPS.js');

describe("whoWon",function(){

    test("returns 'TIE! when both players choose the same option",function(){
        let output = whoWon('paper','paper');
        expect(output).toEqual('TIE!');
    });

    test("returns 'Player 2 wins!' if P1 = scissors & P2 = rock",function(){
        let output = whoWon('scissors','rock');
        expect(output).toEqual("Player 2 wins!");
    });

    test("returns 'Player 2 wins!' if P1 = rock & P2 = paper", function(){
        let output = whoWon('rock','paper');
        expect(output).toBe("Player 2 wins!");
     });
     
     test("returns 'Player 2 wins!' if P1 = paper & P2 = scissors", function(){
        let output = whoWon('paper','scissors');
        expect(output).toBe("Player 2 wins!");
     });
});
