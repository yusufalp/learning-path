import { useEffect, useState } from "react";

export default function UserList() {
  const [profiles, setProfiles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchProfiles = async () => {
      const url = "http://localhost:4000/api/profiles";
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
          throw new Error(result.message);
        }

        setProfiles(result.data);
      } catch (error) {
        console.error("Fetch error:", error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProfiles();
  }, []);

  console.log("profiles :>> ", profiles);

  if (loading) return <div>Loading profiles...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h1>All User Profiles</h1>

      <ul>
        {profiles.map((profile) => (
          <li key={profile.user_id}>
            <img src={profile.avatar_url} alt="" />
            <div>
              {profile.display_name ||
                `${profile.first_name} ${profile.last_name}`}
            </div>
          </li>
        ))}
      </ul>

      {profiles.length === 0 && <p>No profiles found.</p>}
    </div>
  );
}
