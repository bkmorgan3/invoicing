import React from 'react';
import styled from 'styled-components';
import Header from './Header'

const Container = styled.div`
  height: 100vh;
  margin: 10px 15px;
`;

function App() {
  return (
    <Container>
      <Header />
    </Container>
  );
}

export default App;
