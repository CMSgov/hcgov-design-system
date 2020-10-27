import LoggedOutLinks from './LoggedOutLinks';
import React from 'react';
import { shallow } from 'enzyme';

describe('LoggedOutLinks', function () {
  it('renders logged out links', () => {
    expect(shallow(<LoggedOutLinks locale="en" />)).toMatchSnapshot();
  });

  it('renders logged out links for Direct Enrollment', () => {
    expect(
      shallow(<LoggedOutLinks locale="en" deConsumer />)
    ).toMatchSnapshot();
  });

  it('renders logged out links with absolute URLs', () => {
    expect(
      shallow(
        <LoggedOutLinks
          locale="en"
          primaryDomain="https://www.healthcare.gov"
        />
      )
    ).toMatchSnapshot();
  });

  it('renders custom locale switch link', () => {
    expect(
      shallow(
        <LoggedOutLinks
          locale="en"
          switchLocaleLink="https://ayudalocal.cuidadodesalud.gov/es"
        />
      )
    ).toMatchSnapshot();
  });
});
