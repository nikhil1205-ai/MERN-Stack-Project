import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import * as authService from '../services/authService';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;
    (async () => {
      try {
        const profile = await authService.getProfile();
        if (mounted) setUser(profile);
      } catch (e) {
        localStorage.removeItem('cs_token');
      } finally {
        if (mounted) setLoading(false);
      }
    })();
    return () => (mounted = false);
  }, []);

  const login = async (email, password) => {
    const { token, user: u } = await authService.login(email, password);
    localStorage.setItem('cs_token', token);
    setUser(u);
    return { token, user: u };
  };

  const register = async (formData) => {
    const { token, user: u } = await authService.register(formData);
    localStorage.setItem('cs_token', token);
    setUser(u);
    return { token, user: u };
  };

  const logout = async () => {
    await authService.logout();
    localStorage.removeItem('cs_token');
    setUser(null);
  };

  const updateProfile = async (payload) => {
    const updated = await authService.updateProfile(payload);
    setUser(updated);
    return updated;
  };

  const deleteAccount = async () => {
    await authService.deleteAccount();
    localStorage.removeItem('cs_token');
    setUser(null);
  };

  const value = useMemo(
    () => ({ user, loading, login, register, logout, updateProfile, deleteAccount }),
    [user, loading]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);
