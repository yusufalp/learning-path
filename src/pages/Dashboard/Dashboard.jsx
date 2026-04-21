import { Outlet, Link } from "react-router";

export default function Dashboard() {
  return (
    <div>
      <nav>
        <Link to="settings">Edit Dashboard</Link>
      </nav>
      <h1>Dashboard</h1>
    </div>
  );
}
