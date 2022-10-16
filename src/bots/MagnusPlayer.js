const ChessUtils = require("../utils/ChessUtils");

class MagnusPlayer {

  getNextMove(moves) {
    const chess = new ChessUtils();
    const legalMoves = chess.legalMoves();
    if(moves.length > 2) {
      return {resign: true}
    }
    return {move: chess.pickRandomMove(legalMoves)};
      
  }

  getReply(chat) {
    return "hi";
  }

}

module.exports = MagnusPlayer;
