import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  a:link, a:visited, a:hover, a:active {
    text-decoration: none;
    color: ${props => props.theme.palette.text.primary};
  }
`
