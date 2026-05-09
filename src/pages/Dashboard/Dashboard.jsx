import { Outlet, Link, useNavigate } from "react-router";

export default function Dashboard() {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Dashboard</h1>

      <button onClick={() => navigate("/application")}>View Application</button>

      <button onClick={() => navigate("/profile")}>View Profile</button>
    </div>
  );
}
