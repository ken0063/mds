import { FC, ReactNode } from 'react';
import { FontSize } from '@mds/foundation';
interface TextProps {
    size?: keyof typeof FontSize;
    children: ReactNode;
}
declare const Text: FC<TextProps>;
export default Text;
