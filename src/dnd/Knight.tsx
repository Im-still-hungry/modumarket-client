import React from 'react';
import { useDrag } from 'react-dnd';

export const ItemTypes = {
  KNIGHT: 'knight',
};

const Knight = () => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: ItemTypes.KNIGHT,
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));
  return (
    <div
      ref={drag}
      style={{
        opacity: isDragging ? 0.5 : 1,
        fontSize: 100,
        fontWeight: 'bold',
        cursor: 'move',
      }}
    >
      ♘
    </div>
  );
};

export default Knight;
