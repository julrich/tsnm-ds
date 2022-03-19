import VisualStories, {
  Template,
} from '@kickstartds/content/lib/visual/visual.stories';

import { IconSpriteDecorator } from '~/icon-sprite/src/IconSpriteDecorator';

export default {
  ...VisualStories,
  title: 'Content/Visual',
  parameters: {
    layout: 'centered',
  },
  decorators: [IconSpriteDecorator],
};

export const BoxLight = Template.bind({});
BoxLight.args = {
  backgroundColor: 'transparent',
  height: 'fullImage',
  box: {
    enabled: true,
    headline: {
      level: 'p',
      styleAs: 'h2',
      align: 'left',
      content: 'Light Box',
      spaceAfter: 'none',
      pageHeader: false,
    },
    text: 'Hic maxime sed eos non. Consequatur ut qui amet accusantium nesciunt.',
    link: {
      enabled: true,
      variant: 'solid',
      label: 'Lorem Ipsum',
      size: 'medium',
      iconBefore: false,
      iconAfter: false,
      fillAnimation: false,
      iconAnimation: false,
      href: 'https://example.com',
      newTab: false,
    },
    indent: false,
    horizontal: 'left',
    vertical: 'center',
    background: 'light',
  },
  media: {
    mode: 'image',
    image: {
      srcMobile:
        'https://pbs.twimg.com/profile_banners/46692667/1622221867/1500x500',
      srcTablet:
        'https://pbs.twimg.com/profile_banners/46692667/1622221867/1500x500',
      srcDesktop:
        'https://pbs.twimg.com/profile_banners/46692667/1622221867/1500x500',
      src: 'https://pbs.twimg.com/profile_banners/46692667/1622221867/1500x500',
      indent: 'none',
    },
  },
};

export const BoxDark = Template.bind({});
BoxDark.args = {
  backgroundColor: 'transparent',
  height: 'fullImage',
  box: {
    enabled: true,
    headline: {
      level: 'p',
      styleAs: 'h2',
      align: 'left',
      content: 'Dark Box',
      spaceAfter: 'none',
      pageHeader: false,
    },
    text: 'Hic maxime sed eos non. Consequatur ut qui amet accusantium nesciunt.',
    link: {
      enabled: true,
      variant: 'solid-inverted',
      label: 'Lorem Ipsum',
      size: 'medium',
      iconBefore: false,
      iconAfter: false,
      fillAnimation: false,
      iconAnimation: false,
      href: 'https://example.com',
      newTab: false,
    },
    indent: false,
    horizontal: 'left',
    vertical: 'center',
    background: 'dark',
  },
  media: {
    mode: 'image',
    image: {
      srcMobile:
        'https://pbs.twimg.com/profile_banners/46692667/1622221867/1500x500',
      srcTablet:
        'https://pbs.twimg.com/profile_banners/46692667/1622221867/1500x500',
      srcDesktop:
        'https://pbs.twimg.com/profile_banners/46692667/1622221867/1500x500',
      src: 'https://pbs.twimg.com/profile_banners/46692667/1622221867/1500x500',
      indent: 'none',
    },
  },
};

export const BoxTransparent = Template.bind({});
BoxTransparent.args = {
  backgroundColor: 'transparent',
  height: 'fullImage',
  box: {
    enabled: true,
    headline: {
      level: 'p',
      styleAs: 'h2',
      align: 'left',
      content: 'Transparent Box',
      spaceAfter: 'none',
      pageHeader: false,
    },
    text: 'Hic maxime sed eos non. Consequatur ut qui amet accusantium nesciunt.',
    link: {
      enabled: true,
      variant: 'solid-inverted',
      label: 'Lorem Ipsum',
      size: 'medium',
      iconBefore: false,
      iconAfter: false,
      fillAnimation: false,
      iconAnimation: false,
      href: 'https://example.com',
      newTab: false,
    },
    indent: false,
    horizontal: 'left',
    vertical: 'center',
    background: 'transparent',
  },
  media: {
    mode: 'image',
    image: {
      srcMobile:
        'https://pbs.twimg.com/profile_banners/46692667/1622221867/1500x500',
      srcTablet:
        'https://pbs.twimg.com/profile_banners/46692667/1622221867/1500x500',
      srcDesktop:
        'https://pbs.twimg.com/profile_banners/46692667/1622221867/1500x500',
      src: 'https://pbs.twimg.com/profile_banners/46692667/1622221867/1500x500',
      indent: 'none',
    },
  },
};
