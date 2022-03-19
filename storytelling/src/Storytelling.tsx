import * as React from 'react';

import {
  Storytelling as KDSStorytelling,
  StorytellingProps as KDSStorytellingProps,
} from '@kickstartds/content/lib/storytelling';

export type StorytellingProps = KDSStorytellingProps;

/**
  The Storytelling component is used to rich combinations of images and text.
*/
export const Storytelling = ({
  box,
  full = false,
  image,
  ...rest
}: KDSStorytellingProps) => (
  <KDSStorytelling
    box={box}
    full={full}
    image={image}
    {...rest}
  />
);
