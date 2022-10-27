import React from 'react';
import update from 'immutability-helper';
import { useRecoilState } from 'recoil';
import { WebData } from './atom';

const useDragCol = () => {
  const [data, setData] = useRecoilState(WebData);
  const moveItem = (target: number, moveValue: number) => {
    // console.log(target, moveValue);
    setData((cur) =>
      update(cur, {
        $splice: [
          [target, 1],
          [moveValue, 0, cur[target]],
        ],
      }),
    );
  };
  return moveItem;
};

export default useDragCol;
