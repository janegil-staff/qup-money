'use client';
import { createContext, useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const { data: session, status } = useSession();
  
  const [userId, setUserId] = useState(null);

  const [token, setToken] = useState(null);
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (session?.user) {
      setUser(session.user);
      setUserId(session.user.id);
      setToken(session.user.accessToken); // or use JWT if exposed
    }
  }, [session]);

  const logout = () => {
    setToken(null);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ token, user, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
