import ActionMenu from './ActionMenu';
import { _Header as Header } from './Header';
import React from 'react';
import { SkipNav } from '@cmsgov/design-system';
import { shallow } from 'enzyme';

function render(props) {
  props = Object.assign(
    {
      t: (key) => key,
    },
    props
  );

  return shallow(<Header {...props} />);
}

describe('Header', function () {
  it('renders full/homepage header', () => {
    expect(render()).toMatchSnapshot();
  });

  it('renders minimal/product header', () => {
    expect(render({ subhead: 'Tax tools' })).toMatchSnapshot();
  });

  it('renders Direct Enrollment banner', () => {
    expect(
      render({
        deConsumer: true,
        deBrokerName: 'Foo',
        subhead: 'Verify identity',
      })
    ).toMatchSnapshot();
  });

  it('renders logged-in header with firstName', () => {
    expect(render({ loggedIn: true, firstName: 'John' })).toMatchSnapshot();
  });

  it('renders logged-in header without firstName', () => {
    expect(render({ loggedIn: true })).toMatchSnapshot();
  });

  it('renders Spanish header', () => {
    expect(render({ initialLanguage: 'es' })).toMatchSnapshot();
  });

  it('toggles openMenu state when handleMenuToggleClick is called', () => {
    const wrapper = render();

    expect(wrapper.state().openMenu).toBe(false);

    wrapper.instance().handleMenuToggleClick();

    expect(wrapper.state().openMenu).toBe(true);
  });

  it('passes correct props to SkipNav', () => {
    const props = {
      skipNavHref: 'javascript:void(0)',
      onSkipNavClick: () => {},
    };
    const wrapper = render(props);
    const skipNav = wrapper.find(SkipNav);
    expect(skipNav.length).toEqual(1);
    expect(skipNav.props()).toMatchObject({
      href: props.skipNavHref,
      onClick: props.onSkipNavClick,
    });
  });

  it('passes inverse to ActionMenu', () => {
    const wrapper = render({ inverse: false });
    const actionMenu = wrapper.find(ActionMenu);
    expect(actionMenu.props().inversed).toBe(false);
  });

  it('passes inversed to ActionMenu', () => {
    const wrapper = render({ inversed: false });
    const actionMenu = wrapper.find(ActionMenu);
    expect(actionMenu.props().inversed).toBe(false);
  });

  it('re-renders with updated links', () => {
    const props = { loggedIn: true };
    const wrapper = render(props);

    let menu = wrapper.find('Menu');
    expect(menu.prop('links').length).toBe(3);

    wrapper.setProps({ links: [{ href: '/foo', label: 'Foo' }] });
    menu = wrapper.find('Menu');

    expect(menu.prop('links').length).toBe(1);
  });

  it('renders links with absolute URLs if provided a primaryDomain prop', () => {
    expect(
      render({ primaryDomain: 'https://www.healthcare.gov' })
    ).toMatchSnapshot();
  });
});
