'use strict';

/**
 * This is the main entry file for a child design system's React components.
 * It should contain all exported JS from the core CMS design system
 * and all additional child design system code.
 *
 * The CMSDS build scripts rely on this entry file's location (`src/components/index.js`) to transpile JS.
 * Modify `babel.config.js` to configure the build files.
 */

import './Button';

export * from "@cmsgov/design-system";

export * from './Footer/I18nFooter';
export * from './Header/I18nHeader';
export * from './Header/defaultMenuLinks';
export * from './Logo/Logo';
