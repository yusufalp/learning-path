import { useState } from "react";
import { useNavigate } from "react-router";

import { useProfile } from "../../context/profile/useProfile";

import ProfileNewForm from "../../pages/Profile/ProfileNewForm";

const PROFILE_API_URL = `${import.meta.env.VITE_API_URL}/profiles`;

export default function ProfileNew() {
  const { setProfile } = useProfile();
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
  const [error, setError] = useState("");

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
      const url = PROFILE_API_URL;
      const options = {
        method: "POST",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      };

      const response = await fetch(url, options);
      const result = await response.json();
      console.log("response :>> ", response);
      console.log("result :>> ", result);

      if (!response.ok) {
        throw new Error("Failed to create profile.");
      }

      setProfile(result.data);
      navigate("/profile");
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <ProfileNewForm
      formData={formData}
      onChange={handleChange}
      onSubmit={handleSubmit}
      loading={loading}
      error={error}
    />
  );
}
