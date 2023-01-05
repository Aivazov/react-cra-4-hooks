import React, { PureComponent } from 'react';
import './Colopicker.css'

const colorPickerOptions = [
  { label: 'red', color: '#f44336' },
  { label: 'green', color: '#4caf50' },
  { label: 'blue', color: '#2196f3' },
  { label: 'grey', color: '#607d8b' },
  { label: 'pink', color: '#e91e63' },
  { label: 'indigo', color: '#3f51b5' },
];

export default class ColorPicker extends PureComponent {
  state = {
    activeOptionIndex: 0,
  };

  setActiveIndex = (index) => {
    this.setState({ activeOptionIndex: index });
  };

  makeOptionClassName = (index) => {
    return classNames('ColorPicker__option', {
      'Colorpicker__option--active': index === this.state.activeOptionIndex,
    });
  };
  render() {
    const { activeOptionIndex } = this.state;
    // const { label, color } = colorPickerOptions;
    return (
      <div>
        <h2>ColorPicker</h2>
        <p>Chose color: {colorPickerOptions.label}</p>
        <div>
          {colorPickerOptions.map(({ label, color }, index) => (
            <button
              key={label}
              className={this.makeOptionClassName(index)}
              style={{ backgroundColor: color }}
              onClick={() => this.setActiveIndex(index)}
            ></button>
          ))}
        </div>
      </div>
    );
  }
}
