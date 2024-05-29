import React from 'react';

const LoginPage = () => {
  return (
    <div style={{
      backgroundColor: 'yellow',
      height: '500rem',
      alignContent: 'block',
      justifyContent: 'center'
    }}>
    <div style={{
      border: '5px solid',
      borderColor: 'black',
      borderRadius: '5px',
      borderWidth: '5px',
      height: '20rem',
      width: '20rem',
      alignSelf: 'center',
      justifySelf: 'center'
    }}>
    <h1>Sign in into your page</h1>
      <input placeholder='email' ></input>
      <input placeholder='password'></input>
      <button type='submit'>Login</button>
    </div>
    
    </div>
  );
}

export default LoginPage;
