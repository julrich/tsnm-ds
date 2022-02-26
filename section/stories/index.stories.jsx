import { pack } from '@kickstartds/core/lib/storybook/helpers';
import { ContentBox } from '@kickstartds/base/lib/content-box';
import { Section } from '@kickstartds/base/lib/section';
import sectionStories from '@kickstartds/base/lib/section/section.stories';

export default {
  ...sectionStories,
  title: 'Layout/Section',
};

const boxes = [
  {
    image: 'https://picsum.photos/200/300',
    topic: 'Lorem Ipsum',
    text: 'dolor',
  },
  {
    image: 'https://picsum.photos/200/300',
    topic: 'Lorem Ipsum',
    text: 'dolor',
  },
  {
    image: 'https://picsum.photos/200/300',
    topic: 'Lorem Ipsum',
    text: 'dolor',
  },
  {
    image: 'https://picsum.photos/200/300',
    topic: 'Lorem Ipsum',
    text: 'dolor',
  },
  {
    image: 'https://picsum.photos/200/300',
    topic: 'Lorem Ipsum',
    text: 'dolor',
  },
];
const SliderTemplate = (args) => (
  <Section {...args}>
    {boxes.map((box, i) => (
      <ContentBox
        className="c-content-box--team"
        ratio="1:1"
        key={i}
        {...box}
      />
    ))}
  </Section>
);

export const Slider = SliderTemplate.bind({});
Slider.args = pack({
  mode: 'slider',
  headline: {
    align: 'left',
  },
});
