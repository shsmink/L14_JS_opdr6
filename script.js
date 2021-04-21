// Opdracht 1 - Even Odd Reporter

// for (let i = 1; i <= 20; i++) {
//     if (i % 2 == 0) {
//       console.log(i + " is even");
//     } else {
//       console.log(i + " is oneven");
//     }
//   }


// Opdracht 2 - Multiplication tables

// const multiplier = 9;
// for (let i = 1; i <= 10; i++) {
//   let result = multiplier * i;
//   console.log(i + " * " + multiplier + " = " + result);
// }

// Bonus: bovenstaande met een geneste loop om alle tafels van 1 t/m 10 te printen naar de console
// for (let multiplier = 1; multiplier <= 10; multiplier++) {
//   for (let i = 1; i <= 10; i++) {
//     let result = multiplier * i;
//     console.log(i + " * " + multiplier + " = " + result);
//   }
// }


// Opdracht 3 - The Grade Assigner

function assignGrade(score) {
  if (score > 90) {
    return "A";
  } else if (score > 80) {
    return "B";
  } else if (score > 70) {
    return "C";
  } else if (score > 65) {
    return "D";
  } else {
    return "E";
  }
}

for (let i = 60; i <= 100; i++) {
  console.log("Voor " + i + " punten, krijg je een " + assignGrade(i));
}