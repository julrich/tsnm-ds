import * as React from 'react';

import {
  Visual as KDSVisual,
  VisualProps as KDSVisualProps,
} from '@kickstartds/content/lib/visual';

export type VisualProps = KDSVisualProps;

/**
  The Visual component is used to display content focussed on an image, and additional text in a configurable box.
*/
export const Visual = ({
  height = 'default',
  ...rest
}: KDSVisualProps) => <KDSVisual height={height} {...rest} />;
