import ActionMenu from './ActionMenu';
import React from 'react';
import { mount } from 'enzyme';

describe('ActionMenu', function () {
  const handleMenuToggleClick = jest.fn();

  beforeEach(() => {
    handleMenuToggleClick.mockReset();
  });

  describe('logged-in version', () => {
    function component(props = {}) {
      return (
        <ActionMenu
          loggedIn
          locale="en"
          firstName="John"
          onMenuToggleClick={handleMenuToggleClick}
          {...props}
        />
      );
    }
    it('renders logged-in version', () => {
      expect(mount(component())).toMatchSnapshot();
    });

    it('set aria-expanded to true', () => {
      expect(mount(component({ open: true }))).toMatchSnapshot();
    });

    it('calls onMenuToggleClick', () => {
      const wrapper = mount(component());
      const button = wrapper.find('Button');

      button.simulate('click');

      expect(handleMenuToggleClick.mock.calls.length).toBe(1);
    });
  });

  describe('logged-out version', () => {
    /* eslint-disable react/no-multi-comp */
    function component(props = {}) {
      return (
        <ActionMenu
          loggedIn={false}
          locale="en"
          onMenuToggleClick={handleMenuToggleClick}
          {...props}
        />
      );
    }
    /* eslint-enable */

    it('renders logged-out version', () => {
      expect(mount(component())).toMatchSnapshot();
    });

    it('renders links with absolute URLs', () => {
      expect(
        mount(component({ primaryDomain: 'https://www.healthcare.gov' }))
      ).toMatchSnapshot();
    });

    it('renders custom locale switch link', () => {
      expect(
        mount(
          component({
            switchLocaleLink: 'https://ayudalocal.cuidadodesalud.gov/es',
          })
        )
      ).toMatchSnapshot();
    });
  });
});
