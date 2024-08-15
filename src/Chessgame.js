import React, { useState } from 'react';
import Chessboard from 'chessboardjsx';
import { Chess } from 'chess.js';

const ChessGame = () => {
  const [game] = useState(new Chess());
  const [fen, setFen] = useState(game.fen());
  const [errorMessage, setErrorMessage] = useState('');

  const handleMove = ({ sourceSquare, targetSquare }) => {
    // Reset error message on each move attempt
    setErrorMessage('');

    const move = {
      from: sourceSquare,
      to: targetSquare,
      promotion: 'q', // Automatically promote to a queen if a pawn reaches the last rank
    };

    try {
      const moveResult = game.move(move);

      if (moveResult) {
        setFen(game.fen());
      } else {
        setErrorMessage(`Invalid move from ${sourceSquare} to ${targetSquare}.`);
      }
    } catch (error) {
      // Handle any unexpected errors silently
      setErrorMessage('Invalid move.');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="relative">
        {errorMessage && (
          <div className="absolute -top-10 w-full text-center p-2 bg-red-500 text-white rounded">
            {errorMessage}
          </div>
        )}
        <Chessboard
          width={500}
          position={fen}
          onDrop={({ sourceSquare, targetSquare }) => handleMove({ sourceSquare, targetSquare })}
          boardStyle={{
            borderRadius: '5px',
            boxShadow: `0 5px 15px rgba(0, 0, 0, 0.5)`,
          }}
        />
      </div>
    </div>
  );
};

export default ChessGame;