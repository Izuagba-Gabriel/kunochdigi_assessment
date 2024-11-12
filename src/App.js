import React from 'react';
import Form from './components/Form';
import UserCard from './components/UserCard';


const profile = {
  name: "Izuagba Gabriel",
  email: "gizuagba3@gmail.com",
}

const App = () => {
  return (
    <div className='container'>
      <h1>Welcome to Izuagba Gabriel Assessment</h1>
      <UserCard data={profile} />
      <Form />
    </div>
  );
};

export default App;
