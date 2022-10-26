import React, { useState } from 'react';
import SelectTag from './SelectTag';

const CreateTag = () => {
  const [createBtn, setCreateBtn] = useState(false);

  const createHandler = async(e: any) => {
    e.preventDefault();
    // set
  }

  const deleteHandler = async(e: any) => {
    e.preventDefault();
    // set
  }

  return (
    <>
    {createBtn && <SelectTag />}
    <button
      onClick={() => {
        // {createHandler}
        setCreateBtn(true);
      }}
    >
      생성하기
    </button>
    <button
      onClick={() => {
        // {deleteHandler}
        console.log("cencel")
        setCreateBtn(false);
      }}
    >
      삭제하기
    </button>
    </>
  );
};
export default CreateTag;
