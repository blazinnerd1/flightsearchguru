import styled from 'styled-components';
import Select from 'react-select';

const StyledSelect = styled(Select)`
  outline: none;
  border-bottom: 1px dotted #999;
  margin-left: 5px;
  text-align: center;
  display: inline-block;
  width: 6em;
  position: relative;
`;

export default StyledSelect;
