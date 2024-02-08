//Let's play! You have to return which player won! In case of a draw return Draw!.

// Examples(Input1, Input2 --> Output):

// "scissors", "paper" --> "Player 1 won!"
// "scissors", "rock" --> "Player 2 won!"
// "paper", "paper" --> "Draw!"


//usei case para esse caso, ficou esse trabolhão
const rps = (p1, p2) => {
    switch (true) {
        case p1 == p2:
            return "Draw!"
            

        case p1 == "scissors": 
            if (p2=="rock") return "Player 2 won!"
            else return 'Player 1 won!';

        case p1 == "rock":
            if (p2 == "paper") return 'Player 2 won!'
            else return "Player 1 won!"

        case p1 == "paper":
            if ( p2 == "scissors") return "Player 2 won!"
            else return "Player 1 won!"
    
        default:
            break;
    }
  };

console.log(rps("paper","paper"));

//pensei somente na metado do codigo que poderia ter usado alguma logica com array para resolver isso


//houve gente que usou propriedades de objetos para resolver e uma logica melhor
const rps2 = (p1, p2) => {
    if (p1 === p2) return "Draw!";
    var rules = {rock: "scissors", paper: "rock", scissors: "paper"}; //as chaves são os vencedores, e o valor os perdedores
    if (p2 === rules[p1]) { //usando a notação de colchetes para acessar a propriedade
      return "Player 1 won!";
    }
    else {
      return "Player 2 won!";
    }
  };