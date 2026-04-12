import { Link, Outlet } from "react-router";
import { useAuth } from "../auth/useAuth";

export default function MainLayout() {
  const { user, logout } = useAuth();

  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>

        {user ? (
          <>
            <Link to="/dashboard">Dashboard</Link>
            <Link to="" onClick={() => logout()}>
              Logout
            </Link>
          </>
        ) : (
          <>
            <Link to="/login">Login</Link>
            <Link to="/signup">Signup</Link>
          </>
        )}
      </nav>

      <hr />

      <Outlet />
    </div>
  );
}
