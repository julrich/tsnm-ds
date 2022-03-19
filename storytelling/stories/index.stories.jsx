import StorytellingStories, {
  Template,
} from '@kickstartds/content/lib/storytelling/storytelling.stories';

import { IconSpriteDecorator } from '~/icon-sprite/src/IconSpriteDecorator';

export default {
  ...StorytellingStories,
  title: 'Content/Storytelling',
  parameters: {
    layout: 'centered',
  },
  decorators: [IconSpriteDecorator],
};

export const Image = Template.bind({});
Image.args = {
  full: 'true',
  image: {
    source: 'https://i.ibb.co/cQDB60r/artworks-000024201160-w1yoo8-t.jpg',
    ratio: 'none',
    vAlign: 'center',
    hAlign: 'center',
    order: {
      mobileImageLast: false,
      desktopImageLast: true,
    },
  },
  box: {
    headline: {
      level: 'h2',
      styleAs: 'h2',
      align: null,
      content: 'About me',
      spaceAfter: 'none',
      pageHeader: false,
    },
    text: "I'm a web developer from Bonn, Germany. I love music, and have DJed a bit in the past. I'll work on this page every now and then, adding content as I go.",
    textAlign: 'left',
    vAlign: 'center',
    hAlign: 'center',
    link: {
      label: 'Visit my SoundCloud',
      variant: 'solid',
      size: 'medium',
      iconBefore: false,
      iconAfter: false,
      fillAnimation: false,
      iconAnimation: false,
      href: 'https://soundcloud.com/tsnm',
      newTab: true,
    },
  },
};

export const BackgroundImage = Template.bind({});
BackgroundImage.args = {
  full: false,
  backgroundImage:
    'https://i.ibb.co/kx4VLdQ/456754-10150983293670629-617392464-o.jpg',
  image: {
    source: 'https://i1.sndcdn.com/avatars-000003159261-cat82d-t200x200.jpg',
    ratio: 'none',
    vAlign: 'center',
    hAlign: 'center',
    order: {
      mobileImageLast: false,
      desktopImageLast: false,
    },
  },
  box: {
    headline: {
      level: 'h2',
      styleAs: 'h2',
      align: null,
      content: 'Mysterious Content',
      spaceAfter: 'none',
      pageHeader: false,
    },
    text: '... find out more about my music and coding',
    textAlign: 'left',
    vAlign: 'bottom',
    hAlign: 'right',
    textColor: 'white',
  },
};
