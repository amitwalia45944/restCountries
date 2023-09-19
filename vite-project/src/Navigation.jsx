import { useDarkTheme } from './Theme';

const Navigation = () => {
  const { isDarkTheme, toggleTheme } = useDarkTheme();

  return (
    <div className={`nav ${isDarkTheme ? 'dark-theme' : 'light-theme'}`}>
      <h1>Where in the world?</h1>
      <div className="inner-nav">

        <div>
          <button onClick={toggleTheme}>
            {isDarkTheme ? 'Light' : 'Dark'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navigation;