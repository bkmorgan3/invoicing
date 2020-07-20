import React from 'react';
import styled from 'styled-components';

const Heading = styled.div`
  background-color: dodgerblue;
  text-align: center;
  color: #fff;
  text-transform: uppercase;
  padding: 3px;
  line-height: 1em;
`;


const Header = () => (
  <Heading>
    <h2>Invoice App</h2>
  </Heading>
)

export default Header;