import React, { Component } from 'react';
import Select from 'react-select';

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
];

const NewBieSelect = () => (
  <form data-testid="myselect">
    <label htmlFor="food">Food</label>
    <Select options={options} name="food" inputId="food" />
  </form>
  // <div data-testid="myselect">
  //   <Select options={options} name="food" inputId="food" />
  // </div>
);

export default NewBieSelect;
