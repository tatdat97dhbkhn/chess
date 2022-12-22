import { Chess } from "chess.js";
import Chessboard from "chessboardjs";
import BaseController from "./base_controller";

export default class extends BaseController {
  connect() {
    this.game = new Chess();
    this.whiteSquareGrey = "#a9a9a9";
    this.blackSquareGrey = "#696969";

    this.board = Chessboard("board", {
      draggable: true,
      dropOffBoard: 'snapback',
      position: "start",
      onDragStart: this._onDragStart.bind(this),
      onDrop: this._onDrop.bind(this),
      onMouseoutSquare: this._onMouseoutSquare.bind(this),
      onMouseoverSquare: this._onMouseoverSquare.bind(this),
      onSnapEnd: this._onSnapEnd.bind(this),
      pieceTheme: "assets/pieces/{piece}.png",
    });
  }

  _onDragStart(source, piece) {
    // do not pick up pieces if the game is over
    if (this.gameOver()) {
      return false;
    }

    // or if it's not that side's turn
    if (
      (this.game.turn() === "w" && piece.search(/^b/) !== -1) ||
      (this.game.turn() === "b" && piece.search(/^w/) !== -1)
    ) {
      return false;
    }
  }

  removeGreySquares() {
    $("#board .square-55d63").css("background", "");
  }

  greySquare(square) {
    const $square = $("#board .square-" + square);

    let background = this.whiteSquareGrey;
    if ($square.hasClass("black-3c85d")) {
      background = this.blackSquareGrey;
    }

    $square.css("background", background);
  }

  gameOver() {
    if (this.game.isCheckmate()) {
      alert("Game over, " + this.game.turn() + " is in checkmate.");
      return true;
    }
    if (this.game.isDraw()) {
      alert("Game over, drawn position");
      return true;
    }
  }

  makeRandomMove() {
    const possibleMoves = this.game.moves();

    // game over
    if (possibleMoves.length === 0) return;

    const randomIdx = Math.floor(Math.random() * possibleMoves.length);
    this.game.move(possibleMoves[randomIdx]);
    this.board.position(this.game.fen());
  }

  isPromotion(fen, move) {
    const chess = new Chess(fen);

    const piece = chess.get(move.from);

    if (piece?.type !== "p") {
      return false;
    }

    if (piece.color !== chess.turn()) {
      return false;
    }

    if (!["1", "8"].some((it) => move.to.endsWith(it))) {
      return false;
    }

    return chess
      .moves({ square: move.from, verbose: true })
      .map((it) => it.to)
      .includes(move.to);
  }

  _onDrop(source, target) {
    const currentController = this;
    this.removeGreySquares();
    let move;

    if (this.isPromotion(this.game.fen(), { from: source, to: target })) {
      // see if the move is legal
      move = this.game.move({
        from: source,
        to: target,
        promotion: "q"
      });
    } else {
      // see if the move is legal
      move = this.game.move({
        from: source,
        to: target,
      });
    }

    // illegal move
    if (move === null) return "snapback";

    // make random legal move for black
    setTimeout(() => {
      currentController.makeRandomMove()
    }, 250)
  }

  _onMouseoverSquare(square, piece) {
    // get list of possible moves for this square
    const moves = this.game.moves({
      square: square,
      verbose: true,
    });

    // exit if there are no moves available for this square
    if (moves.length === 0) return;

    // highlight the square they moused over
    this.greySquare(square);

    // highlight the possible squares for this piece
    for (let i = 0; i < moves.length; i++) {
      this.greySquare(moves[i].to);
    }
  }

  _onMouseoutSquare(square, piece) {
    this.removeGreySquares();
  }

  _onSnapEnd() {
    this.board.position(this.game.fen());
  }

  start() {
    this.board.start(true)
    this.game.reset()
  }
}


