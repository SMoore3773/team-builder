import React, { useState } from 'react';

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
            <form onSubmit={submitForm}>
                <label htmlFor='name'>Name: </label>
                <input
                    type='text'
                    id='name'
                    name='name'
                    value={member.name}
                    placeholder='Name'
                    onChange={handleChanges}
                />
                <label htmlFor='email'>Email: </label>
                <input 
                    type='text'
                    id='email'
                    name='email'
                    value={member.email}
                    placeholder='Email'
                    onChange={handleChanges}
                />
                <label htmlFor='role'>Role: </label>
                <input 
                    type='text'
                    id='role'
                    name='role'
                    value={member.role}
                    placeholder='Role'
                    onChange={handleChanges}
                />
                <button type='submit'>Submit Form!</button>
            </form>
        </div>
    )
}
export default Form 