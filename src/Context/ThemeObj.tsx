export type ThemeColors = {
  mode: string,
  primary: string;
  secondary: string;
  background: string;
  header: string;
  text: string;
  border: string;
  ripple: string;
  post: string
}

export const LightTheme: ThemeColors = {
  mode: 'light',
  primary: '#007AFF',
  secondary: '#5AC8FA',
  background: '#F5F5F5',
  header: '#FFFFFF',
  text: '#333333',
  border: '#d6d6d6',
  ripple: '#212121',
  post: '#ffffff'
}

export const DarkTheme: ThemeColors = {
  mode: 'dark',
  primary: '#0A84FF',
  secondary: '#5AC8FA',
  background: '#212121',
  header: '#0f0f0f',
  text: 'rgba(255, 255, 255, 0.92)',
  border: 'rgba(255, 255, 255, 0.3)',
  ripple: '#fafafa',
  post: '#0f0f0f'
}

