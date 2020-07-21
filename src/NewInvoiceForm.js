import React, {useState} from 'react';
import styled from 'styled-components';

const Form = styled.form`
  height: 500px;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  /* border: 2px solid green; */
`;

const Field = styled.div`
  /* border: 1px solid red; */
  display:flex;
  justify-content: space-around;
  margin-top: 0;
  margin-bottom: 1rem;
`;

const InputField = styled.input`
  width: 180px;
  height: 30px;
`;

const NewInvoiceForm = props => {
  const defaultFormState = {id: null, name: '', email: '', due: '', description: '', amount: ''}
  const [invoice, setInvoice] = useState(defaultFormState)
  return (
    <Form>

      <Field >
        <label htmlFor="name">Name</label>
        <InputField placeholder="Name" type="text" name="name"/>
      </Field>

      <Field>
        <label htmlFor="email">Email</label>
        <InputField placeholder="Email" type="text" name="email"/>
      </Field>

      <Field>
        <label htmlFor="due">Due </label>
        <InputField type="date" name="due"/>
      </Field>

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