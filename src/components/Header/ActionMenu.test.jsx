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
          firstName="John"
          onMenuToggleClick={handleMenuToggleClick}
          links={[]}
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
          links={[
            {
              label: 'label',
              href: 'href',
            },
          ]}
          {...props}
        />
      );
    }
    /* eslint-enable */

    it('renders logged-out version', () => {
      expect(mount(component())).toMatchSnapshot();
    });
  });
});
