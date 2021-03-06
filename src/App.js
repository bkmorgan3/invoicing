import React, {useState} from 'react';
import styled from 'styled-components';
import Header from './Header';
import InvoiceContainer from './InvoiceContainer';
import NewInvoiceForm from './forms/NewInvoiceForm';

const Container = styled.div`
  height: 100vh;
  margin: 10px 15px;
  font-family: sans-serif;
  font-size: 24px;
  max-width: 1300px;
  /* border: 1px solid #555; */
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


const App = () => {

  const pendingInvoices = [
    {id: 1, name: 'Justin Fox', email: 'foxrate@yahoo.com', due: '2020-10-20', total: '10.00'},
    {id: 2, name: 'Scott Fallout', email: 'dcf@gmail.com', due: '2020-10-02', total: '25.00'},
    {id: 3, name: 'Jim D', email: 'DJims@gmail.com', due: '2020-12-22', total: '44.00'}
  ]

  
  const [invoices, setInvoices] = useState(pendingInvoices)
  const [isFormDisplayed, setIsFormDisplayed] = useState(false)
  const [editing, setEditing] = useState(false)
  const [currentInvoice, setCurrentInvoice] = useState(null)
  

// Edit an Invoice
  const editInvoice = id => {
    console.log("editing", id)
    setEditing(true)
    console.log(invoices)
    setCurrentInvoice(invoices.filter(invoice => invoice.id === id)[0])
  }

  // Update an invoice
  const updateInvoice = (id, updatedInvoice) => {
    setEditing(false)

    setInvoices(oldInvoices => oldInvoices.map(invoice => invoice.id === id ? updatedInvoice : invoice))
  }

  // Add New Invoice
  const addInvoice = (invoice) => {
    invoice.id = invoices[invoices.length-1].id + 1;

    setInvoices([...invoices, invoice])
    setIsFormDisplayed(false)
  }

  // Delete an Invoice
  const deleteInvoice = id => {
    setInvoices(invoices.filter(i => i.id !== id) )
  }
  
  return (
    <Container>
      <Header />
      <CreateInvoiceButton 
        onClick={() => setIsFormDisplayed(!isFormDisplayed) }> 
        {isFormDisplayed ? 'Back' : 'Create Invoice'}
      </CreateInvoiceButton> 
       
        { isFormDisplayed ? 
          <NewInvoiceForm 
            addInvoice={addInvoice} 
            setIsFormDisplayed={setIsFormDisplayed} 
          />  :    
          <InvoiceContainer 
          editing={editing}
            deleteInvoice={deleteInvoice} 
            currentInvoice={currentInvoice} 
            editInvoice={editInvoice} 
            invoices={invoices} 
            setEditing={setEditing}
            updateInvoice={updateInvoice}
          />
          }
          
      </Container>
    )
  
}

export default App;
