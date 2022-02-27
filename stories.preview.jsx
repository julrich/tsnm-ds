import { IconSpriteDecorator } from '~/icon-sprite/src/IconSpriteDecorator';

// how would using the decorator work here? Seemed not to work
import '@kickstartds/core/lib/design-tokens/tokens.css';
import '@kickstartds/base/lib/global/base.js';
import '@kickstartds/base/lib/global/base.css';

import '~/colors/src/tokens.css';

export const decorators = [IconSpriteDecorator];
