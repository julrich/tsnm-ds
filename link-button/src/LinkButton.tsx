import * as React from 'react';

import {
  LinkButton as KDSLinkButton,
  LinkButtonProps as KDSLinkButtonProps,
} from '@kickstartds/base/lib/link-button';

export type LinkButtonProps = KDSLinkButtonProps;

/**
  The LinkButton component is used display a link as a button
*/
export const LinkButton = ({
  label = 'Lorem',
  variant = 'solid',
  ...rest
}: KDSLinkButtonProps) => (
  <KDSLinkButton label={label} variant={variant} {...rest} />
);
