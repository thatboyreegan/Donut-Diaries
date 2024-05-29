import React from 'react';

const RegisterPage = () => {
  return (
    <div style={{
      backgroundColor: 'lightblue',
      height: '600rem',
      width: 'auto',
      justifyContent: 'center',
    }}>
    <div style={{
      backgroundColor: 'beige',
      height: '25rem',
      width: '25rem',
      border: '2px solid',
      borderRadius: '15px'
    }}>
    <h1>Sign up for an account</h1>
      <input type='text' placeholder='username'></input>
      <input type='text' placeholder='email'></input>
      <input type='text' placeholder='password'></input>
      <button type='submit'>Sign up</button>
    </div>
      
    </div>
  );
}

export default RegisterPage;
