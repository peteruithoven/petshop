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
  }
});

export function units (num) {
  return props => `${props.theme.spacing.unit * num}px`;
}
