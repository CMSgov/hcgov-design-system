import ActionMenu from './ActionMenu';
import DeConsumerMessage from './DeConsumerMessage';
import Logo from '../Logo/Logo';
import Menu from './Menu';
import PropTypes from 'prop-types';
import React from 'react';
import { SkipNav } from '@cmsgov/design-system';
import classnames from 'classnames';
import defaultMenuLinks from './defaultMenuLinks';
import localeLink from './localeLink';
import { translate } from 'react-i18next';
import { translate as translateWrapper } from '../i18n';

export const LOGGED_IN_VAL = 'logged-in';

/**
 * The top-level component, responsible for maintaining the
 * header's state (like whether the mobile menu is expanded) and
 * determining which variation of the header to display
 */
export class _Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      openMenu: false,
      hideLoginLink: false,
      hideLanguageSwitch: false,
    };
  }

  isLoggedIn() {
    return this.variation() === LOGGED_IN_VAL;
  }

  /**
   * Content rendered within <Menu>, after the list of links
   * @returns {Node}
   */
  afterMenuLinks() {
    if (this.isLoggedIn()) {
      const { initialLanguage = 'en', primaryDomain } = this.props;
      const i18nOptions = { lng: initialLanguage };

      return (
        <a
          className="hc-c-menu__link ds-u-border-top--1 ds-u-margin-x--1 ds-u-padding-x--0"
          href={`${primaryDomain}/logout`}
        >
          {translateWrapper('header.logout', i18nOptions)}
        </a>
      );
    }
  }

  /**
   * Content rendered within <Menu>, before the list of links
   * @returns {Node}
   */
  beforeMenuLinks() {
    if (this.isLoggedIn() && this.props.firstName) {
      return (
        <div className="ds-u-sm-display--none ds-u-border-bottom--1 ds-u-margin-x--1 ds-u-padding-y--1 hc-c-header__name">
          {this.props.firstName}
        </div>
      );
    }
  }

  /**
   * Event handler for when the "Menu" or "Close" button
   * within ActionMenu is clicked.
   */
  handleMenuToggleClick = () => {
    this.setState({ openMenu: !this.state.openMenu });
  };

  /**
   * Determines which variation of the header should be displayed,
   * based on the props being passed into the component.
   * @returns {String} Variation name
   */
  variation() {
    if (this.props.loggedIn) {
      // Logged-in state, with minimal navigation
      return LOGGED_IN_VAL;
    } else if (this.props.subhead) {
      // Product, with minimal navigation and a subheading
      return 'minimal';
    }

    return 'home';
  }

  // if header is in authenticated state, add language link to the end of other links
  // if unauthenticated, return original link list
  getLinksWithLocale(links) {
    if (this.isLoggedIn()) {
      const localeLinkItem = localeLink(
        this.props.t,
        this.props.initialLanguage,
        this.props.subpath,
        this.props.switchLocaleLink
      );

      return [...links, localeLinkItem];
    }
    return links;
  }

  render() {
    const classes = classnames(
      `hc-c-header hc-c-header--${this.variation()}`,
      this.props.className
    );

    const links =
      this.props.links ||
      defaultMenuLinks(
        this.props.initialLanguage,
        this.props.deConsumer,
        this.props.subpath,
        this.props.primaryDomain,
        this.props.switchLocaleLink,
        this.props.hideLoginLink,
        this.props.hideLanguageSwitch
      )[this.variation()];
    const linksWithLocale = this.getLinksWithLocale(links);

    return (
      <header className={classes} role="banner">
        <SkipNav href={this.props.skipNavHref} onClick={this.props.onSkipNavClick}>
          {this.props.t('header.skipNav')}
        </SkipNav>

        <div className="ds-l-container">
          <div className="ds-l-row ds-u-align-items--center ds-u-flex-wrap--nowrap ds-u-padding-y--2">
            <a
              href={this.props.primaryDomain ? this.props.primaryDomain : '/'}
              className="hc-c-logo-link ds-l-col ds-l-col--auto"
            >
              <Logo locale={this.props.initialLanguage} />
            </a>

            {this.props.subhead && (
              <div className="hc-c-header__subhead hc-c-header__subhead--inline ds-u-md-display--block ds-u-display--none">
                {this.props.subhead}
              </div>
            )}

            <ActionMenu
              firstName={this.props.firstName}
              onMenuToggleClick={this.handleMenuToggleClick}
              locale={this.props.initialLanguage}
              loggedIn={this.props.loggedIn}
              hideLoginLink={this.props.hideLoginLink}
              hideLanguageSwitch={this.props.hideLanguageSwitch}
              open={this.state.openMenu}
              deConsumer={this.props.deConsumer}
              subpath={this.props.subpath}
              primaryDomain={this.props.primaryDomain}
              switchLocaleLink={this.props.switchLocaleLink}
            />
          </div>
        </div>

        {this.props.subhead && (
          <div className="hc-c-header__subhead ds-l-container ds-u-display--block ds-u-md-display--none ds-u-padding-y--1 ds-u-border-top--1 ds-u-border-color--inverse">
            {this.props.subhead}
          </div>
        )}

        <Menu
          afterLinks={this.afterMenuLinks()}
          beforeLinks={this.beforeMenuLinks()}
          links={linksWithLocale}
          open={this.state.openMenu}
          primaryDomain={this.props.primaryDomain}
        />

        {this.props.deConsumer && <DeConsumerMessage deBrokerName={this.props.deBrokerName} />}
      </header>
    );
  }
}

