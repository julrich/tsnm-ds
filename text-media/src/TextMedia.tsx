import * as React from 'react';

import {
  TextMedia as KDSTextMedia,
  TextMediaProps as KDSTextMediaProps,
} from '@kickstartds/base/lib/text-media';

export type TextMediaProps = KDSTextMediaProps;

/**
  The TextMedia component is used to display text content with additional, optional media.
*/
export const TextMedia = ({
  text = 'Lorem ipsum',
  media = [],
  mediaAlignment = 'above-center',
  ...rest
}: KDSTextMediaProps) => (
  <KDSTextMedia
    text={text}
    media={media}
    mediaAlignment={mediaAlignment}
    {...rest}
  />
);
