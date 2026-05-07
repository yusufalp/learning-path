import { useCallback, useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";

const AUTH_API_URL = import.meta.env.VITE_AUTH_API_URL;

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const checkAuth = useCallback(async () => {
    const url = `${AUTH_API_URL}/checkAuth`;
    const options = { credentials: "include" };

    try {
      const res = await fetch(url, options);

      if (res.ok) {
        const data = await res.json();
        setUser(data.user || null);
      } else {
        setUser(null);
      }
    } catch (error) {
      console.error("Auth check failed:", error);
      setUser(null);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  const hasRole = useCallback(
    (roles) => {
      if (!user?.role) return false;

      const userRole = user.role.toLowerCase();
      const allowedRoles = Array.isArray(roles)
        ? roles.map((r) => r.toLowerCase())
        : [roles.toLowerCase()];

      return allowedRoles.includes(userRole);
    },
    [user],
  );

  const isAdmin = useCallback(() => {
    hasRole(["owner", "admin"]);
  }, [hasRole]);
  const isMentor = useCallback(() => {
    hasRole(["mentor"]);
  }, [hasRole]);
  const isMentee = useCallback(() => {
    hasRole(["mentee"]);
  }, [hasRole]);

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
      throw new Error(data.message);
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
    <AuthContext.Provider
      value={{
        user,
        loading,
        signup,
        login,
        logout,
        checkAuth,
        hasRole,
        isAdmin,
        isMentor,
        isMentee,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
