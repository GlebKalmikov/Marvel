import { useContext, useState } from 'react';
import { ThemeContext } from '../../App';

import Container from '../Container/Container';
import logo from '../../images/logo.png'

import './header.scss';

const Header = ({ children }) => {
  const theme = useContext(ThemeContext);

  return (
    <header className={`header header--${theme.theme}`}>
      <Container>
        <div className='header__content'>
          <div className='header__logo'>
            <img src={logo} alt="Logo" />
          </div>
          {children}
        </div>
      </Container>
    </header>
)};


export default Header;
