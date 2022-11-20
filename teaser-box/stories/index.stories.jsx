import TeaserBoxStories, {
  Template,
} from '@kickstartds/base/lib/teaser-box/teaser-box.stories';

import { IconSpriteDecorator } from '~/icon-sprite/src/IconSpriteDecorator';

export default {
  ...TeaserBoxStories,
  title: 'Base/TeaserBox',
  parameters: {
    layout: 'centered',
  },
  decorators: [IconSpriteDecorator],
};

export const Linked = Template.bind({});
Linked.args = {
  ratio: '16:9',
  topic: 'Lorem Ipsum',
  text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ispum dolor distinctio minima unde voluptatum aut. Lorem ipsum dolor sit amet.',
  link: {
    variant: 'solid',
    label: 'Learn more',
    hidden: true,
  },
};

export const Button = Template.bind({});
Button.args = {
  ...Linked.args,
  link: {
    variant: 'solid',
    label: 'Learn more',
    hidden: false,
  },
};

export const Dark = Template.bind({});
Dark.args = {
  ...Linked.args,
  link: {
    variant: 'solid-inverted',
    label: 'Learn more',
    hidden: false,
  },
  inverted: true,
};
