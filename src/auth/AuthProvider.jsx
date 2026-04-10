import { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const url = "http://localhost:8080/auth";
    const options = { credentials: "include" };

    fetch(url, options)
      .then((res) => (res.ok ? res.json() : null))
      .then((data) => setUser(data))
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  }, []);

  const login = async (email, password) => {
    const url = "http://localhost:8080/auth/login";
    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify({ email, password }),
    };

    const res = await fetch(url, options);

    if (res.ok) {
      const data = await res.json();
      setUser(data);
    }
  };

  const logout = async () => {
    const url = "http://localhost:8080/auth/login";
    const options = { method: "POST", credentials: "include" };

    await fetch(url, options);

    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
}
