import React from 'react';
import { FontSize } from '@mds/foundation';

const Text = ({ size = FontSize.base, children }) => {
    const className = `mds-text mds-text-${size}`;
    return React.createElement("p", { className: className }, children);
};

export { Text as default };
//# sourceMappingURL=Text.js.map
