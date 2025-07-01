import { jsx } from 'react/jsx-runtime';
import { FontSize } from '@mds/foundation';

const Text = ({ size = FontSize.base, children }) => {
    const className = `mds-text mds-text-${size}`;
    return jsx("p", { className: className, children: children });
};

export { Text as default };
//# sourceMappingURL=Text.js.map
