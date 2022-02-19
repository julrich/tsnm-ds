import * as React from 'react';
import {
  TeaserBox as KDSTeaserBox,
  TeaserBoxProps as KDSTeaserBoxProps,
} from '@kickstartds/base/lib/teaser-box/index.js';

export type TeaserBoxProps = KDSTeaserBoxProps;

/**
  The Teaser Box component is used to tease content
*/
export const TeaserBox = ({
  topic = 'Lorem ipsum',
  text = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ispum dolor distinctio minima unde voluptatum aut. Lorem ipsum dolor sit amet.',
  darkStyle = false,
  ...rest
}: KDSTeaserBoxProps) => (
  <KDSTeaserBox topic={topic} text={text} darkStyle={darkStyle} {...rest} />
);
