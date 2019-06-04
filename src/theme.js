import { createMuiTheme } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';

export default createMuiTheme({
  palette: {
    primary: green,
    contrastThreshold: 2,
  },
  shape: {
    borderRadius: 6,
  },
});
