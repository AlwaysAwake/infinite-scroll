import React, {useEffect, useState, useCallback} from 'react';
import Header from './Header';
import ContentItem from './ContentItem';
import Loading from './Loading';
import {getList} from '../service';
import style from './App.scss';

const options = {
  rootMargin: '0px'
};

const App = () => {
  const [isLoading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [list, setList] = useState([]);
  const [detectorRef, setDetectorRef] = useState(null);

  const requestList = useCallback(() => {
    if (!isLoading) {
      setLoading(true);
      getList({page}).then(res => {
        setLoading(false);
        setPage(page => page + 1);
        setList(list => [...list, ...res]);
      });
    }
  }, [page]);

  const handleObserve = useCallback(
    ([entry]) => {
      if (entry.isIntersecting) {
        requestList();
      }
    },
    [requestList]
  );

  useEffect(() => {
    const observer = new IntersectionObserver(handleObserve, options);

    if (detectorRef) {
      observer.observe(detectorRef);
    }
    return () => {
      observer.disconnect();
    };
  }, [detectorRef, handleObserve]);

  return (
    <div className={style.container}>
      <Header />
      <div className={style.contents_wrapper}>
        {list.map(item => (
          <ContentItem {...item} itemKey={item.key} />
        ))}
      </div>
      {isLoading ? (
        <Loading />
      ) : (
        <div ref={node => setDetectorRef(node)} className={style.loading_detector} />
      )}
    </div>
  );
};

export default App;
