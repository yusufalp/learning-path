import { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";

const AUTH_API_URL = import.meta.env.VITE_AUTH_API_URL;

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const url = `${AUTH_API_URL}/checkAuth`;
    const options = { credentials: "include" };

    fetch(url, options)
      .then((res) => (res.ok ? res.json() : null))
      .then((data) => setUser(data.user))
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  }, []);

  const signup = async (email, password, confirmPassword) => {
    const url = `${AUTH_API_URL}/signup`;
    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify({ email, password, confirmPassword }),
    };

    const res = await fetch(url, options);
    const data = await res.json();

    if (res.ok || data.success) {
      setUser(data.user);
    } else {
      throw new Error(data.message)
    }
  };

  const login = async (email, password) => {
    const url = `${AUTH_API_URL}/login`;
    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify({ email, password }),
    };

    const res = await fetch(url, options);
    const data = await res.json();

    if (res.ok || data.success) {
      setUser(data.user);
    } else {
      throw new Error(data.message);
    }
  };

  const logout = async () => {
    const url = `${AUTH_API_URL}/logout`;
    const options = { method: "POST", credentials: "include" };

    await fetch(url, options);

    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, signup, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
}
