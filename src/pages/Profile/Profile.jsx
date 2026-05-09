import { Link, useNavigate } from "react-router";

import { getFullName } from "../../utils/name";
import { useProfile } from "../../context/profile/useProfile";
import { useAuth } from "../../context/auth/useAuth";

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
        <button onClick={() => navigate("new")}>Create Profile</button>
      </div>
    );
  }

  return (
    <div>
      <button onClick={() => navigate("edit")}>Edit Profile</button>

      <h1>Profile Page</h1>

      {profile.avatar_url && (
        <img src={profile.avatar_url} alt={`{profile.first_name} avatar`} />
      )}

      <div>
        <h2>{getFullName(profile.first_name, profile.last_name)}</h2>
        {profile.display_name && <h3>{profile.display_name}</h3>}
        <p>{profile.headline}</p>
      </div>

      {profile.bio && (
        <div>
          <h4>Bio</h4>
          <p>{profile.bio}</p>
        </div>
      )}

      <p>Email: {user.email}</p>
      {profile.phone && <p>Phone: {profile.phone}</p>}

      <div>Timezone: {profile.timezone}</div>
    </div>
  );
}
