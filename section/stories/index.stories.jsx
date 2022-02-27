import { TeaserBox } from '~/teaser-box/src/TeaserBox';
import { Section } from '../src/Section';
import { IconSpriteDecorator } from '~/icon-sprite/src/IconSpriteDecorator';

import sectionStories from '@kickstartds/base/lib/section/section.stories';

export default {
  ...sectionStories,
  title: 'Layout/Section',
  decorators: [IconSpriteDecorator],
};

const boxes = [
  {
    image: 'https://source.unsplash.com/random/400x400/?pattern',
    topic: 'Lorem',
    text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt.',
  },
  {
    image: 'https://source.unsplash.com/random/400x400/?pattern',
    topic: 'Lorem',
    text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt.',
  },
  {
    image: 'https://source.unsplash.com/random/400x400/?pattern',
    topic: 'Lorem',
    text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt.',
  },
  {
    image: 'https://source.unsplash.com/random/400x400/?pattern',
    topic: 'Lorem',
    text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt.',
  },
  {
    image: 'https://source.unsplash.com/random/400x400/?pattern',
    topic: 'Lorem',
    text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt.',
  },
];
const SliderTemplate = (args) => (
  <Section {...args}>
    {boxes.map((box, i) => (
      <TeaserBox ratio="1:1" key={i} {...box} />
    ))}
  </Section>
);

export const Default = SliderTemplate.bind({});
Default.args = {
  mode: 'default',
  headline: {
    align: 'left',
  },
};

export const Slider = SliderTemplate.bind({});
Slider.args = {
  mode: 'slider',
  headline: {
    align: 'left',
  },
};
