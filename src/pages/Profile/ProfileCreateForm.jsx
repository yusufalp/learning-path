import { timezones } from "../../constants/timezones";

export default function ProfileCreateForm({
  formData,
  onChange,
  onSubmit,
  loading,
  error,
}) {
  return (
    <form onSubmit={onSubmit}>
      <h1>Create Profile</h1>

      <label htmlFor="firstName">First Name</label>
      <input type="text" name="firstName" id="firstName" />
      <label htmlFor="lastName">Last Name</label>
      <input type="text" name="lastName" id="lastName" />
      <label htmlFor="displayName">Display Name</label>
      <input type="text" name="displayName" id="displayName" />
      <label htmlFor="avatarUrl">Avatar URL</label>
      <input type="url" name="avatarUrl" id="avatarUrl" />
      <label htmlFor="bio">Bio</label>
      <input type="text" name="bio" id="bio" />
      <label htmlFor="headline">Headline</label>
      <input type="text" name="headline" id="headline" />
      <label htmlFor="phone">Phone Number</label>
      <input type="text" name="phone" id="phone" />

      <label htmlFor="timezone">Timezone</label>
      <select
        name="timezone"
        id="timezone"
        value={formData.timezone}
        onChange={onChange}
      >
        <option value="" disabled>
          Select your timezone
        </option>
        {timezones.map((tz) => (
          <option key={tz} value={tz}>
            {tz}
          </option>
        ))}
      </select>

      <button disabled={loading}>
        {loading ? "Creating Profile..." : "Create Profile"}
      </button>

      {error && <p>Error: {error}</p>}
    </form>
  );
}
