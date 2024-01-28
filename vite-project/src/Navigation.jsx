import { useBlackTheme } from './Theme';

const Navigation = () => {
  const { AlterTheme, changeTheme }= useBlackTheme();

  return (
    <div className={`nav ${AlterTheme ? 'dark-theme' : 'light-theme'}`}>
      <h1>Where in the world?</h1>
      <div className="inner-nav">

        <div>
          <button onClick={changeTheme}>
            {AlterTheme? 'Light' : 'Dark'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navigation;