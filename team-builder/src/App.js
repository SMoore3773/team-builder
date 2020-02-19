import React, { useState } from 'react';
import Form from './Form';
import Member from './Member';
import './App.css';

function App() {
  const [teamMembers, setTeamMembers] = useState([{ name: '', email: '', role: '' }])

  const addNewMember = member => {
    const newMember = {
      id: Date.now(),
      name: member.name,
      email: member.email,
      role: member.role
    };
    setTeamMembers([...teamMembers, newMember]);
  };

  console.log(teamMembers);
  return (
    <div className="App">
      <header className="App-header">
        <h1>Best Dev Team</h1>
        <Form 
          addNewMember ={addNewMember}
        />
        <h2>The Team</h2>
        <Member 
            teamMembers={teamMembers}
          />
        </header>
    </div>
  );
}

export default App;
