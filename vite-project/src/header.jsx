import React from 'react';

const Header = ({ theme, changeTheme }) => {
  return (
    <div className={`nav ${theme ? 'dark-mode-nav' : ''}`}>
      <h1>Where in the world?</h1>
      <div className="inner-nav">
        <a
          className={`${theme ? 'dark-theme' : 'light-theme'}`}
          href="#"
          onClick={() => changeTheme()}
        >
          {theme ? '🌞 Light Mode' : '🌙 Dark Mode'}
        </a>
      </div>
    </div>
  );
};

export default Header;