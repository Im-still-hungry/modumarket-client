import React, { useState } from 'react';

const CreateTextComp = () => {
  console.log('CreateTextComp');
  const [text, setText] = useState('');
  const handleChange = (e: any) => {
    setText(e.currentTarget.value);
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    // try {
    //   const res = await Api.post('text', {
    //     text,
    //   });
    //   console.log(res);
    // } catch (err) {
    //   console.log('실패하였습니다.\n', err);
    // }
  };

  return (
    <div
      style={{
        display: 'grid',
        justifyContent: 'center',
        height: '300px',
        width: '300px',
        backgroundColor: 'green',
      }}
    >
      {/* <p> text comp</p> */}
      <form onSubmit={handleSubmit}>
        <div>
          <input value={text} onChange={handleChange}></input>
        </div>
        <button type='submit'>완료</button>
      </form>
    </div>
  );
};
export default CreateTextComp;
