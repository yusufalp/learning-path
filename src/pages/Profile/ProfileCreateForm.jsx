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

      <div>
        <label htmlFor="firstName">First Name</label>
        <input
          type="text"
          name="firstName"
          id="firstName"
          value={formData.firstName}
          onChange={onChange}
        />
      </div>

      <div>
        <label htmlFor="lastName">Last Name</label>
        <input
          type="text"
          name="lastName"
          id="lastName"
          value={formData.lastName}
          onChange={onChange}
        />
      </div>

      <div>
        <label htmlFor="displayName">Display Name</label>
        <input
          type="text"
          name="displayName"
          id="displayName"
          value={formData.displayName}
          onChange={onChange}
        />
      </div>

      <div>
        <label htmlFor="avatarUrl">Avatar URL</label>
        <input
          type="url"
          name="avatarUrl"
          id="avatarUrl"
          value={formData.avatarUrl}
          onChange={onChange}
        />
      </div>

      <div>
        <label htmlFor="bio">Bio</label>
        <input
          type="text"
          name="bio"
          id="bio"
          value={formData.bio}
          onChange={onChange}
        />
      </div>

      <div>
        <label htmlFor="headline">Headline</label>
        <input
          type="text"
          name="headline"
          id="headline"
          value={formData.headline}
          onChange={onChange}
        />
      </div>

      <div>
        <label htmlFor="phone">Phone Number</label>
        <input
          type="text"
          name="phone"
          id="phone"
          value={formData.phone}
          onChange={onChange}
        />
      </div>

      <div>
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
      </div>

      <div>
        <p>Email Notifications</p>
        <label htmlFor="">
          <input
            type="radio"
            name="emailNotifications"
            value="true"
            onChange={onChange}
            checked={formData.emailNotifications === true}
          />
          Yes
        </label>
        <label htmlFor="">
          <input
            type="radio"
            name="emailNotifications"
            value="false"
            onChange={onChange}
            checked={formData.emailNotifications === false}
          />
          No
        </label>
      </div>

      <div>
        <p>Push Notifications</p>
        <label htmlFor="">
          <input
            type="radio"
            name="pushNotifications"
            value="true"
            onChange={onChange}
            checked={formData.pushNotifications === true}
          />
          Yes
        </label>
        <label htmlFor="">
          <input
            type="radio"
            name="pushNotifications"
            value="false"
            onChange={onChange}
            checked={formData.pushNotifications === false}
          />
          No
        </label>
      </div>

      <button disabled={loading}>
        {loading ? "Creating Profile..." : "Create Profile"}
      </button>

      {error && <p>Error: {error}</p>}
    </form>
  );
}
