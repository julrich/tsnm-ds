import React from 'react';
import { MDXProvider } from '@mdx-js/react';
import { CoreLayout } from '@divriots/dockit-react/mdx-layout-core';

import '@divriots/dockit-react/style.css';
import '~/mdx-layout/src/styleshowcase.css';
import '~/mdx-layout/src/docs.scss';

import '@kickstartds/core/lib/design-tokens/tokens.css';
import '@kickstartds/base/lib/global/base.js';
import '@kickstartds/base/lib/global/base.css';

import '~/colors/src/tokens.css';

export const Layout = (props) => (
  <MDXProvider>
    <CoreLayout
      logo={
        <div className="logo">
          <img
            className="logo__image"
            src="https://i1.sndcdn.com/avatars-000003159261-cat82d-t200x200.jpg"
          />
          <span className="logo__text">Personal homepage of TSNM</span>
        </div>
      }
      {...props}
    />
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/water.css@2/out/light.css"
    />
  </MDXProvider>
);
