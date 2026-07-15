import './Autocompletion.css';
import { useState } from 'react';

const Autocomplete = ({activeItem, data}) => {
  
  const items = data.map((item, index) => <li className={`autocompletion__item ${index === activeItem ? "active" : ""}`} key={item.id}>{item.original_title}</li>);

  console.log(items);
  return <ul className="autocompletion__list">
    {items}
  </ul>;
};

export default Autocomplete;