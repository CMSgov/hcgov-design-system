import { Choice, ChoiceList, Header } from '@design-system';
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

    return (
      // Add min-height so the options don't get cut off when switching to product-de
      <div style={{ minHeight: 679 }}>
        <h6 className="preview__label">Header minimal</h6>
        <Header initialLanguage={locale} hideLoginLink={true} hideLanguageSwitch={true} />
        <h6 className="preview__label">Header home</h6>
        <Header initialLanguage={locale} />
        <h6 className="preview__label">Header product</h6>
        <Header subhead="Tax Tools" subpath="tax-tool/" initialLanguage={locale} />
        <h6 className="preview__label">Header logged in</h6>
        <Header loggedIn={true} firstName="Maximiliano-Longname" initialLanguage={locale} />
        <h6 className="preview__label">(Direct Enrollment) Header product </h6>
        <Header
          subhead="Verify your identity"
          deConsumer={true}
          deBrokerName="Acme Co."
          initialLanguage={locale}
        />
        <h6 className="preview__label">(Direct Enrollment) Header logged in</h6>
        <Header
          loggedIn={true}
          deConsumer={true}
          deBrokerName="Acme Co."
          initialLanguage={locale}
        />
        <div className={wrapperClassNames}>{this.renderHeaderToggles()}</div>
      </div>
    );
  }
}

ReactDOM.render(<HeaderExample />, document.getElementById('js-example'));
