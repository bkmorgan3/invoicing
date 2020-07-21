import React, {useState} from 'react';
import InvoiceItem from './InvoiceItem'

const InvoiceContainer = (props) => (
  <div>
    {props.invoices.map(i => (
        <InvoiceItem 
        key={i.id}
        name={i.name} 
        email={i.email} 
        due={i.due} 
        total={i.total} 
        />
    ))}
  </div>
  
)

export default InvoiceContainer