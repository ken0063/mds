import { FC } from 'react';
import { Spacing } from '@mds/foundation';
export interface ColorProps {
    hexCode: string;
    width?: keyof typeof Spacing;
    height?: keyof typeof Spacing;
}
declare const Color: FC<ColorProps>;
export default Color;
