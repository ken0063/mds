import { Spacing } from "@mds/foundation";
import { FC, ReactNode } from "react";
export interface MarginProps {
    space?: keyof typeof Spacing;
    left?: boolean;
    right?: boolean;
    top?: boolean;
    bottom?: boolean;
    children: ReactNode;
}
declare const Margin: FC<MarginProps>;
export default Margin;
