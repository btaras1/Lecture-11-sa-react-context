import React, { useContext } from 'react';
import { AuthContext } from './context/AuthContext'
import Articles from './components/Articles';

const App = () => {
  const { isLoggedIn, setIsLoggedIn} = useContext(AuthContext);

  const handleAuth = () => {
    setIsLoggedIn(!isLoggedIn);
  }
  return (
    <>
      <button onClick={handleAuth}>{isLoggedIn ? 'Logout' : 'Login'}</button>
      <Articles />
    </>
  );
}

export default App;
