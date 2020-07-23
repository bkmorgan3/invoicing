import React from 'react';
import InvoiceItem from './InvoiceItem';
// Add PropTypes

const InvoiceContainer = (props) => {
  console.log("container",props)
  return (
  <div>
    {props.invoices.length > 0 ? (
      props.invoices.map(i => (
        <InvoiceItem
          key={i.id}
          name={i.name}
          email={i.email}
          due={i.due}
          total={i.total}
          id={i.id}
          editInvoice={props.editInvoice}
          editing={props.editing}
          currentInvoice={props.currentInvoice}
          deleteInvoice={props.deleteInvoice}
          setEditing={props.setEditing}
        />
      ))
    ) : (
      <div>
        Please add an Invoice
        </div>
    )}
  </div>
  )
    }

export default InvoiceContainer