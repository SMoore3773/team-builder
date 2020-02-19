import React, { useState } from 'react';
import Form from './Form';
import './App.css';

function App() {
  const [teamMembers, setTeamMembers] = useState([{ name: '', email: '', role: '' }])


  return (
    <div className="App">
      <header className="App-header">
        <Form />
        <p>stay tuned.... new hotness right around the corner</p>
      </header>
    </div>
  );
}

export default App;
