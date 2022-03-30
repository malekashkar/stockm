import styled from "styled-components";

const Button = styled.button`
  background-color: #7289da;
  border: none;
  border-radius: 7.5px;
  color: white;
  display: inline-block;
  font-size: 16px;
  height: 3em;
  outline: none;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  width: 15em;
  &:hover {
    background-color: #7e99fa;
    cursor: pointer;
  }
  &:disabled {
    background-color: #868891;
    cursor: not-allowed;
  }
`;

export default Button;