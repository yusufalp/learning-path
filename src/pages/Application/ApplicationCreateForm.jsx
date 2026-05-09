export default function ApplicationCreateForm({
  formData,
  onChange,
  onSubmit,
  loading,
  error,
}) {
  return (
    <form onSubmit={onSubmit}>
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

      <button disabled={loading}>
        {loading ? "Submitting Application..." : "Submit Application"}
      </button>

      {error && <p>{error}</p>}
    </form>
  );
}
