import React, {Component} from 'react';
import {Field} from "redux-form";
import PropTypes from 'prop-types';

export default class CheckboxGroup extends Component {

  static propTypes = {
    options: PropTypes.arrayOf(PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired
    })).isRequired
  };

  field = ({input,  options}) => {
  

    const {name, onChange} = input;
    const inputValue = input.value;

    const checkboxes = options.map(({ value}, index) => {

      const handleChange = (event) => {
        const arr = [...inputValue];
        if (event.target.checked) {
          arr.push(value);
        }
        else {
          arr.splice(arr.indexOf(value), 1);
        }
        return onChange(arr);
      };
      const checked = inputValue.includes(value);
      return (
        <div key={`checkbox-${index}`} className='checkboxes'>         
          <input id={value}  type="checkbox" name={`${name}[${index}]`} value={value} checked={checked} onChange={handleChange}/>
          <label htmlFor={value} >{value}</label>                   
        </div>
      );
    });

    return (
      <div>
        <div>{checkboxes}</div>
        {/* {touched && error && <p className="error">{error}</p>} */}
      </div>
    );
  };

  render() {
    return <Field {...this.props} type="checkbox" component={this.field} />;
  }
}
