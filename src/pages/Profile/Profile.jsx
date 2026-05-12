import { Link, useNavigate } from "react-router";

import Button from "../../components/Button";
import { getFullName } from "../../utils/name";
import { useProfile } from "../../context/profile/useProfile";
import { useAuth } from "../../context/auth/useAuth";
import Card from "../../components/Card";
import { timezoneMap } from "../../constants/timezones";

export default function Profile() {
  const { profile, loading, error, hasProfile } = useProfile();
  const { user } = useAuth();
  const navigate = useNavigate();

  if (loading) return <div>Loading profile...</div>;
  if (error) return <div>Error: {error}</div>;

  if (!hasProfile) {
    return (
      <div>
        <p>You did not fill out a profile yet.</p>
        <Button onClick={() => navigate("new")}>Create Profile</Button>
      </div>
    );
  }

  return (
    <div>
      <div className="flex flex-col lg:flex-row gap-x-3">
        <Card title={getFullName(profile.first_name, profile.last_name)}>
          {profile.avatar_url && (
            <img
              src={profile.avatar_url}
              alt={`{profile.first_name} avatar`}
              className="w-48 rounded-full mx-auto"
            />
          )}

          <Button
            variant="primary"
            size="sm"
            className="mx-auto mt-4"
            onClick={() => navigate("edit")}
          >
            Edit Profile
          </Button>
        </Card>

        <Card>
          <p className="text-lg font-bold">Headline</p>
          <p>{profile.headline}</p>

          {profile.bio && (
            <div>
              <p className="text-lg font-bold">Bio</p>
              <p>{profile.bio}</p>
            </div>
          )}
        </Card>

        <Card>
          <p className="text-lg font-bold">Email</p>
          <p>{user.email}</p>
          {profile.phone && (
            <div>
              <p className="text-lg font-bold">Phone</p>
              <p>{profile.phone}</p>
            </div>
          )}

          <p className="text-lg font-bold">Timezone</p>
          <p>
            {
              timezoneMap.find((tz) => tz.canonicalName === profile.timezone)
                .displayWithOffset
            }
          </p>
        </Card>
      </div>
    </div>
  );
}
