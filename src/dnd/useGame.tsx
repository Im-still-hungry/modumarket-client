import React from 'react';
import { useRecoilState } from 'recoil';
import { KnightPositionState } from './atom';

const useGame = () => {
  const [position, setPosition] = useRecoilState(KnightPositionState);
  const canMoveKnight = (p: { x: number; y: number }) => {
    const dx = p.x - position.x;
    const dy = p.y - position.y;
    return (
      (Math.abs(dx) === 2 && Math.abs(dy) === 1) ||
      (Math.abs(dx) === 1 && Math.abs(dy) === 2)
    );
  };
  const moveKnight = (p: { x: number; y: number }) => {
    if (canMoveKnight(p)) setPosition(p);
  };
  return moveKnight;
};

export default useGame;
