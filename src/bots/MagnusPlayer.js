const ChessUtils = require("../utils/ChessUtils");

class MagnusPlayer {

  getNextMove(moves) {
    const chess = new ChessUtils();
    chess.applyMoves(moves);
    const legalMoves = chess.legalMoves();
    if(moves.length > 2) {
      return {resign: true}
    }
    return {move: chess.pickRandomMove(legalMoves) /*'g8f6'*/ };
      
  }

  getReply(chat) {
    return "hi";
  }

}

module.exports = MagnusPlayer;
