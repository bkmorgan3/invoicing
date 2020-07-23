import React, { useState, useEffect } from 'react';
import styled from 'styled-components';


// STYLED ELEMENTS
const Form = styled.form`
  height: 500px;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
`;

const Field = styled.div`
  display:flex;
  justify-content: space-around;
  margin-top: 0;
  margin-bottom: 1rem;
`;

const InputField = styled.input`
  width: 380px;
  height: 30px;
  border: 1px solid #444;
  border-radius: 3px;
`;

const InternalDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 50px;
  /* border: 1px solid green; */
  width: 30%;
`;

const DescInput = styled.input`
  width:210px;
  height: 30px;
  border-radius: 3px;
  border: 1px solid #555;
`;

const InternalLabel = styled.label`
  margin-bottom: 20px;
`;

const AmountInput = styled.input`
  width: 60px;
  margin-left: 250px;
  height: 30px;
  border-radius: 3px;
`;

const AmountLabel = styled.label`
  margin-left: 250px;
  margin-bottom: 20px;
`;

// THE COMPONENT
const EditInvoiceForm = props => {
  const {name, email, due, id, amount} = props.currentInvoice

  const defaultFormState = { id: null, name: '', email: '', due: '', total: '', description: '' }
  const [invoice, setInvoice] = useState(props.currentInvoice)
  const [total, setTotal] = useState(0)

  /* I copy/pasted the NewInvoiceForm 
  planning to have the same form render but
  with pre-filled inputs based on state data.
  */

 const handleInvoiceChange = e => {
   const {name, value} = e.target

   setInvoice({ ...invoice, [name]: value })
 }

  return (
    <Form onSubmit={e => {
      // if there are missing values return early, but a warning would be nice.
      // if (!invoice.name || !invoice.email || !invoice.due || !invoice.total) return
      e.preventDefault();
      props.updateInvoice(invoice.id, invoice)
      setInvoice(defaultFormState)
      
    }}>

      <Field >
        <label htmlFor="name">Name</label>
        <InputField placeholder="Name" type="text" name="name" value={name} onChange={handleInvoiceChange} />
      </Field>

      <Field>
        <label htmlFor="email">Email</label>
        <InputField placeholder="Email" type="text" name="email" value={email} onChange={handleInvoiceChange} />
      </Field>

      <Field>
        <label htmlFor="due">Due </label>
        <InputField type="date" name="due" value={due} onChange={handleInvoiceChange} />
      </Field>

      <Field>

        <InternalDiv>
          <AmountLabel htmlFor="amount">Amount</AmountLabel>
          <AmountInput type="number" name="amount" value={amount} onChange={handleInvoiceChange} />
        </InternalDiv>

      </Field>

    <button onClick={() => props.setEditing(false)} type="button">Back</button>
    <button onClick={() => {
        props.deleteInvoice(id) 
        props.setEditing(false)
    }} type="button">Delete</button>
    <button type="submit">Save</button>
    </Form>
  )
}

export default EditInvoiceForm;