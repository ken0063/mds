import React from 'react';
import Select from './Select';

import { render, fireEvent } from '@testing-library/react';

/**
 * @jest-environment jsdom
 */
const options = [
  {
    label: 'bda hs',
    value: 'shbavjs',
  },
  {
    label: 'bsahc',
    value: 'shbsmhavjs',
  },
  {
    label: 'jkhasda',
    value: 'sjksbcavjs',
  },
];

test('render all options passed to it', () => {
  const { getAllByRole, getByTestId } = render(<Select options={options} />);
  fireEvent.click(getByTestId('mds-select-button'));
  expect(getAllByRole('menuitemradio')).toHaveLength(options.length);
});

test('render options using custom renderOption method if passed as prop', () => {
  const { getAllByTestId, getByTestId } = render(
    <Select
      options={options}
      renderOption={({ options, getOptionRecommendedProps }) => {
        return (
          <li
            data-testid="custom-render-option"
            {...getOptionRecommendedProps()}
          >
            {options?.label}
          </li>
        );
      }}
    />
  );

  fireEvent.click(getByTestId('mds-select-button'));
  expect(getAllByTestId('custom-render-option')).toHaveLength(options.length);
});

test('calls the onOptionSelected prop with the selected option and its index if passed', () => {
  const optionHandler = jest.fn();
  const { getAllByRole, getByTestId } = render(
    <Select options={options} optionHandler={optionHandler} />
  );

  fireEvent.click(getByTestId('mds-select-button'));
  fireEvent.click(getAllByRole('menuitemradio')[0]);
  expect(optionHandler).toHaveBeenCalledWith(options[0], 0);
});

test('the button label changes to the selected option label', () => {
  const { getAllByRole, getByTestId } = render(<Select options={options} />);

  fireEvent.click(getByTestId('mds-select-button'));
  fireEvent.click(getAllByRole('menuitemradio')[0]);

  expect(getByTestId('mds-select-button')).toHaveTextContent(options[0].label);
});

test('snapshot of the selected option state', () => {
  const { getAllByRole, getByTestId, asFragment } = render(
    <Select options={options} />
  );

  fireEvent.click(getByTestId('mds-select-button'));
  fireEvent.click(getAllByRole('menuitemradio')[0]);

  expect(asFragment()).toMatchSnapshot();
});

test('snapshot of the base state', () => {
  const { asFragment } = render(<Select options={options} />);

  expect(asFragment()).toMatchSnapshot();
});

test('snapshot of the selected option state', () => {
  const { getByTestId, asFragment } = render(<Select options={options} />);

  fireEvent.click(getByTestId('mds-select-button'));

  expect(asFragment()).toMatchSnapshot();
});

test('can customize select label', () => {
  const { getByText } = render(
    <Select options={options} label="Hello World!!!" />
  );

  expect(getByText(/Hello World!!!/)).toBeInTheDocument();
});
