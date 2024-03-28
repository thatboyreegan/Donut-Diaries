import React from 'react';

const RegisterPage = () => {
  return (
    <div>
      <h1>Sign up for an account</h1>
      <input type='text' placeholder='username'></input>
      <input type='text' placeholder='email'></input>
      <input type='text' placeholder='password'></input>
      <button type='submit'>Sign up</button>
    </div>
  );
}

export default RegisterPage;
