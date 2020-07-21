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
      <div >
        <label htmlFor="name">Name</label>
        <input type="text" name="name"/>
      </div>
      <div>

        <label htmlFor="email">Email</label>
        <input type="text" name="email"/>
      </div>

      <div>
        <label htmlFor="due">Due Date</label>
        <input type="text" name="due"/>
      </div>

      <div>
        <label htmlFor="description">Description</label>
        <input type="text" name="description" />
      </div>

      <div>
        <label htmlFor="amount">Amount</label>
        <input type="text" name="amount" />
      </div>

      <div>
        <button>+</button>
      </div>
      
      <div>
       Total:  $0.00
      </div>

      <div>
        <button onClick={() => props.setIsFormDisplayed(false)}>Back</button>
      </div>

      <div>
        <button type="submit">Create</button>
      </div>

    </Form>
  )
}

export default NewInvoiceForm;