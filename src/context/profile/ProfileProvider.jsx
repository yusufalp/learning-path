import { useCallback, useEffect, useState } from "react";

import { ProfileContext } from "./ProfileContext";
import { useAuth } from "../auth/useAuth";

const PROFILE_API_URL = import.meta.env.VITE_PROFILE_API_URL;

export function ProfileProvider({ children }) {
  const { user } = useAuth();

  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const getProfile = useCallback(async () => {
    if (!user) {
      setProfile(null);
      setLoading(false);
      return;
    }

    const url = `${PROFILE_API_URL}/me`;
    const options = {
      method: "GET",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      setLoading(true);
      setError("");

      const response = await fetch(url, options);
      const result = await response.json();

      if (response.ok) {
        setProfile(result.data || null);
      } else {
        setProfile(null);
      }
    } catch (error) {
      console.error("Profile fetch failed:", error);
      setProfile(null);
      setError(error.message || "Profile fetch failed.");
    } finally {
      setLoading(false);
    }
  }, [user]);

  useEffect(() => {
    getProfile();
  }, [getProfile]);

  useEffect(() => {
    if (!user) {
      setProfile(null);
    }
  }, [user]);

  console.log("profile :>> ", profile);

  const value = {
    profile,
    loading,
    error,
    setProfile,
    hasProfile: !!profile,
  };

  return (
    <ProfileContext.Provider value={value}>{children}</ProfileContext.Provider>
  );
}
