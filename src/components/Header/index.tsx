import React from 'react';
import { Link } from 'gatsby';

import MainNav from './MainNav';
import SwitchThemeMode from './SwitchThemeMode';

import { HeaderWrapper, Title } from './styles';

interface Props {
  siteTitle: string;
}

const Header: React.FC<Props> = ({ siteTitle }) => (
  <HeaderWrapper>
    <MainNav />
  </HeaderWrapper>
);

Header.defaultProps = {
  siteTitle: ``
};

export default Header;
