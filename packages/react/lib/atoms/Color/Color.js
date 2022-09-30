import React from 'react';
import { Spacing } from '@mds/foundation';

const Color = ({ hexCode, width = Spacing.sm, height = Spacing.sm, }) => {
    const className = `mds-width-${width} mds-height-${height}`;
    return React.createElement("div", { className: className, style: { backgroundColor: hexCode } });
};

export { Color as default };
//# sourceMappingURL=Color.js.map
