import Button from "../../components/Button";
import Card from "../../components/Card";
import Input from "../../components/Input";
import Select from "../../components/Select";

import { timezones } from "../../constants/timezones";

export default function ProfileEditForm({
  formData,
  onSubmit,
  onChange,
  loading,
  error,
}) {
  return (
    <div>
      <Card title="Edit Profile" className="w-1/2 mx-auto">
        <form onSubmit={onSubmit}>
          <Input
            label="First Name"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={onChange}
            required
          />
          <Input
            label="Last Name"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={onChange}
            required
          />
          <Input
            label="Display Name"
            id="displayName"
            name="displayName"
            value={formData.displayName}
            onChange={onChange}
            required
          />
          <Input
            label="Phone"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={onChange}
            required
          />
          <Input
            label="Headline"
            id="headline"
            name="headline"
            value={formData.headline}
            onChange={onChange}
          />
          <Input
            label="Bio"
            id="bio"
            name="bio"
            value={formData.bio}
            onChange={onChange}
          />
          <Input
            label="Avatar URL"
            id="avatarUrl"
            type="url"
            name="avatarUrl"
            value={formData.avatarUrl}
            onChange={onChange}
          />
          <Select
            label="Timezone"
            id="timezone"
            name="timezone"
            value={formData.timezone}
            onChange={onChange}
            required
          >
            <option disabled>Please select one</option>
            {timezones.map((tz) => (
              <option key={tz} value={tz}>
                {tz}
              </option>
            ))}
          </Select>
          <Button type="submit" className="w-full" disabled={loading}>
            {loading ? "Updating Profile..." : "Update Profile"}
          </Button>

          {error && <p>Error: {error}</p>}
        </form>
      </Card>
    </div>
  );
}
