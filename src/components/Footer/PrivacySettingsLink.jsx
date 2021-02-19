import PrivacySettingsDialog from '../PrivacySettings/PrivacySettingsDialog';
import React from 'react';
import { translate } from 'react-i18next';

class _PrivacySettingsLink extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = { showDialog: false };
  }

  openDialog = event => {
    event.preventDefault();
    this.setState({ showDialog: true });
  };

  closeDialog = () => {
    this.setState({ showDialog: false });
  };

  render() {
    return (
      <>
        <a
          href={' '}
          onClick={this.openDialog}
          className="ds-u-display--inline-block"
        >
          {this.props.t('footer.privacySettings')}
        </a>
        {this.state.showDialog && (
          <PrivacySettingsDialog onExit={this.closeDialog} />
        )}
      </>
    );
  }
}

export const PrivacySettingsLink = translate()(_PrivacySettingsLink);
export default PrivacySettingsLink;
