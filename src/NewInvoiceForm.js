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
`;

const InternalLabel = styled.label`
  margin-bottom: 20px;
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

      <Field>
        <InternalDiv>
          <InternalLabel htmlFor="description">Description</InternalLabel>
          <DescInput type="text" name="description" />
        </InternalDiv>

        <InternalDiv>
          <InternalLabel htmlFor="amount">Amount</InternalLabel>
          <input type="text" name="amount" />
        </InternalDiv>
      </Field>

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