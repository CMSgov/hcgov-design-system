import MenuLinks from './MenuLinks';
import React from 'react';
import { shallow } from 'enzyme';

describe('MenuLinks', function () {
  it('renders list of links', () => {
    expect(
      shallow(
        <MenuLinks
          links={[
            { href: '#foo', label: 'Foo' },
            { href: '#bar', label: 'Bar' },
            { href: '#baz', label: 'Baz', onClick: () => {} },
          ]}
        />
      )
    ).toMatchSnapshot();
  });
});
