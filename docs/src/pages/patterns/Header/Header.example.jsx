import { ChoiceList, Header } from '@design-system';
import React from 'react';
import ReactDOM from 'react-dom';

const variationChoices = [
  { value: 'home', label: 'Home' },
  { value: 'product', label: 'Product' },
  { value: 'product-de', label: 'Product (DE)' },
  { value: 'logged-in', label: 'Logged-in' },
  { value: 'logged-in-de', label: 'Logged-in (DE)' },
];

const localeChoices = [
  { value: 'en', label: 'English' },
  { value: 'es', label: 'Español' },
];

class HeaderExample extends React.PureComponent {
  constructor() {
    super();

    this.state = {
      locale: 'en',
      variation: 'logged-in',
    };
  }

  renderHeaderToggles() {
    const { locale, variation } = this.state;

    const variations = variationChoices.map((choice) => ({
      ...choice,
      checked: choice.value === variation,
    }));
    const locales = localeChoices.map((choice) => ({
      ...choice,
      checked: choice.value === locale,
    }));

    return (
      <div className="ds-u-margin-top--4">
        <ChoiceList
          label="Change variation"
          name="variation"
          choices={variations}
          onChange={(event) => this.setState({ variation: event.target.value })}
          type="radio"
        />
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
    const { locale, variation } = this.state;
    const headerProps = {
      home: {},
      product: { subhead: 'Tax Tools', subpath: 'tax-tool/' },
      'product-de': {
        subhead: 'Verify your identity',
        deConsumer: true,
        deBrokerName: 'Acme Co.',
      },
      'logged-in': { loggedIn: true, firstName: 'Maximiliano-Longname' },
      'logged-in-de': {
        loggedIn: true,
        deConsumer: true,
        deBrokerName: 'Acme Co.',
      },
    };
    const wrapperClassNames = 'ds-u-padding--1';

    return (
      // Add min-height so the options don't get cut off when switching to product-de
      <div style={{ minHeight: 679 }}>
        <Header {...headerProps[variation]} initialLanguage={locale} />
        <div className={wrapperClassNames}>{this.renderHeaderToggles()}</div>
      </div>
    );
  }
}

ReactDOM.render(<HeaderExample />, document.getElementById('js-example'));
