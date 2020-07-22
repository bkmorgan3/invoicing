import React, {useState} from 'react';
import AdditionalInputs from './AdditionalInputs'
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
const NewInvoiceForm = props => {
  const defaultFormState = {id: null, name: '', email: '', due: '', total: '', description: ''}
  const [invoice, setInvoice] = useState(defaultFormState)
  const [total, setTotal] = useState(0)

  const handleChange = e => {
    const {name, value} = e.target;
    console.log(name, value)
  
    setInvoice({...invoice, [name]:value, total})
  }
 
  return (
    <Form onSubmit={e => {
      // if there are missing values return early, but a warning would be nice.
      // if (!invoice.name || !invoice.email || !invoice.due || !invoice.total) return
      e.preventDefault();
      props.addInvoice(invoice)
      setInvoice(defaultFormState)
    }}>

      <Field >
        <label htmlFor="name">Name</label>
        <InputField placeholder="Name" type="text" name="name" value={invoice.name} onChange={handleChange}/>
      </Field>

      <Field>
        <label htmlFor="email">Email</label>
        <InputField placeholder="Email" type="text" name="email" value={invoice.email} onChange={handleChange}/>
      </Field>

      <Field>
        <label htmlFor="due">Due </label>
        <InputField type="date" name="due" value={invoice.due} onChange={handleChange} />
      </Field>

      <Field>
        <InternalDiv>
          <InternalLabel htmlFor="description">Description</InternalLabel>
          <DescInput type="text" name="description" value={invoice.description} onChange={handleChange} />
        </InternalDiv>

        <InternalDiv>
          <AmountLabel htmlFor="amount">Amount</AmountLabel>
          <AmountInput type="number" name="amount" />
        </InternalDiv>
      </Field>

      {/* <div>
        <button type="button" onClick={() =>setShowInputs(true)}>More fields</button>    
      </div>
      {showInputs ? <AdditionalInputs setShowInputs={setShowInputs} /> : ''} */}
      
      <AdditionalInputs />
      <div>
       Total:  $ {total}
      </div>

      <div>
        <button type="button" onClick={() => props.setIsFormDisplayed(false)}>Back</button>
      </div>

      <div>
        <button type="submit">Create</button>
      </div>

    </Form>
  )
}

export default NewInvoiceForm;