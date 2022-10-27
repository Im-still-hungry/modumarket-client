import React from 'react';
import BoardSquare from './BoardSquare';
import Knight from './Knight';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { useRecoilState, useRecoilValue } from 'recoil';
import { KnightPositionState } from './atom';

const RenderSquare = ({
  i,
  position,
}: {
  i: number;
  position: { x: number; y: number };
}) => {
  const x = i % 8;
  const y = Math.floor(i / 8);
  const isKnightHere = x === position.x && y === position.y;
  const piece = isKnightHere ? <Knight /> : null;
  return (
    <div key={i} style={{ width: '12.5%', height: '12.5%' }}>
      <BoardSquare position={{ x, y }}>{piece}</BoardSquare>
    </div>
  );
};

const Board = () => {
  const position = useRecoilValue(KnightPositionState);

  const squares = [];
  for (let i = 0; i < 64; i++) {
    squares.push(RenderSquare({ i, position }));
  }
  return (
    <DndProvider backend={HTML5Backend}>
      <div
        style={{
          width: '100%',
          height: '100vh',
          display: 'flex',
          flexWrap: 'wrap',
        }}
      >
        {squares}
      </div>
    </DndProvider>
  );
};

export default Board;
