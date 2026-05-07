import { useEffect, useState } from "react";
import { Link } from "react-router";

import { useAuth } from "../../context/auth/useAuth";
import { getFullName } from "../../utils/name";

export default function Profile() {
  const { user } = useAuth();

  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (user?._id) return;

    const getProfile = async () => {
      const url = `http://localhost:4000/api/profiles/${user._id}`;
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
          throw new Error(result.message || "Failed fetch profile.");
        }

        setProfile(result.data);
      } catch (error) {
        console.error("Fetch error:", error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    getProfile();
  }, [user?._id]);

  if (loading) return <div>Loading profile...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!profile) return <div>Profile not found.</div>;

  return (
    <div>
      <nav>
        <Link to="settings">Edit Profile</Link>
      </nav>

      <h1>Profile Page</h1>

      {profile.avatar_url && (
        <img src={profile.avatar_url} alt={`{profile.first_name} avatar`} />
      )}

      {
        <div>
          <h2>{getFullName(profile.first_name, profile.last_name)}</h2>
          <p>{profile.headline}</p>
        </div>
      }

      {profile.bio && (
        <div>
          <h3>Bio</h3>
          <p>{profile.bio}</p>{" "}
        </div>
      )}

      <div>Timezone: {profile.timezone}</div>
    </div>
  );
}
