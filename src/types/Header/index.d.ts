import React from "react";
import { Language } from "../index";

interface Link {
  href: string,
  label: React.ReactNode,
  onClick?: (...args: any[]) => any,
}

export interface HeaderProps {
  className?: string;
  inverse?: boolean;
  inversed?: boolean;
  initialLanguage?: Language;
  switchLocaleLink?: string;
  loggedIn?: boolean;
  firstName?: React.ReactNode;
  subhead?: React.ReactNode;
  subpath?: string;
  primaryDomain?: string;
  skipNavHref?: string;
  onSkipNavClick?: func;
  deConsumer?: boolean;
  deBrokerName?: string;
  links?: Link[];
}

export class Header extends React.Component<HeaderProps, any> {
  render(): JSX.Element;
}

export default Header;

interface DefaultLinks {
  home: Link[];
  minimal: Link[];
  'logged-in': Link[];
}

export function defaultMenuLinks(
  locale: Language,
  deConsumer: boolean,
  subpath: string,
  primaryDomain: string = '',
  switchLocaleLink?: string
): DefaultLinks;

