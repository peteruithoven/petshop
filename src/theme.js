import { createMuiTheme } from '@material-ui/core/styles';
import { red, orange } from '@material-ui/core/colors';

export default createMuiTheme({
  palette: {
    primary: orange,
    secondary: red,
  },
  shape: {
    borderRadius: 6,
  },
});
