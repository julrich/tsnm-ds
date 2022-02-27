import ButtonStories, {
  Template,
} from '@kickstartds/base/lib/button/button.stories';

import { IconSpriteDecorator } from '~/icon-sprite/src/IconSpriteDecorator';

export default {
  ...ButtonStories,
  title: 'Base/Button',
  parameters: {
    layout: 'centered',
  },
  decorators: [IconSpriteDecorator],
};

export const Solid = Template.bind({});
Solid.args = {
  variant: 'solid',
  href: '#',
  label: 'Learn more',
};

export const SolidMain = Template.bind({});
SolidMain.args = {
  className: 'c-button--main',
  variant: 'solid',
  href: '#',
  label: 'Request a guided demo',
};

export const WithIcon = Template.bind({});
WithIcon.args = {
  ...Solid.args,
  iconAfter: true,
  icon: {
    icon: 'chevron-right',
  },
};

export const Inverted = Template.bind({});
Inverted.args = {
  ...Solid.args,
  variant: 'solid-inverted',
  href: '#',
};
Inverted.parameters = {
  backgrounds: { default: 'dark' },
};

export const Outline = Template.bind({});
Outline.args = {
  ...Solid.args,
  variant: 'outline',
};

export const OutlineInverted = Template.bind({});
OutlineInverted.args = {
  ...Solid.args,
  variant: 'outline-inverted',
};
OutlineInverted.parameters = {
  backgrounds: { default: 'dark' },
};

export const Ghost = Template.bind({});
Ghost.args = {
  ...Solid.args,
  variant: 'clear',
};
