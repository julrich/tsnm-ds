import { Fragment, createElement } from 'react';
import { IconSprite } from './IconSprite';
export const IconSpriteDecorator = (Story) =>
  createElement(Fragment, null, [
    createElement(IconSprite, { key: '1' }),
    createElement(Story, { key: '2' }),
  ]);
