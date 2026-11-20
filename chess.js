const board = document.getElementById("board");

const pieces = {
  r: "♜", n: "♞", b: "♝", q: "♛",
  k: "♚", p: "♟",
  R: "♖", N: "♘", B: "♗", Q: "♕",
  K: "♔", P: "♙"
};

const initialPosition = [
  "rnbqkbnr",
  "pppppppp",
  "........",
  "........",
  "........",
  "........",
  "PPPPPPPP",
  "RNBQKBNR"
];

function drawBoard() {
  if (!board) {
    console.error("Không tìm thấy phần tử #board trong index.html");
    return;
  }

  board.innerHTML = "";

  initialPosition.forEach((rank, row) => {
    [...rank].forEach((piece, col) => {
      const square = document.createElement("div");
      square.className = `square ${(row + col) % 2 ? "dark" : "light"}`;
      square.textContent = pieces[piece] || "";
      board.appendChild(square);
    });
  });
}

drawBoard();
