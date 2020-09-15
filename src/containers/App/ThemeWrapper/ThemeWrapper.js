import React, { useState } from 'react';
import { ThemeProvider } from '@material-ui/styles';
import themeTCASH from '../../../theme';
import extProps from './propTypes';

/*
 *
 * Material-Design theme wrapper loaded with TCASH theme
 *
 */
const ThemeWrapper = ({ children }) => {
  const [theme] = useState(themeTCASH);

  return (
    <ThemeProvider theme={theme}>
      { children }
    </ThemeProvider>
  );
};

ThemeWrapper.propTypes = extProps;

export default ThemeWrapper;
