import React from 'react';
import TextCompView from './TextCompView';

const TagList = () => {
  const mock = [
    {
      id: 0,
      tagType: 'text',
      content: '이거 맞나?',
      display: 'grid',
    },
    {
      id: 1,
      tagType: 'image',
      content: '아닌가?',
      display: 'table',
    },
  ];
  return (
    <div
      style={{
        display: 'grid',
        justifyContent: 'center',
      }}
    >
      <div>TagList</div>
      {mock?.map((list) => {
        if (list.tagType === 'text')
          return (
            <TextCompView
              key={list.id}
              text={list.content}
              display={list.display}
            />
          );
        else if (list.tagType === 'image')
          return <div key={list.id}>{list.content}</div>;
      })}
    </div>
  );
};
export default TagList;
