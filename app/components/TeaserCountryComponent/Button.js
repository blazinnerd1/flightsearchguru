import styled from 'styled-components';

export default styled.button`
  display: inline-flex;
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
  font-size: 12px;
  border: 1px solid #2525ff;
  color: #2525ff;

  &:hover {
    background: #2525ff;
    color: #fff;
  }

  &:active {
    background: #40dd81;
    color: #fff;
    border: 1px solid #40dd81;
  }
`;
