import React from 'react';

const RegisterPage = () => {
  return (
    <div className='register-page'>
      <form className='register-form'>
      <div className='username'>
      <label for='username'>Username</label>
        <input id='username' type='text' placeholder='username'/>
      </div>
      <div className='email'>
        <label for='email'>Email:</label>
        <input for='email' type='email' placeholder='Email'/>
      </div>
      <div className='password'>
        <label for='password'>Password:</label>
        <input for='password' type='password' placeholder='*******'/>
      </div>
      <div className='confirm-password'>
      <label for='confirm-password'>Confirm password:</label>
      <input id='confirm-password' type='password' placeholder='*******'/>
      </div>
      <div className='terms-of-service'>
        <input type='checkbox'/>
        <label>Agree to <em>Terms of services</em> and the <em>Privacy policy</em></label>
      </div>
      <button id='sign-up-button'>Sign up</button>
      </form>
    </div>
  );
}

export default RegisterPage;
