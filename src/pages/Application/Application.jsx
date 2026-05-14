import { useCallback, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router";

import { useProfile } from "../../context/profile/useProfile";

import { getFullName } from "../../utils/name";

import Button from "../../components/Button";

const APPLICATION_API_URL = `${import.meta.env.VITE_API_URL}/applications`;

export default function Application() {
  const { hasProfile } = useProfile();

  const navigate = useNavigate();

  const [application, setApplication] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const getApplication = useCallback(async () => {
    const url = `${APPLICATION_API_URL}/me`;
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

      if (!response.ok) {
        throw new Error(result.message || "Failed to fetch application.");
      }

      setApplication(result.data);
    } catch (error) {
      console.error("Fetch error:", error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    getApplication();
  }, [getApplication]);

  if (loading) return <div>Loading application...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!application) {
    return (
      <div>
        <p>You did not start an application yet.</p>

        <Button disabled={!hasProfile} onClick={() => navigate("new")}>
          Start Application
        </Button>

        {!hasProfile && (
          <>
            <p>To start an application, you MUST create a profile first.</p>
            <Button onClick={() => navigate("/profile/new")}>
              Create Profile
            </Button>
          </>
        )}
      </div>
    );
  }

  return (
    <div>
      <nav>
        <Link to="edit">Edit Application</Link>
      </nav>

      <h1>Application</h1>

      <div>
        <h2>{getFullName(application.firstName, application.lastName)}</h2>
      </div>
    </div>
  );
}
