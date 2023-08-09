import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { controlTheme } from '../hooks/controlTheme';
import { useState } from 'react';

const lightTheme = createTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#000000', // Color oscuro para el modo claro
    },
  },
});

const darkTheme = createTheme({
  palette: {
    type: 'dark',
    primary: {
      main: '#ffffff', // Color claro para el modo oscuro
    },
  },
});

export const ButtonTheme = () => {
  const {themeSwitch,active} = controlTheme();
  const [isDark, setIsDark] = useState(active);

  const switchDark = () =>{
    setIsDark(!isDark)
    themeSwitch()
  }

  return (
    <button className='w-9 h-auto p-1 bg-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 shadow-lg rounded-full m-2 dark:bg-gray-600  transition-all duration-500 ease'
    onClick={switchDark }
    >
      <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
          {isDark ? <Brightness4Icon color="primary" style={{ fontSize: 22 }}/> : <Brightness7Icon color="primary" style={{ fontSize: 22 }}/>}
      </ThemeProvider>
    </button>
  );
};
