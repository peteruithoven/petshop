import styled from "styled-components";
import { units } from "../../../theme.js";

export default styled.div`
  color: ${props => props.theme.palette.error.main};
  margin: 0 ${units(3)} ${units(1)} ${units(3)}
`;
