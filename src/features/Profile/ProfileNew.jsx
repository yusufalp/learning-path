import { useState } from "react";
import { useNavigate } from "react-router";

import { useAuth } from "../../context/auth/useAuth";
import ProfileCreateForm from "../../pages/Profile/ProfileCreateForm";

export default function ProfileNew() {
  const { user } = useAuth();

  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    display_name: "",
    avatar_url: "",
    bio: "",
    headline: "",
    phone: "",
    timezone: "America/Los_Angeles",
    email_notifications: false,
    push_notifications: false,
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setError("");

    try {
      const url = "http://localhost:4000/api/profiles";
      const options = {
        method: "POST",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, user_id: user._id }),
      };

      const response = await fetch(url, options);

      if (!response.ok) {
        throw new Error("Failed to create profile.");
      }

      navigate("/profile");
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <ProfileCreateForm
      formData={formData}
      onChange={handleChange}
      onSubmit={handleSubmit}
      loading={loading}
      error={error}
    />
  );
}
