import Button from "../../components/Button";
import Card from "../../components/Card";
import Input from "../../components/Input";
import Textarea from "../../components/Textarea";
import Select from "../../components/Select";

import { timezones } from "../../constants/timezones";

export default function ProfileNewForm({
  formData,
  onChange,
  onSubmit,
  loading,
  error,
}) {
  return (
    <Card title="Create Profile" className="w-1/2 mx-auto">
      <form onSubmit={onSubmit}>
        <Input
          label="First Name"
          id="firstName"
          name="firstName"
          value={formData.firstName}
          onChange={onChange}
          required
          placeholder="John"
        />
        <Input
          label="Last Name"
          id="lastName"
          name="lastName"
          value={formData.lastName}
          onChange={onChange}
          required
          placeholder="Wick"
        />
        <Input
          label="Display Name"
          id="displayName"
          name="displayName"
          value={formData.displayName}
          onChange={onChange}
          required
          placeholder="Nick"
        />
        <Input
          label="Phone"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={onChange}
          required
          placeholder="555-123-6767"
        />
        <Input
          label="Headline"
          id="headline"
          name="headline"
          value={formData.headline}
          onChange={onChange}
          placeholder="Software Engineer"
        />
        <Textarea
          label="Bio"
          id="bio"
          name="bio"
          value={formData.bio}
          onChange={onChange}
          placeholder="Tell us about yourself..."
        />
        <Input
          label="Avatar URL"
          id="avatarUrl"
          type="url"
          name="avatarUrl"
          value={formData.avatarUrl}
          onChange={onChange}
          placeholder="https://www.airbender.com"
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
          {loading ? "Creating Profile..." : "Create Profile"}
        </Button>

        {error && <p>Error: {error}</p>}
      </form>
    </Card>
  );
}
