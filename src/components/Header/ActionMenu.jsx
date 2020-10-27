/* eslint-disable react/no-multi-comp, jsx-a11y/no-redundant-roles */
import { Button } from '@cmsgov/design-system';
import LoggedOutLinks from './LoggedOutLinks';
import PropTypes from 'prop-types';
import React from 'react';
import classnames from 'classnames';
import { translate } from 'react-i18next';

const menuId = 'hc-c-menu';

/**
 * ActionMenu is displayed at the top-right of the header.
 * There are two variations of this component: One for logged-out
 * users, which displays a "Log in" & "Espanol" link on desktop.
 * And another for logged-in users, which includes the user's first
 * name. The logged-in variation always displays a "Menu" toggle
 * button, and the logged-out variation only displays it on mobile.
 */
const ActionMenu = function (props) {
  return (
    <nav
      id="hc-c-header__actions"
      className="hc-c-header__actions ds-l-col ds-l-col--auto ds-u-margin-left--auto ds-u-font-weight--bold"
      role="navigation"
    >
      {props.loggedIn ? (
        <LoggedInActionMenu {...props} />
      ) : (
        <LoggedOutActionMenu {...props} />
      )}
    </nav>
  );
};

function LoggedInActionMenu(props) {
  return (
    <div>
      {props.firstName && (
        <span className="ds-u-display--none ds-u-sm-display--inline-block">
          {props.firstName}
        </span>
      )}
      <MenuButton {...props} />
    </div>
  );
}

function LoggedOutActionMenu(props) {
  return (
    <div>
      <LoggedOutLinks
        locale={props.locale}
        deConsumer={props.deConsumer}
        subpath={props.subpath}
        primaryDomain={props.primaryDomain}
        switchLocaleLink={props.switchLocaleLink}
      />
      <MenuButton
        {...props}
        className="ds-u-display--inline-block ds-u-sm-display--none"
      />
    </div>
  );
}

function MenuButton({ t, open, ...props }) {
  const className = classnames(
    'hc-c-action-menu-button',
    'ds-u-font-weight--bold',
    'ds-u-sm-margin-left--2',
    props.className
  );
  return (
    <Button
      inversed={props.inversed}
      aria-controls={menuId}
      aria-expanded={!!open}
      aria-label={open ? t('header.closeMenu') : t('header.openMenu')}
      className={className}
      onClick={props.onMenuToggleClick}
      size="small"
    >
      {open ? t('header.close') : t('header.menu')}
    </Button>
  );
}

ActionMenu.propTypes = {
  /** Applies the inverse theme styling */
  inversed: PropTypes.bool,
  firstName: PropTypes.string,
  locale: PropTypes.string.isRequired,
  loggedIn: PropTypes.bool,
  onMenuToggleClick: PropTypes.func.isRequired,
  /**
   * Indicates the menu is open, which influences the label
   * and ARIA attribute of the toggle button.
   */
  open: PropTypes.bool,
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

LoggedInActionMenu.propTypes = {
  firstName: ActionMenu.propTypes.firstName,
  onMenuToggleClick: ActionMenu.propTypes.onMenuToggleClick,
  open: ActionMenu.propTypes.open,
};

LoggedOutActionMenu.propTypes = {
  onMenuToggleClick: ActionMenu.propTypes.onMenuToggleClick,
  open: ActionMenu.propTypes.open,
  deConsumer: ActionMenu.propTypes.deConsumer,
  locale: ActionMenu.propTypes.locale,
};

MenuButton.propTypes = {
  onMenuToggleClick: ActionMenu.propTypes.onMenuToggleClick,
  open: ActionMenu.propTypes.open,
  className: PropTypes.string,
};

export default translate()(ActionMenu);
