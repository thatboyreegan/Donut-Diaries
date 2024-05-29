import React, { createContext, useCallback, useState } from 'react';
import { postArequest, baseUrl } from '../services';

const UserContext =  createContext();

export const UserContextProvider=  () => {

    const [user, setUser] = useState(null);
    const [registerError, setRegisterError] = useState(null);
    const [isRegisterLoading, setIsRegisterLoading] = useState(false);
    const [registerInfo, setRegisterInfo] = useState({
        username: '',
        email: '',
        password: '',
    });
    const [loginError, setLoginError] = useState(null);
    const [isLoginLoading, setLoginLoading] = useState(false);
    const [loginInfo, setLoginInfo] = useState({
        email: '',
        password: '',
    });

    const updateUserInfo = useCallback((info) => {
        setUser(info);
    });

    const updateRegisterInfo = useCallback((info) => {
        setRegisterInfo(info);
    });

    const updateLoginInfo = useCallback((info) => {
        setLoginInfo(info)
    });

    const registerUser = useCallback(async (e) => {
        e.preventDefault();
        setIsRegisterLoading(true);
        setRegisterError(null);

        const res = await postArequest(`${baseUrl}/register`, JSON.stringify(registerInfo));
        setIsRegisterLoading(false);
        if (res.error) {
            return setRegisterError(res);
        }
    });

    const loginUser = useCallback(async (e) => {
        e.preventDefault();
        setLoginLoading(true);
        setLoginError(null);

        const res = await postArequest(`${baseUrl}/login`, JSON.stringify(loginInfo));
        setLoginLoading(false);
        if (res.error) return setLoginError(res);
    })

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
      
    </UserContext.Provider>
  );
}

export default UserContext;
