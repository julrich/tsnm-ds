import { TeaserBox } from '~/teaser-box/src/TeaserBox';
import { TrackTeaserBox } from '~/track-teaser-box/src/TrackTeaserBox';
import { Section } from '../src/Section';
import { IconSpriteDecorator } from '~/icon-sprite/src/IconSpriteDecorator';

import sectionStories from '@kickstartds/base/lib/section/section.stories';

export default {
  ...sectionStories,
  component: Section,
  title: 'Layout/Section',
  decorators: [IconSpriteDecorator],
};

const teaserBoxes = [
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

const sliderBoxes = [
  {
    image: 'https://i.scdn.co/image/ab6761610000e5ebaf3459f7c235fd25daf7f84f',
    topic: 'Bussin',
    text: '**Artist**: Nicki Minaj',
    preview: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-16.mp3',
  },
  {
    image: 'https://i.scdn.co/image/ab6761610000e5ebef759c6cd0ea32b24b000fa5',
    topic: 'Such a good day',
    text: '**Artist**: Lewis OfMan',
    preview: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-16.mp3',
  },
  {
    image: 'https://i.scdn.co/image/ab6761610000e5eb4a7d582ae933159bcd6d9381',
    topic: 'Habella',
    text: '**Artist**: Ron Flatter',
    preview: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-16.mp3',
  },
  {
    image: 'https://i.scdn.co/image/ab6761610000e5ebdfc3914039153d4a329ba705',
    topic: 'COOKING UP',
    text: '**Artist**: Alonestar',
    preview: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-16.mp3',
  },
  {
    image: 'https://i.scdn.co/image/ab6761610000e5ebd9b3676ccc76e4a323c6c97d',
    topic: 'Exotic Contents',
    text: '**Artist**: Max Cooper',
    preview: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-16.mp3',
  },
];

const SliderTemplate = (args) => (
  <Section {...args}>
    {args.mode === 'slider'
      ? sliderBoxes.map((box, i) => (
          <TrackTeaserBox ratio="1:1" key={i} {...box} />
        ))
      : teaserBoxes.map((box, i) => (
          <TeaserBox ratio="16:9" key={i} {...box} />
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
  background: 'dark',
  headline: {
    align: 'left',
  },
};
