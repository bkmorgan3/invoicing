import React, {useState} from 'react';
import styled from 'styled-components';

//STYLES
const Field = styled.div`
  display:flex;
  justify-content: space-around;
  margin-top: 0;
  margin-bottom: 1rem;
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

const AmountInput = styled.input`
  width: 60px;
  margin-left: 250px;
  height: 30px;
  border-radius: 3px;
`;

const DeleteButton = styled.button`
  height: 30px;
  margin-top: 50px;
`;

//THE COMPONENT
const AdditionalInputs = (props) => {

  const [inputs, setInputs] = useState([])
  /* PASSED DOWN SET TOTAL TO GET SUM OF EACH INPUT FILED WITH AMOUNT.
  HAVENT WORKED ON IT MUCH */


  const handleChange = (i, event) => {
    const values = [...inputs]
    values[i][event.target.name] = event.target.value;
    console.log(values[i])
    
    setInputs(values)
  }

  const addInput = () => {
    const values = [...inputs];
    values.push({text: null})
    setInputs(values)
  }

  const removeInput = i => {
    const values = [...inputs];
    values.splice(i, 1)
    setInputs(values)
  } 
  return (
    <div>
      <button type="button" onClick={() => addInput()}> + </button>
      {inputs.map((input, index) => {
        return (
          <Field key={`${input}-${index}`} >

            <InternalDiv>
              <DescInput type="text" name="text" value={input.text || ''} onChange={event => handleChange(index, event)} />
            </InternalDiv>

            <InternalDiv>
              <AmountInput type="number" name="amount" value={input.amount || ''} onChange={event => handleChange(index,event)} />
            </InternalDiv>

          <DeleteButton 
            type="button" 
            onClick={() => removeInput(index)}> 
             X 
          </DeleteButton>
            </Field>
        )
      })}
    </div>
  )
}

export default AdditionalInputs