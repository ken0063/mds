import { jsx } from 'react/jsx-runtime';
import { Spacing } from '@mds/foundation';

const Margin = ({ space = Spacing.xxxs, children, left, right, top, bottom, }) => {
    let className = ``;
    if (!left && !right && !top && !bottom) {
        className = `mds-margin-${space}`;
    }
    if (left) {
        className = `${className} mds-margin-left-${space}`;
    }
    if (right) {
        className = `${className} mds-margin-right-${space}`;
    }
    if (top) {
        className = `${className} mds-margin-top-${space}`;
    }
    if (bottom) {
        className = `${className} mds-margin-bottom-${space}`;
    }
    return jsx("div", { className: className, children: children });
};

export { Margin as default };
//# sourceMappingURL=Margin.js.map
