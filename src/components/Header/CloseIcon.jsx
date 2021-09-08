import React from 'react';
import closeSvg from '@cmsgov/design-system/dist/images/close--primary.svg';

/**
 * wrapper around the core close icon. Not sure I'm happy with this implementation
 * @param {string} className providide additional class strings for the close icon
 * @returns {JSX}
 */

export function CloseIcon({ className }) {
  return (
    <span
      dangerouslySetInnerHTML={{ __html: closeSvg }}
      className={`hc-c-header__close-icon ds-u-valign--middle ${className}`}
    />
  );
}

export default CloseIcon;
