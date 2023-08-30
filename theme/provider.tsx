import React from 'react';
import { ThemeProvider as StyledComponentsThemeProvider } from 'styled-components';
import Styles from 'theme/styles';
import theme from '.';

const AppThemeProvider: React.FC = ({ children }) => (
  <StyledComponentsThemeProvider theme={theme}>
    <Styles />
    {children}
  </StyledComponentsThemeProvider>
);

export const WithThemeProvider = (themeFromProvider: any) => (story: () => JSX.Element) =>
  (
    <StyledComponentsThemeProvider theme={themeFromProvider}>
      <Styles />
      {story()}
    </StyledComponentsThemeProvider>
  );

export default AppThemeProvider;
