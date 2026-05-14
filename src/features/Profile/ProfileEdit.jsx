import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

import { useProfile } from "../../context/profile/useProfile";

import ProfileEditForm from "../../pages/Profile/ProfileEditForm";

export default function ProfileEdit() {
  const { profile, setProfile, loading: profileLoading } = useProfile();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    displayName: "",
    avatarUrl: "",
    bio: "",
    headline: "",
    phone: "",
    timezone: "America/Los_Angeles",
    emailNotifications: false,
    pushNotifications: false,
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!profile) return;

    setFormData({
      firstName: profile.first_name,
      lastName: profile.last_name,
      displayName: profile.display_name,
      avatarUrl: profile.avatar_url,
      bio: profile.bio,
      headline: profile.headline,
      phone: profile.phone,
      timezone: profile.timezone,
      emailNotifications: profile.email_notifications,
      pushNotifications: profile.push_notifications,
    });
  }, [profile]);

  const handleChange = (e) => {
    const value =
      e.target.type === "radio" ? e.target.value === "true" : e.target.value;

    setFormData((prev) => ({
      ...prev,
      [e.target.name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("formData :>> ", formData);

    setLoading(true);
    setError("");

    try {
      const url = "http://localhost:4000/api/profiles";
      const options = {
        method: "PATCH",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      };

      const response = await fetch(url, options);
      const result = await response.json();
      console.log("response :>> ", response, result);

      if (!response.ok) {
        throw new Error("Failed to update profile.");
      }

      setProfile(result.data);
      navigate("/profile");
    } catch (error) {
      console.log("error :>> ", error);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };
  if (profileLoading) return <div>Loading profile...</div>;

  if (!profile) {
    return <div>You need to create a profile before editing it.</div>;
  }

  return (
    <ProfileEditForm
      formData={formData}
      onChange={handleChange}
      onSubmit={handleSubmit}
      loading={loading}
      error={error}
    />
  );
}
