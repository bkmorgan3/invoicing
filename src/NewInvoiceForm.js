import React, {useState} from 'react';
import styled from 'styled-components';

const Form = styled.form`
  height: 500px;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  border: 2px solid green;
`;

const NewInvoiceForm = props => {
  const defaultFormState = {id: null, name: '', email: '', due: '', description: '', amount: ''}
  const [invoice, setInvoice] = useState(defaultFormState)
  return (
    <Form>
      <label htmlFor="name">Name</label>
      <input type="text" name="name"/>
      <label htmlFor="email">Email</label>
      <input type="text" name="email"/>
      <label htmlFor="due">Due Date</label>
      <input type="text" name="due"/>
      <label htmlFor="description">Description</label>
      <input type="text" name="description" />
      <label htmlFor="amount">Amount</label>
      <input type="text" name="amount" />
      <button>+</button>
      Total:  $0.00
      <button onClick={() => props.setIsFormDisplayed(false)}>Back</button>
      <button type="submit">Create</button>
    </Form>
  )
}

export default NewInvoiceForm;