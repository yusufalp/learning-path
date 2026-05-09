export default function LoginForm({
  formData,
  onChange,
  onSubmit,
  loading,
  error,
}) {
  return (
    <div>
      <h1>Login Page</h1>

      <form onSubmit={onSubmit}>
        <label htmlFor="email">Email</label>
        <input
          type="text"
          name="email"
          id="email"
          value={formData.email}
          onChange={onChange}
        />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          id="password"
          value={formData.password}
          onChange={onChange}
        />

        <button disabled={loading}>
          {loading ? "Please wait..." : "Login"}
        </button>
      </form>

      {error && <p className="pre-line">{error}</p>}
    </div>
  );
}
