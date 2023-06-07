import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import profileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';
import SearchBar from './SearchBar';

export default function Header({ title }) {
  const [search, setSearch] = useState(false);
  // const location = useLocation();
  // const { pathname } = location;

  // let pageTitle = title;
  // let search = null;

  // if (pathname === '/drinks') {
  //   pageTitle = 'Drinks';
  //   search = <img src={ searchIcon } alt="search-icon" data-testid="search-top-btn" />;
  // } else if (pathname === '/meals') {
  //   pageTitle = 'Meals';
  //   search = <img src={ searchIcon } alt="search-icon" data-testid="search-top-btn" />;
  // }

  return (
    <header>
      { (title === 'Drinks' || title === 'Meals')
        && (
          <button type="button" onClick={ () => setSearch(!search) }>
            <img
              src={ searchIcon }
              alt="search-icon"
              data-testid="search-top-btn"
            />
          </button>
        ) }
      <Link to="/profile">
        <img src={ profileIcon } alt="profile-icon" data-testid="profile-top-btn" />
      </Link>
      <h2 data-testid="page-title">{ title }</h2>
      { search && <SearchBar /> }
    </header>

  //   <header>
  //     { search }
  //     <Link to="/profile">
  //       <img
  //         src={ profileIcon }
  //         alt="profile-icon"
  //         data-testid="profile-top-btn"
  //       />
  //     </Link>
  //     <h2 data-testid="page-title">{ pageTitle }</h2>
  //   </header>
  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
};