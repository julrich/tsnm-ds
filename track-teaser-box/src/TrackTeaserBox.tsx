import * as React from 'react';
import ReactCardFlip from 'react-card-flip';
import AudioPlayer from 'react-h5-audio-player';
import './track-teaser-box.scss';

import { TeaserBox } from '~/teaser-box/src/TeaserBox';
import { TeaserBoxProps as KDSTeaserBoxProps } from '@kickstartds/base/lib/teaser-box';
export type TrackTeaserBoxProps = KDSTeaserBoxProps;

/**
  The Track Teaser Box component is used explicitly to tease tracks in a richer way
*/
export const TrackTeaserBox = ({
  topic,
  text,
  image,
  darkStyle = false,
  preview,
  ...rest
}: KDSTeaserBoxProps & { preview: string }) => {
  const [isFlipped, setIsFlipped] = React.useState(false);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <ReactCardFlip
      containerClassName="c-track-teaser-box"
      isFlipped={isFlipped}
      flipDirection="horizontal"
    >
      <div onClick={handleClick}>
        <TeaserBox
          topic={topic}
          text={text}
          {...rest}
          image={image}
          darkStyle
        />
      </div>
      <div onClick={handleClick}>
        <AudioPlayer
          header={
            <>
              <img className="c-track-teaser-box__back-image" src={image} />
            </>
          }
          layout="stacked-reverse"
          src={preview}
          showJumpControls={false}
          customVolumeControls={[]}
          customAdditionalControls={[]}
        />
      </div>
    </ReactCardFlip>
  );
};
