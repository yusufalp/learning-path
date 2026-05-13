import Button from "../../components/Button";
import Card from "../../components/Card";
import Input from "../../components/Input";

export default function ApplicationNewForm({
  formData,
  onChange,
  onSubmit,
  loading,
  error,
}) {
  return (
    <Card title="Start an Application" className="w-1/2 mx-auto">
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

        <Button type="submit" className="w-full" disabled={loading}>
          {loading ? "Submitting Application..." : "Submit Application"}
        </Button>

        {error && <p>{error}</p>}
      </form>
    </Card>
  );
}
