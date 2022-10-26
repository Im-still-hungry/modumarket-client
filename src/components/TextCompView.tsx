import React, { useEffect, useState } from 'react';

const TextCompView = (text:any) => {
  // const [textContent, setTextContent] = useState(text.text)
  // const [textDisplay, setTextDisplay] = useState(text.display)
  console.log(text,": text")

  return (
    <div
      style={{
        display: text.display,
        justifyContent: 'center',
        height: '300px',
        width: '300px',
        backgroundColor: 'green',
      }}
    >
    {text.text}
    </div>
  );
};
export default TextCompView;
