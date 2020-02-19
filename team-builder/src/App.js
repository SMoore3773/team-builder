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
        <Form 
          addNewMember ={addNewMember}
        />
        <Member 
          teamMembers={teamMembers}
        />
        <p>stay tuned.... new hotness right around the corner</p>
      </header>
    </div>
  );
}

export default App;
