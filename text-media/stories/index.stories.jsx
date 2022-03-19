import TextMediaStories, {
  Template,
} from '@kickstartds/base/lib/text-media/text-media.stories';

import { IconSpriteDecorator } from '~/icon-sprite/src/IconSpriteDecorator';

export default {
  ...TextMediaStories,
  title: 'Base/TextMedia',
  parameters: {
    layout: 'centered',
  },
  decorators: [IconSpriteDecorator],
};

export const WithImage = Template.bind({});
WithImage.args = {
  media: [
    {
      image: {
        height: 853,
        src: 'https://i.ibb.co/cQDB60r/artworks-000024201160-w1yoo8-t.jpg',
        width: 1280,
      },
    },
  ],
  mediaAlignment: 'intext-left',
  text: 'Consequuntur est quia atque eum ducimus. Consequatur fugiat hic eos perferendis. Libero unde omnis dolorem maxime occaecati sapiente distinctio. Consectetur non placeat dolorem est animi. Suscipit quos rem suscipit culpa. Et distinctio et veritatis consectetur quae dolorem aut. Explicabo commodi repudiandae fugiat. Accusamus alias mollitia perferendis qui iure magni. Minus est vitae dolor dolor.',
};

export const WithImages = Template.bind({});
WithImages.args = {
  media: [
    {
      image: {
        height: 853,
        src: 'https://i.ibb.co/cQDB60r/artworks-000024201160-w1yoo8-t.jpg',
        width: 1280,
      },
    },
    {
      image: {
        height: 853,
        src: 'https://i.ibb.co/cQDB60r/artworks-000024201160-w1yoo8-t.jpg',
        width: 1280,
      },
    },
    {
      image: {
        height: 853,
        src: 'https://i.ibb.co/cQDB60r/artworks-000024201160-w1yoo8-t.jpg',
        width: 1280,
      },
    },
  ],
  mediaAlignment: 'above-center',
  text: 'Consequuntur est quia atque eum ducimus. Consequatur fugiat hic eos perferendis. Libero unde omnis dolorem maxime occaecati sapiente distinctio. Consectetur non placeat dolorem est animi. Suscipit quos rem suscipit culpa. Et distinctio et veritatis consectetur quae dolorem aut. Explicabo commodi repudiandae fugiat. Accusamus alias mollitia perferendis qui iure magni. Minus est vitae dolor dolor.',
};

export const WithVideo = Template.bind({});
WithVideo.args = {
  media: [
    {
      video: {
        height: 853,
        src: 'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_2mb.mp4',
        width: 1280,
      },
    },
  ],
  mediaAlignment: 'below-center',
  text: 'Consequuntur est quia atque eum ducimus. Consequatur fugiat hic eos perferendis. Libero unde omnis dolorem maxime occaecati sapiente distinctio. Consectetur non placeat dolorem est animi. Suscipit quos rem suscipit culpa. Et distinctio et veritatis consectetur quae dolorem aut. Explicabo commodi repudiandae fugiat. Accusamus alias mollitia perferendis qui iure magni. Minus est vitae dolor dolor.',
};
