import { useState } from "react";

import ApplicationCreateForm from "../../pages/Application/ApplicationCreateForm";

export default function ApplicationNew() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setLoading(true);
    setError("");

    try {
      console.log(formData);
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <ApplicationCreateForm
      formData={formData}
      onChange={handleChange}
      onSubmit={handleSubmit}
      loading={loading}
      error={error}
    />
  );
}
