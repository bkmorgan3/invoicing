import React, {useState, useEffect} from 'react';
import styled from 'styled-components';

const Invoice = styled.div`
  border: 1px solid black;
  margin: 15px;
  /* padding: 30px; */
`;

const EditButton = styled.button`
  width: 100px;
  background-color: #d3d3d3;
  border-radius: 3px;
  display: inline-block;
  margin-left: 1000px;
  margin-bottom: 15px;
  height: 30px;
  text-transform: uppercase;
`;

const InvoiceItem = (props) => {
  
  const {id, name, email, editing, due, total, editInvoice, currentInvoice, deleteInvoice, setEditing, updateInvoice} = props

  const [invoice, setInvoice] = useState(currentInvoice)
  
  useEffect(() => {
    setInvoice(props.currentInvoice)
  }, [props])

  const handleChange = e => {
    const {name, value} = e.target

    setInvoice({...invoice, [name]:value})
  }
  return (
    <Invoice>
      {/* Conditional render with editing prop */}
      <div>Name: {editing && currentInvoice && currentInvoice.name ===  name ? <input name="name" value={currentInvoice.name} onChange={handleChange} />  : name } </div>
      <p>Email: {editing &&currentInvoice && currentInvoice.email === email ? <input name="email" value={currentInvoice.email} onChange={handleChange}  /> : email}</p>
      <p>Due: {editing && currentInvoice && currentInvoice.due === due ? <input name="due" type="date" value={currentInvoice.due} onChange={handleChange}  /> : due}</p>
      <span>Total: $ {editing &&currentInvoice && currentInvoice.total === total ? <input name="total" value={currentInvoice.total} onChange={handleChange}  /> : total}</span>
      <EditButton onClick={() => editInvoice(id) }>Edit</EditButton>
      {currentInvoice &&currentInvoice.id === id ? 
      <div>
        <button type="submit" onClick={() => updateInvoice(id, currentInvoice)}>Update</button>
        <button type="button" onClick={() => deleteInvoice(id)}>Delete</button>
        <button type="button" onClick={() => setEditing(false)}>Cancel</button>
      </div> : 
      ''}
    </Invoice>
    )
}

export default InvoiceItem;