_Header.defaultProps = {
  initialLanguage: 'en',
  skipNavHref: '#main',
};

/* eslint-disable react/no-unused-prop-types */
_Header.propTypes = {
  /**
   * Additional classes to be added to the root `<header>` element.
   */
  className: PropTypes.string,
  /**
   * The language the header will render as.
   */
  initialLanguage: PropTypes.oneOf(['en', 'es']),
  /**
   * For applications that handle their own locale switching. Overrides the
   * default locale link. The link's label is still determined by the opposite
   * of the `initialLanguage` provided, i.e. if `initialLanguage` is `en`,
   * the link's label will always be "Español". This takes precedence over the
   * `subpath` prop.
   */
  switchLocaleLink: PropTypes.string,
  /**
   * Indicate that a user is logged-in.
   */
  loggedIn: PropTypes.bool,
  /**
   * When set to true, do not display the Login text in the upper right of the
   * header
   */
  hideLoginLink: PropTypes.bool,
  /**
   * When set to true, do not display the the switch locale link
   */
  hideLanguageSwitch: PropTypes.bool,
  /**
   * For logged-in users, pass in their first name to display in the header
   */
  firstName: PropTypes.node,
  /**
   * For product headers, pass in the product name to display next to the logo.
   */
  subhead: PropTypes.node,
  /**
   * For applications hosted at paths other than the root `healthcare.gov`/
   * `cuidadodesalud.gov`. This string will be appended to the end of the
   * language links so as to keep the user within the same part of the site
   * when switching languages.
   */
  subpath: PropTypes.string,
  /**
   * The primary, or root domain where the majority of header links should be
   * hosted.  By default, links render with relative paths, but providing this
   * prop will force all links to render with absolute paths based on the
   * provided string. The string should include the protocol (`http://` or
   * `https://`) and the domain only, with no trailing slash. For example, if
   * the provided string is `https://test.healthcare.gov`, the login link will
   * render as `https://test.healthcare.gov/login` instead of just `/login`.
   * Note that this is only really necessary if your application is hosted on a
   * subdomain, such as `https://localhelp.healthcare.gov`, where relative links
   * would direct the user to the wrong location, e.g. the link to `/login`
   * would incorrectly direct the user to
   * `https://localhelp.healthcare.gov/login` when it should direct the user to
   * `https://healthcare.gov/login`.
   */
  primaryDomain: PropTypes.string,
  /**
   * A URL hash used for the "Skip to main content" link. This is
   * typically the `id` of your "main" content area (ie. `#main`).
   */
  skipNavHref: PropTypes.string,
  /**
   * An onClick handler used for the "Skip to main content" link. This can
   * be used in cases where one would need to manually set the focus on the
   * content area (e.g. where hash routing is being used).
   */
  onSkipNavClick: PropTypes.func,
  /**
   * Indicates when a consumer is coming from a Direct Enrollment flow.
   * This will include additional messaging and modify some of the links.
   */
  deConsumer: PropTypes.bool,
  /**
   * Used in conjunction with `deConsumer`, the Direct Enrollment broker's
   * name is used in some of the messaging displayed to the consumer.
   */
  deBrokerName: PropTypes.string,
  /**
   * Optionally pass in an array of link objects to override the default
   * set of menu links. This may be useful if you need to customize the
   * links on a page-by-page basis. To reference the default set of menu
   * links, you can import the `defaultMenuLinks` method.
   */
  links: PropTypes.arrayOf(
    PropTypes.shape({
      href: PropTypes.string.isRequired,
      label: PropTypes.node.isRequired,
      onClick: PropTypes.func,
    })
  ),
};

export const Header = translate()(_Header);
export default Header;
