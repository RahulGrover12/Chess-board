let board = document.querySelector(".board");

for (let i = 0; i < 8; i++) {
  for (let j = 0; j < 8; j++) {
    let cell = document.createElement("div");
    cell.className = `h-17 w-17 cursor-pointer cells cell${i}${j}`;
    if ((i + j) % 2 == 0) {
      cell.classList.add("bg-gray-300");
    } else {
      cell.classList.add("bg-black");
    }
    board.append(cell);
    cell.addEventListener("click", () => colorDiagonal(i, j));
  }
}

function colorDiagonal(i, j) {
  reset();

  for (let row = 0; row < 8; row++) {
    for (let col = 0; col < 8; col++) {
      let cell = document.querySelector(`.cell${row}${col}`);
      if (i == row && j == col) {
        cell.classList.add("bg-green-400");
      } else if (i - j === row - col || i + j === row + col) {
        cell.classList.add("bg-red-500");
      }
    }
  }
  //   topLeft(i, j);
  //   topRight(i, j);
  //   bottomLeft(i, j);
  //   bottomRight(i, j);
}

function reset() {
  const cells = document.querySelectorAll(".cells");
  cells.forEach((cell) => {
    cell.classList.remove("bg-red-500", "bg-green-400");
  });
}

// function topLeft(i, j) {
//   while (i >= 0 && j >= 0) {
//     let cell = document.querySelector(`.cell${i}${j}`);
//     cell.classList.add("bg-red-500");
//     i--;
//     j--;
//   }
// }

// function topRight(i, j) {
//   while (i >= 0 && j < 8) {
//     let cell = document.querySelector(`.cell${i}${j}`);
//     cell.classList.add("bg-red-500");
//     i--;
//     j++;
//   }
// }

// function bottomLeft(i, j) {
//   while (i < 8 && j >= 0) {
//     let cell = document.querySelector(`.cell${i}${j}`);
//     cell.classList.add("bg-red-500");
//     i++;
//     j--;
//   }
// }

// function bottomRight(i, j) {
//   while (i < 8 && j < 8) {
//     let cell = document.querySelector(`.cell${i}${j}`);
//     cell.classList.add("bg-red-500");
//     i++;
//     j++;
//   }
// }
