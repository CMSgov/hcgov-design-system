import PropTypes from 'prop-types';
import React from 'react';
import defaultMenuLinks from './defaultMenuLinks';

/**
 * The list of links displayed horizontally in the header in the logged-out
 * menu. This by default is the login link and the language link.
 */
const LoggedOutLinks = ({
  locale,
  deConsumer,
  subpath,
  primaryDomain,
  switchLocaleLink,
}) => {
  const links = defaultMenuLinks(
    locale,
    deConsumer,
    subpath,
    primaryDomain,
    switchLocaleLink
  ).minimal;
  return (
    <ul className="hc-c-logged-out-links ds-c-list--bare ds-u-display--none ds-u-sm-display--inline-block">
      {links.map((link) => {
        return (
          <li key={link.href} className="hc-c-logged-out-links__li">
            <a href={link.href} className="hc-c-logged-out-links__link">
              {link.label}
            </a>
          </li>
        );
      })}
    </ul>
  );
};

LoggedOutLinks.propTypes = {
  locale: PropTypes.string.isRequired,
  /**
   * Indicates when a consumer is coming from a Direct Enrollment flow.
   * This will include additional messaging and modify some of the links.
   */
  deConsumer: PropTypes.bool,
  /**
   * [See `Header.props.subpath`]({{root}}/patterns/header/#patterns.header.react)
   */
  subpath: PropTypes.string,
};

export default LoggedOutLinks;
