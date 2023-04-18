import styled from "styled-components";

export const Slide = styled("div")`
  width: 239px !important;
  height: 304px;
  background-image: ${props => `url(${props.image})`};
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;
