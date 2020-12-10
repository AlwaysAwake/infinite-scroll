import React, {useEffect, useState} from 'react';
import Header from './Header';
import ContentItem from './ContentItem';
import {getList} from '../service';
import style from './App.scss';

const App = () => {
  const [list, setList] = useState([]);

  useEffect(() => {
    if (list.length <= 0) {
      getList().then(res => setList(res));
    }
  }, [list]);

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
