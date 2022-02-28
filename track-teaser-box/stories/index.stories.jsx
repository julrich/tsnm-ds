import { IconSpriteDecorator } from '~/icon-sprite/src/IconSpriteDecorator';
import { TrackTeaserBox } from '~/track-teaser-box/src/TrackTeaserBox';

export default {
  component: TrackTeaserBox,
  title: 'Tsnm/TrackTeaserBox',
  parameters: {
    layout: 'centered',
  },
  decorators: [IconSpriteDecorator],
};

const Template = (args) => <TrackTeaserBox {...args} />;

export const Track = Template.bind({});
Track.args = {
  ratio: '1:1',
  topic: 'Bussin',
  text: `**Artist**: Nicki Minaj`,
  image: 'https://i.scdn.co/image/ab6761610000e5ebaf3459f7c235fd25daf7f84f',
  preview: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-16.mp3',
  link: {
    variant: 'solid',
    label: 'Mehr erfahren',
    hidden: true,
  },
};
