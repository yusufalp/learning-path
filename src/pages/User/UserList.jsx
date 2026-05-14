import { useEffect, useState } from "react";

import StyledLink from "../../components/StyledLink";
import Card from "../../components/Card";

const AUTH_API_URL = import.meta.env.VITE_AUTH_API_URL;

export default function UserList() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchProfiles = async () => {
      const url = `${AUTH_API_URL}/admin/users`;
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

        setUsers(result.data);
      } catch (error) {
        console.error("Fetch error:", error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProfiles();
  }, []);

  console.log("users :>> ", users);

  if (loading) return <div>Loading profiles...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <Card title="All Users">
      <ul>
        {users.map((user) => (
          <li key={user._id}>
            <StyledLink to={`${user._id}`}>{user.email}</StyledLink>
          </li>
        ))}
      </ul>

      {users.length === 0 && <p>No users found.</p>}
    </Card>
  );
}
