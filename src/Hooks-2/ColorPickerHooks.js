import React, { useState } from 'react';
import classNames from 'classnames'; // this lib makes it possible to easy change between standard & active classes
import './ColorPicker.css';

const colorPickerOptions = [
  { label: 'red', color: '#f44336' },
  { label: 'green', color: '#4caf50' },
  { label: 'blue', color: '#2196f3' },
  { label: 'grey', color: '#607d8b' },
  { label: 'pink', color: '#e91e63' },
  { label: 'indigo', color: '#3f51b5' },
];

export default function ColorPickerHooks() {
  const [activeOptionIndex, setActiveOptionIndex] = useState(0);

  const setActiveIndex = (index) => {
    setActiveOptionIndex(index);
  };

  const makeOptionClassName = (index) => {
    return classNames('ColorPicker__option', {
      'ColorPicker__option--active': index === activeOptionIndex,
    });
  };

  const { label } = colorPickerOptions[activeOptionIndex];
  return (
    <div className="ColorPicker">
      <h2>ColorPicker</h2>
      <p>
        Chosen color: <strong>{label}</strong>
      </p>
      <div>
        {colorPickerOptions.map(({ label, color }, index) => (
          <button
            key={label}
            className={makeOptionClassName(index)}
            style={{ backgroundColor: color }}
            onClick={() => setActiveIndex(index)}
          ></button>
        ))}
      </div>
    </div>
  );
}
