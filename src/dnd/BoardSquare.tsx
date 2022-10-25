import React, { ReactNode } from 'react';
import Square from './Square';
import { useDrop } from 'react-dnd';
import useGame from './useGame';

export const ItemTypes = {
  KNIGHT: 'knight',
};

const BoardSquare = ({
  position,
  children,
}: {
  position: { x: number; y: number };
  children: ReactNode;
}) => {
  const moveKnight = useGame();
  const black = (position.x + position.y) % 2 === 1;
  const [{ isOver }, drop] = useDrop(
    () => ({
      accept: ItemTypes.KNIGHT,
      drop: () => moveKnight(position),
      collect: (monitor) => ({
        isOver: !!monitor.isOver(),
      }),
    }),
    [position],
  );
  return (
    <div
      ref={drop}
      style={{ position: 'relative', width: '100%', height: '100%' }}
    >
      <Square black={black}>{children}</Square>;
      {isOver && (
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            height: '100%',
            width: '100%',
            zIndex: 1,
            opacity: 0.5,
            backgroundColor: 'yellow',
          }}
        />
      )}
    </div>
  );
};

export default BoardSquare;
