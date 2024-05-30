import React from 'react';

const LoginPage = () => {
  return (
    <div className='login-page'>
      <form className='login-form'>
        <h2>Log in to your account</h2>
        <div className='email'>
        <label for='email'>Email:</label>
        <input id='emal' type='email' placeholder='Email'/>
        </div>
        <div className='password'>
        <label for='password'>Password:</label>
        <input id='password' type='password' placeholder='........'/>
        </div>
        <div className='remember-me'>
        <input id='remember-me' type='checkbox'/>
        <label for='remember-me'>Remember me</label>
        </div>
        <h1>geez luise!</h1>
        <button id='sign-in-button'>SIgn in</button>
      </form>
    </div>
  );
}

export default LoginPage;
