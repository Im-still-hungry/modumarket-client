import React, { useState } from 'react';
import CreateTextComp from './CreateTextComp';
import CreateImageComp from './CreateImageComp';

const SelectTag = () => {
  const [tag, setTag] = useState('default');
  const [select, setSelect] = useState(true);

  const cancelTagHandler = async (e: any) => {
    e.preventDefault();
    setSelect(true);
    setTag('default');
  };

  const textTagHandler = async (e: any) => {
    e.preventDefault();
    setTag('text');
    setSelect(false);
    console.log('text');
  };

  const imageTagHandler = async (e: any) => {
    e.preventDefault();
    setTag('image');
    setSelect(false);
    console.log('image');
  };

  return (
    <div style={{
      display:'grid',
      justifyContent: 'center',
    }}
    >
      <div
        style={{
          backgroundColor: 'yellowgreen',
          // height: '300px',
          // width: '300px',
        }}
      >
        <div>Create</div>
        {select ? (
          <>
            <button onClick={textTagHandler}>+ CREATE Text</button>
            <button onClick={imageTagHandler}>+ CREATE Image</button>
          </>
        ) : (
          <>
            <button onClick={cancelTagHandler}>취소</button>
          </>
        )}
        {tag == 'text' ? <CreateTextComp /> : tag == 'image' ? <CreateImageComp /> : <></>}
      </div>
    </div >
  );
};
export default SelectTag;
