import React, { Children } from 'react';
import classNames from 'classnames';
import {
  SectionContext,
  SectionContextDefault,
  SectionProps as KDSSectionProps,
} from '@kickstartds/base/lib/section';
import { Button } from '@kickstartds/base/lib/button';
import './SectionSlider.js';

import './_section.scss';

export type SectionProps = KDSSectionProps;

/**
  The Section component is used to segment components into layouts.
*/
export const Section = ({ width, background, ...props }) => {
  if (props.mode === 'slider') {
    const {
      headline,
      mode,
      className,
      children = [],
      spaceBefore,
      spaceAfter,
      ...rest
    } = props;
    return (
      <>
        {headline && headline.content ? (
          <SectionContextDefault
            headline={headline}
            spaceBefore={spaceBefore}
            spaceAfter="none"
            width={width}
            background={background}
          />
        ) : null}
        <SectionContextDefault
          className={classNames(className, 'l-section--slider', 'lazyload')}
          data-component="tsnm.section-slider"
          data-expand="-250"
          mode={mode}
          spaceBefore={headline && headline.content ? 'none' : spaceBefore}
          spaceAfter="none"
          width={width}
          background={background}
          {...rest}
        >
          {Children.map(children, (child) => (
            <div className="l-section--slider__slide fade-in fade-in-bottom">
              {child}
            </div>
          ))}
        </SectionContextDefault>
        <SectionContextDefault
          width={width}
          spaceBefore="none"
          spaceAfter={spaceAfter}
          background={background}
        >
          <div className="l-section--slider__arrows">
            <Button
              iconAfter
              className="c-button--slider-arrow"
              icon={{
                icon: 'chevron-left',
              }}
              disabled
            />
            <Button
              iconAfter
              className="c-button--slider-arrow"
              icon={{
                icon: 'chevron-right',
              }}
            />
          </div>
        </SectionContextDefault>
      </>
    );
  }

  return (
    <SectionContextDefault width={width} background={background} {...props} />
  );
};

export const SectionProvider = (props) => (
  <SectionContext.Provider value={Section} {...props} />
);
