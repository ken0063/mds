import React from 'react';
import ReactDOM from 'react-dom';

import { Select } from '@mds/react/lib';
import '@mds/scss/lib/Utilities.css';
import '@mds/scss/lib/Text.css';
import '@mds/scss/lib/Margin.css';
import '@mds/scss/lib/Select.css';
import '@mds/scss/lib/global.css';

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

ReactDOM.render(
  <div style={{ padding: '40px' }}>
    <Select options={options} />
    bsahs
  </div>,
  document.querySelector('#root')
);
