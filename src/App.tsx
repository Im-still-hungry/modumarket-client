import React from 'react';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { DndProvider } from 'react-dnd';
import Comp from './lab/Comp';
import styled from 'styled-components';
import { useRecoilValue } from 'recoil';
import { WebData } from './lab/atom';
import { useDrop } from 'react-dnd';
import useDragCol from './lab/useDragCol';

function App() {
  const data = useRecoilValue(WebData);
  return (
    <DndProvider backend={HTML5Backend}>
      <Grid>
        {data.map((comp, index) => (
          <Comp index={index} key={comp.id} id={comp.id}>
            {comp.content}
          </Comp>
        ))}
      </Grid>
    </DndProvider>
  );
}
export default App;

const Grid = styled.div`
  width: 100%;
  display: grid;
  gap: 5px;
`;

const Col = styled.div`
  border: 1px solid black;
`;

const Spacer = styled.div`
  height: 200px;
`;
