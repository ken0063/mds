import React from 'react';
import Margin from './Margin';
import { select } from '@storybook/addon-knobs';

import { Spacing } from '@mds/foundation/lib';

import '@mds/scss/lib/Utilities.css';
export default {
  title: 'Atom/Margin',
};

export const Common = () => (
  <div style={{ display: 'flex', width: '100%', height: '80px' }}>
    tell
    <Margin space={select('Space', Object.values(Spacing), 'xxl')}>
      Hello World!!!
    </Margin>
  </div>
);

export const MarginLeft = () => (
  <Margin space={select('Space', Object.values(Spacing), 'xxl')} left={true}>
    Hello World!!!
  </Margin>
);
