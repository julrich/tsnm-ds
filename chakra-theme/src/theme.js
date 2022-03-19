import { extendTheme } from '@chakra-ui/react';

const overrides = {
  styles: {
    global: {
      // styles for the `body`
      body: {
        bg: 'var(--color-secondary-lighter-2)',
        color: 'var(--color-primary-darker-3)',
      },
      // styles for the `a`
      a: {
        color: 'var(--color-primary)',
        _hover: {
          textDecoration: 'underline',
        },
      },
    },
  },
};

export default extendTheme(overrides);
