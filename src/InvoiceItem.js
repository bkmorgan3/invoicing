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
  const {id, name, email, due, total, editInvoice, editing, currentInvoice, deleteInvoice, setEditing} = props
  // console.log("props",props)
  const [invoice, setInvoice] = useState()
  // console.log("invoice",invoice)

  useEffect(() => {
    setInvoice(props.currentInvoice)
  }, [props])

  const handleChange = e => {
    const {name, value} = e.target
    console.log("n",name, "v",value)

    setInvoice({...invoice, [name]:value})
  }
  return (
    <Invoice>
      {/* Conditional render with editing prop */}
      <div>Name: {editing && currentInvoice.name ===  name ? <input name="name" value={name} onChange={(e) => handleChange(e)} />  : name } </div>
      <p>Email: {editing && currentInvoice.email === email ? <input name="email" value={email} onChange={handleChange}  /> : email}</p>
      <p>Due: {editing && currentInvoice.due === due ? <input name="due" type="date" value={due} onChange={handleChange}  /> : due}</p>
      <span>Total: $ {editing && currentInvoice.total === total ? <input name="total" value={total} onChange={handleChange}  /> : total}</span>
    <EditButton onClick={() => editInvoice(props) }>Edit</EditButton>
    {editing && currentInvoice.id === id ? 
    <div>
      <button type="submit">Update</button>
      <button type="button" onClick={() => deleteInvoice(id)}>Delete</button>
      <button type="button" onClick={() => setEditing(false)}>Cancel</button>
      </div> 
    : ''}
    </Invoice>
    )
}

export default InvoiceItem;