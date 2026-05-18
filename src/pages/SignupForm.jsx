import Button from "../components/Button";
import Card from "../components/Card";
import Error from "../components/Error";
import Input from "../components/Input";
import StyledLink from "../components/StyledLink";

export default function SignupForm({
  formData,
  onChange,
  onSubmit,
  loading,
  error,
}) {
  return (
    <div>
      <Card title="Create an account" className="mx-auto">
        <form onSubmit={onSubmit}>
          <Input
            label="Email"
            id="email"
            type="email"
            name="email"
            value={formData.email}
            onChange={onChange}
          />
          <Input
            label="Password"
            id="password"
            type="password"
            name="password"
            value={formData.password}
            onChange={onChange}
          />
          <Input
            label="Confirm Password"
            id="confirmPassword"
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={onChange}
          />

          <p className="text-center my-4">
            Already have an account? <StyledLink to="/login">Login</StyledLink>
          </p>

          <Button type="submit" className="w-full" disabled={loading}>
            {loading ? "Please wait..." : "Signup"}
          </Button>
        </form>
        
        <Error errors={error.split("-")} />
      </Card>
    </div>
  );
}
