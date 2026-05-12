import Button from "../components/Button";
import Card from "../components/Card";
import Input from "../components/Input";
import StyledLink from "../components/StyledLink";

export default function LoginForm({
  formData,
  onChange,
  onSubmit,
  loading,
  error,
}) {
  return (
    <div>
      <Card title="Welcome Back" className="w-1/2 mx-auto">
        <form onSubmit={onSubmit}>
          <Input
            label="Email"
            id="email"
            type="email"
            name="email"
            value={formData.email}
            onChange={onChange}
            placeholder="johnwick@ruska.com"
          />
          <Input
            label="Password"
            id="password"
            type="password"
            name="password"
            value={formData.password}
            onChange={onChange}
          />

          <p className="text-center my-4">
            Don't have an account? <StyledLink to="/signup">Signup</StyledLink>
          </p>

          <Button type="submit" className="w-full" disabled={loading}>
            {loading ? "Please wait..." : "Login"}
          </Button>
        </form>
      </Card>
      {error && <p className="pre-line">{error}</p>}
    </div>
  );
}
