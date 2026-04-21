import { Link } from "react-router";

import { useAuth } from "../../auth/useAuth";
import { getFullName } from "../../utils/profile";

import profiles from "../../data/profiles.json";

export default function Profile() {
  const { user } = useAuth();

  const profile = profiles.find((profile) => profile.user_id === user._id);
  return (
    <div>
      <nav>
        <Link to="settings">Edit Profile</Link>
      </nav>
      <h1>Profile Page</h1>
      <img src={profile.avatar_url} alt={`{profile.first_name} avatar`} />
      <p>
        {getFullName(
          profile.first_name,
          profile.middle_name,
          profile.last_name,
        )}
      </p>
      <p>{user.email}</p>
      <p>{profile.bio}</p>
    </div>
  );
}
