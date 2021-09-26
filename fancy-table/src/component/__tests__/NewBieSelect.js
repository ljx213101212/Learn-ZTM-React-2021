import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import selectEvent from 'react-select-event';
import NewBieSelect from '../NewBieSelect';

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
];

describe('Test NewBieSelect', () => {
  it('ideal', () => {
    const r = () => render(<NewBieSelect />);
    expect(r).not.toThrow();
  });

  it('check default item', async () => {
    const r = render(<NewBieSelect />);
    const select = screen.getByTestId('myselect');
    expect(select).toBeInTheDocument();
    selectEvent.openMenu(r.getByRole('combobox'));
    options.forEach((option) => {
      expect(r.getByText(new RegExp(`${option.label}`, 'i'))).toBeInTheDocument();
    });
  });

  it('check selected item', async () => {
    const r = render(<NewBieSelect />);
    await selectEvent.select(r.getByLabelText('Food'), ['Chocolate']);
    const items = await screen.findAllByText(/Chocolate/i);
    expect(items).toHaveLength(1);
  });
});
