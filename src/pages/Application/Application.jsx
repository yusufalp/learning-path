import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router";

import { useAuth } from "../../context/auth/useAuth";
import { getFullName } from "../../utils/name";
import { useProfile } from "../../context/profile/useProfile";

export default function Application() {
  const { user } = useAuth();
  const { hasProfile } = useProfile();

  const navigate = useNavigate();

  const [application, setApplication] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!user?._id) return;

    const getApplication = async () => {
      const url = "";
      const options = {};

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
    };

    getApplication();
  }, [user?._id]);

  if (loading) return <div>Loading application...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!application) {
    return (
      <div>
        <p>You did not start an application yet.</p>

        <button disabled={!hasProfile} onClick={() => navigate("new")}>
          Start Application
        </button>

        {!hasProfile && (
          <>
            <p>To start an application, you MUST create a profile first.</p>
            <button onClick={() => navigate("/profile/new")}>
              Create Profile
            </button>
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
