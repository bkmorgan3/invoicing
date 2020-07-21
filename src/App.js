import React, {useState} from 'react';
import styled from 'styled-components';
import Header from './Header';
import InvoiceContainer from './InvoiceContainer';

const Container = styled.div`
  height: 100vh;
  margin: 10px 15px;
  font-family: sans-serif;
`;

const CreateInvoiceButton = styled.button`
  width: 200px;
  text-transform: uppercase;
  margin-top: 30px;
  height: 40px;
  background-color: #b9deed;
`;

const pendingInvoices = [
  {id: 1, name: 'Justin Fox', email: 'foxrate@yahoo.com', due: '11/20/2020', total: '$10.00'},
  {id: 2, name: 'Scott Fallout', email: 'dcf@gmail.com', due: '08/10/2020', total: '$25.00'},
  {id: 3, name: 'Jim D', email: 'DJims@gmail.com', due: '12/20/2020', total: '$100.00'}
]

const App = () => {
  const [invoices, setInvoices] = useState(pendingInvoices)

  return (
    <Container>
      <Header />
      <CreateInvoiceButton> Create Invoice</CreateInvoiceButton>
      <InvoiceContainer invoices={invoices} />
    </Container>
    )
  
}

export default App;
