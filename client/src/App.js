import './App.css';
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import { Routes, Route, Navigate } from 'react-router-dom';
import UserContext from './context/UserContext';
import { useContext } from 'react';
function App() {
  //const { user } = useContext(UserContext);

  return (
    <appContextProvider>
    <Routes>
      <Route path='/' element={<LandingPage/>}/>
      <Route path='/register' element={<RegisterPage/>}/>
      <Route path='/login' element={<LoginPage/>}/>
      <Route path='/*' element={<Navigate to='/'/>}/>
    </Routes>
    </appContextProvider>
    
  );
}

export default App;
