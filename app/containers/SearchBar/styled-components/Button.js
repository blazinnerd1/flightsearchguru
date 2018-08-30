import styled from 'styled-components';

export default styled.button`
  display: inline-flex;
  height: 38px;
  padding: 0.25em 1em;
  margin: 1em;
  background-color: white;
  text-decoration: none;
  border-radius: 4px;
  -webkit-font-smoothing: antialiased;
  -webkit-touch-callout: none;
  user-select: none;
  cursor: pointer;
  outline: 0;
  font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-weight: bold;
  font-size: 16px;
  border: 1px solid #0f7bff;
  color: #0f7bff;

  &:hover {
    background: #0f7bff;
    color: #fff;
  }

  &:active {
    background: #40dd81;
    color: #fff;
    border: 1px solid #40dd81;
  }
`;
