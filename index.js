const express = require('express');
const app = express();
const PORT = 8080;
var Hand = require('./poker/solver').Hand;

app.use(express.json());

app.post('/evaluatePokerHands', (req, res) => {
    const twoHands = req.body;
    let results = [];
    for (twoHand of twoHands) {
        const blackHandCards = Object.values(twoHand)[0];
        const whiteHandCards = Object.values(twoHand)[1];
        var hand1 = Hand.solve(blackHandCards.split(" "));
        hand1.name = Object.keys(twoHand)[0];

        var hand2 = Hand.solve(whiteHandCards.split(" "));
        hand2.name = Object.keys(twoHand)[1];
        
        var winner = Hand.winners([hand1, hand2]);
        
        if(winner.length > 1) {
            results.push('Tie.');
        } else {
            results.push(`${winner[0].name} wins. - with ${winner[0].descr}`);
        }
    }
    res.status(200).send(results);
})

app.listen(
    PORT,
    () => console.log(`it's alive at http://localhost:${PORT}`)
);