import AuthContext from "./AuthContext";
import { useEffect, useState } from "react";

const AuthProvider = ({ children }) => {
  const [loggedIn, setLoggedIn] = useState(false);

  const logIn = (token, username) => {
    useEffect(() => {
      const authToken = localStorage.getItem('token');
      if (authToken) {
        setLoggedIn(true);
      }
    }, []);

    setLoggedIn(true);
    localStorage.setItem('token', token);
    localStorage.setItem('username', username);
  };
  
  const logOut = () => {
    setLoggedIn(false);
    localStorage.removeItem('token');
    localStorage.removeItem('username');
  };

  return (
    <AuthContext.Provider value={{ loggedIn, logIn, logOut }}>
      {children}
    </AuthContext.Provider>
  );
};
  export default AuthProvider;