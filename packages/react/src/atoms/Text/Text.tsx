import React, { FC, ReactNode } from 'react';
import { FontSize } from '@mds/foundation';

export interface TextProps {
  size?: keyof typeof FontSize;
  children: ReactNode;
}

const Text: FC<TextProps> = ({ size = FontSize.base, children }) => {
  const className = `mds-text mds-text-${size}`;
  return <p className={className}>{children}</p>;
};

export default Text;
