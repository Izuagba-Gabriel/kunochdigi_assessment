import React from 'react';

const UserCard = ({ data }) => {
  return (
    <div style={styles.container}>
    <div style={styles.card}>
      <h2 style={styles.name}>{data.name}</h2>
      <p style={styles.email}>{data.email}</p>
    </div>
    </div>
  );
};

const styles = {
  container: {
    textAlign: 'center',
    padding: '20px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  card: {
    border: '2px solid #ddd',
    borderRadius: '10px',
    padding: '20px',
    maxWidth: '300px',
    boxShadow: '0 4px 4px rgba(0, 0, 0, 0.7)',
    textAlign: 'center',
  },
  name: {
    margin: '0',
    fontSize: '1.5rem',
    color: '#333',
  },
  email: {
    margin: '8px 0 0',
    color: '#555',
  },
};

export default UserCard;
