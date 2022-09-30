import React from 'react';
import Margin from './Margin';
import { text, select } from '@storybook/addon-knobs';

import { Spacing } from '@mds/foundation/lib';

import '@mds/scss/lib/Utilities.css';
export default {
  title: 'Atom/Margin',
};

export const Common = () => <Margin>Hello World!!!</Margin>;

// export const CustomDimensions = () => (
//   <Color
//     hexCode={text('HexCode', 'purple')}
//     width={select('Width', Object.values(Spacing), 'xxl')}
//     height={select('Height', Object.values(Spacing), 'xxl')}
//   />
// );
