
import useLocalStorage from 'hooks/useLocalStorage';

const useDarkMode = (initialValue) => {

  const [ darkMode, setDarkMode ] = useLocalStorage('darkMode', Boolean(initialValue));

  return [ darkMode, setDarkMode ];
}

export default useDarkMode;