import styled from 'styled-components';

export default styled.a`
  display: inline-flex;
  padding: 0.25em 1em;
  margin: 1em;
  text-decoration: none;
  border-radius: 4px;
  -webkit-font-smoothing: antialiased;
  -webkit-touch-callout: none;
  user-select: none;
  cursor: pointer;
  outline: 0;
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-weight: bold;
  font-size: 12px;
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
