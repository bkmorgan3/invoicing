import React, {useState} from 'react';

const NewInvoiceForm = props => {
  const defaultFormState = {id: null, name: '', email: '', due: '', description: '', amount: ''}
  const [invoice, setInvoice] = useState(defaultFormState)
  return (
    <form>
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
      <button>Back</button>
      <button>Create</button>
    </form>
  )
}

export default NewInvoiceForm;