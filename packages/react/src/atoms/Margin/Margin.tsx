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

const Margin: FC<MarginProps> = ({
  space = Spacing.xxxs,
  children,
  left,
  right,
  top,
  bottom,
}) => {
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
  return <div className={className}>{children}</div>;
};

export default Margin;
