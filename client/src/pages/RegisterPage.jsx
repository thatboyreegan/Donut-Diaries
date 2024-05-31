import React, { useContext } from 'react';
import { UserContext } from '../context/UserContext';
import { Alert } from 'react-bootstrap';

const RegisterPage = () => {

  const {
    registerUser,
    registerError,
    registerInfo,
    isRegisterLoading,
    updateRegisterInfo
  } = useContext(UserContext);
  return (
    <div className='register-page'>
      <form className='register-form' onSubmit={registerUser}>
      <div className='username'>
      <label for='username'>Username</label>
      <input id='username' type='text' placeholder='username' onChange={
        (e) => updateRegisterInfo({...registerInfo, username: e.target.value})
      }/>
      </div>
      <div className='email'>
        <label for='email'>Email:</label>
        <input for='email' type='email' placeholder='Email' onChange={
          (e) => updateRegisterInfo({...registerInfo, email: e.target.value})
        }/>
      </div>
      <div className='password'>
        <label for='password'>Password:</label>
        <input for='password' type='password' placeholder='*******' onChange={
          (e) => updateRegisterInfo({...registerInfo, password : e.target.value})
        }/>
      </div>
      <div className='confirm-password'>
      <label for='confirm-password'>Confirm password:</label>
      <input id='confirm-password' type='password' placeholder='*******' onChange={
        (e) => updateRegisterInfo({...registerInfo, confirmPassword : e.target.value})
      }/>
      </div>
      <div className='terms-of-service'>
        <input type='checkbox' onChange={
          (e) => updateRegisterInfo({...registerInfo, termsOfService: e.target.value})
        }/>
        <label>Agree to <em>Terms of services</em> and the <em>Privacy policy</em></label>
      </div>
      <button id='sign-up-button' type='submit'>{isRegisterLoading ? 'You will be in shortly!' : 'Sign up'}</button>
      </form>
      {isRegisterLoading && <Alert variant='danger'>
        <p>{registerError?.message}</p>
      </Alert>}
    </div>
  );
}

export default RegisterPage;
