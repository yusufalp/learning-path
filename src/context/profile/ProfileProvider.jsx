import { useCallback, useEffect, useState } from "react";

import { ProfileContext } from "./ProfileContext";
import { useAuth } from "../auth/useAuth";

const PROFILE_API_URL = `${import.meta.env.VITE_API_URL}/profiles`;

export function ProfileProvider({ children }) {
  const { user } = useAuth();

  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [checkedUserId, setCheckedUserId] = useState(null);

  const userId = user?._id;

  const getProfile = useCallback(async () => {
    if (!userId) {
      setProfile(null);
      setCheckedUserId(null);
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
      setCheckedUserId(userId);
      setLoading(false);
    }
  }, [userId]);

  useEffect(() => {
    getProfile();
  }, [getProfile]);

  useEffect(() => {
    if (!user) {
      setProfile(null);
      setCheckedUserId(null);
    }
  }, [user]);

  console.log("profile :>> ", profile);

  const isLoadingCurrentUserProfile =
    loading || Boolean(userId && checkedUserId !== userId);

  const value = {
    profile,
    loading: isLoadingCurrentUserProfile,
    error,
    setProfile,
    hasProfile: !!profile,
  };

  return (
    <ProfileContext.Provider value={value}>{children}</ProfileContext.Provider>
  );
}
