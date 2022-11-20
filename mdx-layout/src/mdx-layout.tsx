import React from 'react';
import { MDXProvider } from '@mdx-js/react';

import { extendTheme, ChakraProvider } from '@chakra-ui/react';

import { IconSprite } from '~/icon-sprite/src/IconSprite';
import { Header } from '~/header/src/Header';
import { Footer } from '~/footer/src/Footer';
import { Section } from '~/section/src/Section';

import theme from '../../chakra-theme/src/theme';

import '@divriots/dockit-react/style.css';
import '~/mdx-layout/src/styleshowcase.css';
import '~/mdx-layout/src/docs.scss';

import '@kickstartds/core/lib/design-tokens/tokens.css';
import '@kickstartds/base/lib/global/base.js';
import '@kickstartds/base/lib/global/base.css';

import '~/colors/src/tokens.css';

export const Layout = (props) => (
  <ChakraProvider theme={theme}>
    <MDXProvider>
      <IconSprite />
      <Header />
      <Section width="default" background="default">
        <main>{props.children}</main>
      </Section>
      <Footer />
    </MDXProvider>
  </ChakraProvider>
);
