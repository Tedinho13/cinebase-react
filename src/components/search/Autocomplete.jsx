import './Autocompletion.css';
import { useState } from 'react';

const Autocomplete = ({activeItem, data, onClick}) => {
  
  const items = data.map((item, index) => <li className={`autocompletion__item ${index === activeItem ? "active" : ""}`} key={item.id} onClick={onClick}>{item.original_title}</li>);
  
  return <ul className="autocompletion__list">
    {items}
  </ul>;
};

export default Autocomplete;