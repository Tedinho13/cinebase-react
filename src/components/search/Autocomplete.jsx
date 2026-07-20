import './Autocompletion.css';

const Autocomplete = ({activeItem, data, onClick}) => {
  
  const items = data.map((item, index) => <li className={`autocompletion__item ${index === activeItem ? "active" : ""}`} key={item.id} onClick={onClick}>{item.original_title}</li>);

  if(items.length === 0) return;
  
  return <ul className="autocompletion__list">
    {items}
  </ul>;
};

export default Autocomplete;