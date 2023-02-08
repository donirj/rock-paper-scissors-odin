// //all buttons  with class options are selected with querySelectorAll
// const options = document.querySelectorAll(".options")
// //score variables that will update the score
// let pScore = 0
// let cScore = 0

// //constante options, forEach de cada boton,
// //funcion con parametro option que es cada elemento
// //detecta click y la funcion retorna click de console
// options.forEach((option) => {
//     option.addEventListener("click", function () {

//     //constante de la opcion en la que hará click el usuario
//     const pInput = this.textContent;

//     //array with options
//     const cOptions = ["Rock", "Paper", "Scissors"];
//     //function generates random option from array
//     const cInput = cOptions[Math.floor(Math.random() * 3)]

//         compareInputs(pInput, cInput)
//         //updateScore function will update the span elements
//         updateScore()
//         //set scores to 0
//         if(checkWinner()) {
//             pScore = cScore = 0
//             updateScore()
//         }
//     });
// });

// //function to compare them and find who wins
// function compareInputs(pInput, cInput) {
//     //constante con las respuestas random vs respuesta del usuario
//         const currentMatch = `${pInput} vs ${cInput}`
//     //tie check
//     //if random value and player option are equal
//     if(pInput === cInput) {
//         //show alert of tie
//         alert(`${currentMatch} is a tie`)
//         return;
//     }

//     //rock
//     //if input equals rock
//     if(pInput === "Rock"){
//         if(cInput === "Scissors"){
//             //rock wins vs scissors
//             alert(`${currentMatch} = you win`)
//             pScore++;
//         } else {
//             alert(`${currentMatch} = computer wins`)
//             cScore++;

//         }
//     }
//     //paper
//     //if player chooses paper
//     else if(pInput === "Paper"){
//         //paper beats rock
//         if(cInput === "Rock") {
//             alert(`${currentMatch} = you win`)
//             pScore++;
//         } else {
//             alert(`${currentMatch} = computer wins`)
//             cScore++
//         }
//     }
//     //scissors
//     else {
//         if (cInput === "Paper"){
//             alert(`${currentMatch} = you win`)
//             pScore++;
//         } else {
//             alert(`${currentMatch} = computer win`)
//             cScore++
//         }
//     }
// }

// //function to update score
// function updateScore() {
//     document.getElementById("p-Score").textContent = pScore;
//     document.getElementById("c-Score").textContent = cScore;
// }


// //function to check 5 wins
// function checkWinner() {
//     if (pScore === 5 || cScore === 5) {
//       const winner =
//         pScore === 5
//           ? "You win the game! Congratulations!"
//           : "Computer wins the game! Try again next time!";
//       alert(winner);
//       return true;
//     }
//     return false;
// }
// console.log('checkWinner', checkWinner)
// //