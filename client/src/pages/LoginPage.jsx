import React, { useContext } from 'react';
import { UserContext } from '../context/UserContext';
import { Alert } from 'react-bootstrap';

const LoginPage = () => {

  const {
    loginUser,
    loginError,
    updateLoginInfo,
    loginInfo,
    isLoginLoading
  } = useContext(UserContext);
  return (
    <div className='login-page'>
      <form className='login-form' onSubmit={loginUser}>
        <h2>Log in to your account</h2>
        <div className='email'>
        <label for='email'>Email:</label>
        <input id='emal' type='email' placeholder='Email' onChange={(e) => updateLoginInfo({...loginInfo, email: e.target.value})}/>
        </div>
        <div className='password'>
        <label for='password'>Password:</label>
        <input id='password' type='password' placeholder='........' onChange={(e) => updateLoginInfo({...loginInfo, password: e.target.value})}/>
        </div>
        <div className='remember-me'>
        <input id='remember-me' type='checkbox'onChange={(e) => updateLoginInfo({...loginInfo, rememberMe: e.target.value})}/>
        <label for='remember-me'>Remember me</label>
        </div>
        <button id='sign-in-button' type='submit'>{isLoginLoading ? 'You will be in shortly!' : 'Sign in'}</button>
      </form>
      {loginError?.error && <Alert variant='danger'>
        <p>{loginError?.message}</p>
      </Alert>}
    </div>
  );
}

export default LoginPage;
