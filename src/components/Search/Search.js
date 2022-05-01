import { useState } from 'react';
import './Search.css';

function Search({ onChangeSearch }) {
  const [value, setValue] = useState('');
  const [backgroundColor, setBackgroundColor] = useState('#111111');
  const [color, setColor] = useState('#d5d832');

  function handleFocus() {
    setBackgroundColor('#d5d832');
    setColor('#111111');
  }

  function handleBlur() {
    setBackgroundColor('#111111');
    setColor('#d5d832');
  }

  function handleChange(event) {
    setValue(event.target.value);
    onChangeSearch(event.target.value);
  }

  return (
    <div className="search" style={{ backgroundColor: backgroundColor }}>
      <input
        className="search__input"
        style={{ color: color }}
        type="text"
        name="search"
        id="search"
        value={value}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onChange={handleChange}
      />
      <div className="search__icon">
        <svg className="bi bi-search" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill={color} viewBox="0 0 16 16">
          <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
        </svg>
      </div>
    </div>
  );
}

export default Search;
