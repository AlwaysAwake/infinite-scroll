import React from 'react';
import Header from './Header';
import ContentItem from './ContentItem';
import style from './App.scss';

const list = [1, 2, 3, 4, 5].map(key => ({
  id: key,
  key,
  uuid: String(key).repeat(5),
  created: Date.now()
}));

const App = () => {
  return (
    <div className={style.container}>
      <Header />
      <div className={style.contents_wrapper}>
        {list.map(item => (
          <ContentItem {...item} itemKey={item.key} />
        ))}
      </div>
    </div>
  );
};

export default App;
