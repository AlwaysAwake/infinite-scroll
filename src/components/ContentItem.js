import React from 'react';
import style from './ContentItem.scss';

const ContentItem = ({id, itemKey, uuid, created}) => {
  return (
    <div className={style.wrapper}>
      <h3>Id: {id}</h3>
      <h5>Key: {itemKey}</h5>
      <h5>Uuid: {uuid}</h5>
      <h5>Created: {created}</h5>
    </div>
  );
};

export default ContentItem;
