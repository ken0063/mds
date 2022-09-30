import React from 'react';

import Select from './Select';
import { withA11y } from '@storybook/addon-a11y';

import '@mds/scss/lib/Select.css';

export default {
  title: 'Molecules/Select',
  decorators: [withA11y],
};

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

export const Common = () => <Select options={options} />;

export const RenderOption = () => (
  <Select
    options={options}
    renderOption={({ options, getOptionRecommendedProps, isSelected }) => {
      return (
        <span {...getOptionRecommendedProps()}>
          {options?.label} {isSelected ? 'SELECTED !!!' : ''}
        </span>
      );
    }}
  />
);

export const CustomLabel = () => (
  <Select options={options} label="Select a color" />
);
