import React, { createContext, useCallback, useState } from 'react';
import { postArequest, baseUrl } from '../services';

export const UserContext =  createContext();

export const UserContextProvider =  ({children}) => {

    const [user, setUser] = useState(null);
    const [registerError, setRegisterError] = useState(null);
    const [isRegisterLoading, setIsRegisterLoading] = useState(false);
    const [registerInfo, setRegisterInfo] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
        termsOfService: false,
    });
    const [loginError, setLoginError] = useState(null);
    const [isLoginLoading, setLoginLoading] = useState(false);
    const [loginInfo, setLoginInfo] = useState({
        email: '',
        password: '',
        rememberMe: false,
    });

    const updateUserInfo = useCallback((info) => {
        setUser(info);
    },[]);

    const updateRegisterInfo = useCallback((info) => {
        setRegisterInfo(info);
    }, []);

    const updateLoginInfo = useCallback((info) => {
        setLoginInfo(info)
    }, []);

    const registerUser = useCallback(async (e) => {
        e.preventDefault();
        setIsRegisterLoading(true);
        setRegisterError(null);

        try {
            const res = await postArequest(`${baseUrl}/register`, JSON.stringify(registerInfo));
            if (res.error) {
                return setRegisterError(res);
            }
            setUser(res)
        } catch (error) {
            console.log('error when signing up:', error)
            setRegisterError(error);
            
        } finally {
            setIsRegisterLoading(false);
        }
    }, [registerInfo]);

    const loginUser = useCallback(async (e) => {
        e.preventDefault();
        setLoginLoading(true);
        setLoginError(null);

        try {
            const res = await postArequest(`${baseUrl}/login`, JSON.stringify(loginInfo));
            if (res.error) return setLoginError(res);
            setUser(res);
        } catch (error) {
            console.log('Error when logging in:', error);
            setLoginError(error);
        } finally {
            setLoginLoading(false);
        }
    }, [loginInfo])

  return (
    <UserContext.Provider value={{
        user,
        registerError,
        registerInfo,
        registerUser,
        isRegisterLoading,
        isLoginLoading,
        loginError,
        loginInfo,
        loginUser,
        updateLoginInfo,
        updateRegisterInfo,
        updateUserInfo,

    }}>
      {children}
    </UserContext.Provider>
  );
}

