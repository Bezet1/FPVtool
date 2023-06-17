import {createContext} from 'react';
import {ThemeColors, LightTheme} from './ThemeObj';

type ThemeContextType = {
  Theme: ThemeColors;
  setTheme: (theme: ThemeColors) => void;
};

export const ThemeContext = createContext<ThemeContextType>({
  Theme: LightTheme,
  setTheme: () => {},
});
