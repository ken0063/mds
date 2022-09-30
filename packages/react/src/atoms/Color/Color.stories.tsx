import React from 'react';
import Color from './Color';
import { text, select } from '@storybook/addon-knobs';

import { Spacing } from '@mds/foundation/lib';

import '@mds/scss/lib/Utilities.css';
export default {
  title: 'Atom/Color',
};

export const Common = () => <Color hexCode={text('HexCode', 'green')} />;

export const CustomDimensions = () => (
  <Color
    hexCode={text('HexCode', 'purple')}
    width={select('Width', Object.values(Spacing), 'xxl')}
    height={select('Height', Object.values(Spacing), 'xxl')}
  />
);
