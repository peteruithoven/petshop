import { createMuiTheme } from '@material-ui/core/styles';
import { green, red } from '@material-ui/core/colors';

export default createMuiTheme({
  palette: {
    primary: {
      main: green[600],
    },
    secondary: {
      main: red[700],
    },
  },
  shape: {
    borderRadius: 6,
  },
});
