import { createMuiTheme } from "@material-ui/core/styles";
import orange from '@material-ui/core/colors/orange';
import red from '@material-ui/core/colors/red';

export default createMuiTheme({
  typography: {
    useNextVariants: true
  },
  palette: {
    primary: orange,
    secondary: red,
  },
  shape: {
    borderRadius: 6
  },
  space: [0, 4, 8, 24, 32, 64, 128, 256, 512]
});
