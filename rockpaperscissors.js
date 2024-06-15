const hands = ['rock', 'paper', 'scissors'];
function getHand() {
    return hands[parseInt(Math.random() * 10) % 3]; // math.random will give you number between 0 - 1 :: multiply by 10 to get a number between 0 - 10 :: the remain 3 to get 0, 1 or 2
}

const player1 = {
        name: "John",
        getHand: getHand
    };
const player2 ={
        name: "Jane",
        getHand: getHand
    };
const player3 ={
    name: "Mary",
    getHand: getHand
};
const player4 ={
    name: "Tom",
    getHand: getHand
};

function playRound(player1, player2) {
    const hand1 = player1.getHand();
    const hand2 = player2.getHand();

    console.log(`${player1.name} plays ${hand1}`);
    console.log(`${player2.name} plays ${hand2}`);

    if (hand1 === hand2) {
        console.log(`Both players played ${hand1}. It's a tie!`);
        return null;
    }

    if (
        (hand1 === 'rock' && hand2 === 'scissors') ||
        (hand1 === 'scissors' && hand2 === 'paper') ||
        (hand1 === 'paper' && hand2 === 'rock')
    ){
        console.log(`${player1.name} wins!`);
        return player1;
    } else {
        console.log(`${player2.name} wins!`);
        return player2;
     }
}

function playerGame(player1, player2, playuntil) {
    let player1Wins = 0;
    let player2Wins = 0;

    while (player1Wins < playuntil && player2Wins < playuntil) {
        const winner = playRound(player1, player2);
        
        if (winner === player1) {
            player1Wins++;
        } else if (winner === player2) {
            player2Wins++;
        }

        console.log(`Score - ${player1.name}: ${player1Wins} - ${player2.name} : ${player2Wins}`);
    }

    return player1Wins === playuntil ? player1 : player2
}

function playTournament(players, playuntil) {
    const [player1, player2, player3, player4] = players;

    const winner1 = playerGame(player1, player2, playuntil);
    const winner2 = playerGame(player3, player4, playuntil);

    const tournamentWinner = playerGame(winner1, winner2, playuntil);

    console.log(`${tournamentWinner.name} wins the tournament champion!`);
}

console.log("Playing a tournament with 4 players...");
playTournament([player1, player2, player3, player4], 3);