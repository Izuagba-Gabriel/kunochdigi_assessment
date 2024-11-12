import React, { useState } from 'react';

const Form = () => {
  // State to hold the user's input and the greeting message
  const [name, setName] = useState('');
  const [greeting, setGreeting] = useState('');

  // Handler for form submission
  const handleSubmit = (e) => {
    console.log(name.length)
    e.preventDefault(); // Prevent page reload
    if (name.length === 0 ) {
      setGreeting('Input field cannot be empty')
    }else {
      setGreeting(`Hello, ${name}! Welcome aboard!`); // Set the greeting message
    }
    setName('')
  };

  return (
    <div style={styles.container}>
      <form onSubmit={handleSubmit} style={styles.form}>
        <label style={styles.label}>
          Enter your name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={styles.input}
            placeholder="Your name"
          />
        </label>
        <button type="submit" style={styles.button}>
          Submit
        </button>
      </form>
      {greeting && <p style={styles.greeting}>{greeting}</p>}
    </div>
  );
};

// Inline styles for the form
const styles = {
  container: {
    textAlign: 'center',
    padding: '20px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  label: {
    marginBottom: '10px',
    fontSize: '1rem',
  },
  input: {
    padding: '8px',
    fontSize: '1rem',
    margin: '5px 0',
    borderRadius: '4px',
    border: '1px solid #ccc',
  },
  button: {
    padding: '8px 16px',
    fontSize: '1rem',
    borderRadius: '4px',
    border: 'none',
    backgroundColor: '#4CAF50',
    color: 'white',
    cursor: 'pointer',
  },
  greeting: {
    marginTop: '20px',
    fontSize: '1.2rem',
    color: '#333',
  },
};

export default Form;
