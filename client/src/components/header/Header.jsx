import PropTypes from 'prop-types';

const Header = ({ theme, setTheme }) => {
    const localTheme = localStorage.theme
    console.log(localTheme);
    setTheme(localTheme)
    const handleTheme = (theme) => {
        setTheme(theme)
        localStorage.setItem('theme', theme)
    }
    return (
        <div>
            {
                theme === 'dark' ?
                    <button onClick={() => handleTheme('light')}>light</button>
                    :
                    <button onClick={() => handleTheme('dark')}>dark</button>
            }



            <div>
                
            </div>
        </div>
    );
};

Header.propTypes = {
    theme: PropTypes.string,
    setTheme: PropTypes.func,
};

export default Header;