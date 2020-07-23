import React from 'react';
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
  const {id,name, email, due, total, editInvoice, editing, currentInvoice} = props
  console.log("props",props)
  return (
    <Invoice>
      {/* Conditional render with editing prop */}
      <div>Name: {editing && currentInvoice.name ===  name? <input value={name} />  : name } </div>
      <p>Email: {editing && currentInvoice.email === email ? <input value={email} /> : email}</p>
      <p>Due: {editing && currentInvoice.due === due ? <input type="date" value={due} /> : due}</p>
      <span>Total: $ { editing && currentInvoice.total === total ? <input value={total} /> : total}</span>
    <EditButton onClick={() => editInvoice(props) }>Edit</EditButton>
    {editing && currentInvoice.id === id ? <div><button>Update</button><button>Delete</button></div> : ''}
    </Invoice>
    )
}

export default InvoiceItem;