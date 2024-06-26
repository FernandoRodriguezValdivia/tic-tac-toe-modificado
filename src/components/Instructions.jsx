export const Instructions = ({ children }) => {
  return (
    <div className="instructions">
      <p>Similar al clásico juego Tic Tac Toe con una modificación.</p>
      <p>
        Después de que un jugador haya realizado tres movimientos, su primer movimiento se
        elimina automáticamente.
      </p>
      <p>
        El juego continúa hasta que un jugador consigue tres de sus marcas en línea
        (horizontal, vertical o diagonal).
      </p>
      <div>{children}</div>
    </div>
  );
};
