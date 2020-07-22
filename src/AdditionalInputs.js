import React, {useState} from 'react';
import styled from 'styled-components';

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



const AdditionalInputs = (props) => {
  const [inputs, setInputs] = useState([])

  const handleChange = (i, event) => {
    console.log(i, event)
    const values = [...inputs]
    values[i].text = event.target.value;
    values[i].amount = event.target.value;
    console.log(values[i])
    // console.log("t",values[i])
    // console.log("handling", values)
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
              <DescInput type="text" name="description" value={input.text || ''} onChange={(event) =>handleChange(index, event)} />
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