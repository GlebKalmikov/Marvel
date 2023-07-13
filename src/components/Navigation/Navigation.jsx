import { useContext, useState } from 'react';
import { NavLink } from 'react-router-dom';
import './navigation.scss';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import { ThemeContext } from '../../App';

const Navigation = () => {
  const theme = useContext(ThemeContext);
  const [checked, setChecked] = useState(false);

  const handleChange = (e) => {
    setChecked(e.target.checked ? true : false);
    theme.setTheme(e.target.checked ? 'dark' : 'light');
    document.querySelector('body').classList.toggle('dark')
  };

  return (
    <nav className={`nav nav--${theme.theme}`}>
      <ul className="nav__list">
        <li className="nav__list-item">
          <NavLink to="/" className="nav__list-link">
            Home
          </NavLink>
        </li>
        <li className="nav__list-item">
          <NavLink to="/comics" className="nav__list-link">
            Asgard
          </NavLink>
        </li>
        <li className="nav__list-item">
          <NavLink to="/characters" className="nav__list-link">
            Characters
          </NavLink>
        </li>
        <li className="nav__list-item">
          <NavLink to="/about" className="nav__list-link">
            About
          </NavLink>
        </li>
        <FormGroup>
          <FormControlLabel
            control={<Switch onChange={handleChange} checked={checked} />}
            label={`${theme.theme === 'dark' ? 'Light' : 'Dark'} side`}
          />
        </FormGroup>
      </ul>
    </nav>
  );
};

export default Navigation;
