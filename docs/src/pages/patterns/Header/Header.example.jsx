import { Button, ChoiceList, Header, TextField } from '@design-system';
import React from 'react';
import ReactDOM from 'react-dom';

const localeChoices = [
  { value: 'en', label: 'English' },
  { value: 'es', label: 'Español' },
];

class HeaderExample extends React.PureComponent {
  constructor() {
    super();

    this.state = {
      locale: 'en',
    };
  }

  renderHeaderToggles() {
    const { locale } = this.state;
    const locales = localeChoices.map((choice) => ({
      ...choice,
      checked: choice.value === locale,
    }));

    return (
      <div className="ds-u-margin-top--4">
        <ChoiceList
          label="Change language"
          name="locale"
          choices={locales}
          onChange={(event) => this.setState({ locale: event.target.value })}
          type="radio"
        />
      </div>
    );
  }

  render() {
    const { locale } = this.state;
    const wrapperClassNames = 'ds-u-padding--1';

    const SampleLearnSubmenu = () => (
      <div className="ds-u-display--flex">
        <div className="ds-u-margin-right--1" style={{ flex: 1 }}>
          <TextField
            fieldClassName="ds-u-margin-y--0"
            labelClassName="ds-u-display--none"
            label="Search"
            name="SubmenuSearch"
          />
        </div>
        <Button>Search</Button>
      </div>
    );

    return (
      // Add min-height so the options don't get cut off when switching to product-de
      <div style={{ minHeight: 679 }}>
        <h6 className="preview__label">Minimal</h6>
        <Header initialLanguage={locale} hideLoginLink hideLanguageSwitch />
        <h6 className="preview__label">Product</h6>
        <Header subhead="Tax Tools" subpath="tax-tool/" initialLanguage={locale} />
        <h6 className="preview__label">Homepage / Learn</h6>
        <Header initialLanguage={locale} submenuTop={<SampleLearnSubmenu />} />
        <h6 className="preview__label">Logged-In</h6>
        <Header loggedIn firstName="Maximiliano-Longname" initialLanguage={locale} />
        <h6 className="preview__label">Direct Enrollment - Product </h6>
        <Header
          subhead="Verify your identity"
          deConsumer
          deBrokerName="Acme Co."
          initialLanguage={locale}
        />
        <h6 className="preview__label">Direct Enrollment - Logged-In</h6>
        <Header loggedIn deConsumer deBrokerName="Acme Co." initialLanguage={locale} />
        <div className={wrapperClassNames}>{this.renderHeaderToggles()}</div>
      </div>
    );
  }
}

ReactDOM.render(<HeaderExample />, document.getElementById('js-example'));
