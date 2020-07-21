import React, {useState} from 'react';
import styled from 'styled-components';
import Header from './Header';
import InvoiceContainer from './InvoiceContainer';
import NewInvoiceForm from './NewInvoiceForm';

const Container = styled.div`
  height: 100vh;
  margin: 10px 15px;
  font-family: sans-serif;
  font-size: 24px;
  max-width: 1300px;
`;

const CreateInvoiceButton = styled.button`
  width: 155px;
  text-transform: uppercase;
  margin-top: 30px;
  height: 40px;
  background-color: #b9deed;
  border-radius: 5px;
  font-weight: bold;
  font-size: 14px;
  letter-spacing: 1px;
  display: inline-block;
  margin-left: 1130px;
  border: 1px solid grey; 
`;

const pendingInvoices = [
  {id: 1, name: 'Justin Fox', email: 'foxrate@yahoo.com', due: '11/20/2020', total: '$10.00'},
  {id: 2, name: 'Scott Fallout', email: 'dcf@gmail.com', due: '08/10/2020', total: '$25.00'},
  {id: 3, name: 'Jim D', email: 'DJims@gmail.com', due: '12/20/2020', total: '$44.00'}
]

const App = () => {
  const [invoices, setInvoices] = useState(pendingInvoices)
  const [isFormDisplayed, setIsFormDisplayed] = useState(false)

  const addInvoice = (invoice) => {
    invoice.id = invoices.length + 1
    setInvoices(...invoices, invoice)
  }
  
  return (
    <Container>
      <Header />
      <CreateInvoiceButton onClick={() => setIsFormDisplayed(!isFormDisplayed) }> {isFormDisplayed ? 'Back' : 'Create Invoice'}</CreateInvoiceButton> 
        {isFormDisplayed ? 
          <NewInvoiceForm setIsFormDisplayed={setIsFormDisplayed} addInvoice={addInvoice} /> :    
          <InvoiceContainer invoices={invoices} />
          }
      </Container>
    )
  
}

export default App;
