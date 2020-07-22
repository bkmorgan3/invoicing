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
  const {name, email, due, total,id} = props
  return (
    <Invoice>
      <p>Name: {name}</p>
      <p>Email: {email}</p>
      <p>Due: {due}</p>
      <span>Total: $ {total}</span>
    <EditButton onClick={() => console.log("I am editing",id)}>Edit</EditButton>
    </Invoice>
    )
}

export default InvoiceItem;