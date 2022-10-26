import React from 'react';
import logo from './logo.svg';
import './App.css';
// import CreateBox from './components/CreateTag';
import TagMain from './components/TagMain';
// import SelectTag from './components/SelectTag';

function App() {
  return (
    <div className="App">
      <div
        style={{
          backgroundColor: 'skyblue',
          height: '844px',
          width: '390px',
        }}
      > 
        <div>Area</div>
        <TagMain />
      </div>
    </div>
  );
}

export default App;
