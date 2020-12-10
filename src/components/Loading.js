import React from 'react';
import cx from 'classnames';
import style from './Loading.scss';

// ref: https://tobiasahlin.com/spinkit/
const Loading = () => {
  return (
    <div className={style.spinner}>
      <div className={style.rect}></div>
      <div className={cx(style.rect, style.rect2)} />
      <div className={cx(style.rect, style.rect3)} />
      <div className={cx(style.rect, style.rect4)} />
      <div className={cx(style.rect, style.rect5)} />
    </div>
  );
};

export default Loading;
