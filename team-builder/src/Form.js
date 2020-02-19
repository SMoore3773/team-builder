import React, { useState } from 'react';
import styled from 'styled-components';

const JoinForm = styled.form`
display:flex;
flex-direction:row;
justify-content: space-evenly;
`

const FormField = styled.div`
display:flex;
flex-direction:row;
flex-wrap: wrap;
justify-content:space-evenly;
margin:10px;
padding:5px;
`
const FormLabel = styled.label`
margin:3px;
padding:5px;
text-align:center;
`
const FormInput = styled.input`
margin:3px;
padding: 5px;
`
const FormButton = styled.button`
height: 45px;
align-self:center;
border-radius:5px;
`
const Form = props => {
    console.log(props)
    const [member, setMember] = useState({ name: '', email: '', role: '' })
    const handleChanges = event => {
        console.log("event", event.target.value);
        setMember({ ...member, [event.target.name]: event.target.value });
    };
  
    const submitForm = event => {
        console.log("submitting!");
        event.preventDefault();
        props.addNewMember(member);
        setMember({ name: "", email: "", role:"" });
      };

    return (
        <div>
            <JoinForm onSubmit={submitForm}>
                <FormField>
                    <FormLabel htmlFor='name'>Name: </FormLabel>
                    <FormInput
                        type='text'
                        id='name'
                        name='name'
                        value={member.name}
                        placeholder='Name'
                        onChange={handleChanges}
                    />
                </FormField>
                <FormField>
                    <FormLabel htmlFor='email'>Email: </FormLabel>
                    <FormInput 
                        type='email'
                        id='email'
                        name='email'
                        value={member.email}
                        placeholder='Email'
                        onChange={handleChanges}
                    />  
                </FormField>
                <FormField>
                    <FormLabel htmlFor='role'>Role: </FormLabel>
                    <FormInput 
                        type='text'
                        id='role'
                        name='role'
                        value={member.role}
                        placeholder='Role'
                        onChange={handleChanges}
                    />
                </FormField>
                <FormButton type='submit'>Join the Team!</FormButton>
            </JoinForm>
        </div>
    )
}
export default Form 