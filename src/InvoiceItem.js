import React from 'react';
import styled from 'styled-components';

const Invoice = styled.div`
  border: 1px solid black;
  margin: 15px;
  padding: 30px;
`;

const EditButton = styled.button`
 
`;

const InvoiceItem = (props) => {
  const {name, email, due, total} = props
  return (
    <Invoice>
      <p>Name: {name}</p>
      <p>Email: {email}</p>
      <p>Due: {due}</p>
      <span>Total: {total}</span>
    <button>Edit</button>
    </Invoice>
    )
}

export default InvoiceItem;