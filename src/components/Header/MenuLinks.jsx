import PropTypes from 'prop-types';
import React from 'react';

/**
 * The primary list of menu links. This ensures a consistent styling
 * across header variations. On the homepage, this list is displayed
 * horizontally on desktop. In other versions, this list is visible
 * when the "Menu" button is toggled and displayed as a stacked list.
 */
const MenuLinks = function (props) {
  return (
    <ul className="hc-c-menu__links ds-c-list ds-c-list--bare">
      {props.links.map(function (link) {
        return (
          <li key={link.href} className="ds-u-margin--0">
            <a
              href={link.href}
              onClick={link.onClick}
              className="hc-c-menu__link"
            >
              {link.label}
            </a>
          </li>
        );
      })}
    </ul>
  );
};

MenuLinks.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      href: PropTypes.string.isRequired,
      label: PropTypes.node.isRequired,
      onClick: PropTypes.func,
    })
  ).isRequired,
};

export default MenuLinks;
