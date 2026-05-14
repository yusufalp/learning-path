import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";

import Card from "../../components/Card";
import Button from "../../components/Button";
import Tooltip from "../../components/Tooltip";

import { ROLE_MAP } from "../../constants/roles";

const AUTH_API_URL = import.meta.env.VITE_AUTH_API_URL;
const API_URL = import.meta.env.VITE_API_URL;

export default function UserDetails() {
  const { userId } = useParams();
  const navigate = useNavigate();

  const [user, setUser] = useState(null);
  const [profile, setProfile] = useState(null);
  const [application, setApplication] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!userId) return;

    const fetchAllData = async () => {
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

        const [userResponse, profileResponse, applicationResponse] =
          await Promise.all([
            fetch(`${AUTH_API_URL}/admin/users/${userId}`, options),
            fetch(`${API_URL}/profiles/${userId}`, options),
            fetch(`${API_URL}/applications/${userId}`, options),
          ]);

        if (
          !userResponse.ok ||
          !profileResponse.ok ||
          !applicationResponse.ok
        ) {
          throw new Error("Failed to fetch data.");
        }

        const userResult = await userResponse.json();
        const profileResult = await profileResponse.json();
        const applicationResult = await applicationResponse.json();

        setUser(userResult.data);
        setProfile(profileResult.data);
        setApplication(applicationResult.data);
      } catch (error) {
        console.error("Error:", error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchAllData();
  }, [userId]);

  if (loading) return <p>Loading user details...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!user) return <p>User not found</p>;

  return (
    <div className="flex justify-between flex-col 2xl:flex-row">
      <Card className="flex-1 flex flex-col" title="User Settings">
        <div className="flex-1 mb-12">
          <div>
            <p className="text-lg font-bold">Email</p>
            <p>{user.email}</p>
          </div>
          <div>
            <p className="text-lg font-bold">Role</p>
            <Tooltip
              text={ROLE_MAP[user.role].text}
              tooltip={ROLE_MAP[user.role].description}
            />
          </div>
        </div>

        <Button
          className="m-auto"
          variant="primary"
          onClick={() => navigate("user-edit")}
        >
          Edit User Settings
        </Button>
      </Card>

      <Card className="flex-1 flex flex-col" title="Profile Settings">
        {profile ? (
          <>
            <div className="flex-1 mb-12">
              <img
                className="rounded-full w-[120px] m-auto"
                src={profile.avatar_url}
                alt="Profile avatar"
              />
              <div>
                <p className="text lg font-bold">First Name</p>
                <p>{profile.first_name}</p>
              </div>
              <div>
                <p className="text lg font-bold">Last Name</p>
                <p>{profile.last_name}</p>
              </div>
              <div>
                <p className="text lg font-bold">Display Name</p>
                <p>{profile.display_name}</p>
              </div>
              <div>
                <p className="text lg font-bold">Headline</p>
                <p>{profile.headline}</p>
              </div>
              <div>
                <p className="text lg font-bold">Bio</p>
                <p>{profile.bio}</p>
              </div>
              <div>
                <p className="text lg font-bold">Phone</p>
                <p>{profile.phone}</p>
              </div>
              <div>
                <p className="text lg font-bold">Timezone</p>
                <p>{profile.timezone}</p>
              </div>
              {profile.last_active && (
                <div>
                  <p className="text lg font-bold">Last Active</p>
                  <p>{profile.last_active}</p>
                </div>
              )}
            </div>

            <Button
              className="m-auto"
              variant="primary"
              onClick={() => navigate("profile-edit")}
            >
              Edit Profile Settings
            </Button>
          </>
        ) : (
          <p>User did not create a profile yet.</p>
        )}
      </Card>

      <Card className="flex-1 flex flex-col" title="Application Settings">
        {application ? (
          <>
            <div className="flex-1 mb-12">
              <pre>{JSON.stringify(application, null, 2)}</pre>
            </div>

            <Button
              className="m-auto"
              variant="primary"
              onClick={() => navigate("application-edit")}
            >
              Edit Application Settings
            </Button>
          </>
        ) : (
          <p>User did not submit an application yet.</p>
        )}
      </Card>
    </div>
  );
}
