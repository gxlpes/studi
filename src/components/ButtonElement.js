import styled from "styled-components";

import { Link } from "react-scroll";

export const Button = styled(Link)`
  border-radius: 50px;
  background: ${({ primary }) => (primary ? "#3F90A8" : "	#EC925D")};
  white-space: nowrap;
  padding: ${({ big }) => (big ? "10px 30px" : "5px 15px")};
  color: ${({ dark }) => (dark ? "#3f3f3f" : "#fff")};
  font-size: ${({ fontBig }) => (fontBig ? "1rem" : "1rem")};
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;

  &:hover {
    transition: all 0.2s ease-in-out;
    opacity: 0.5;
  }
`;
