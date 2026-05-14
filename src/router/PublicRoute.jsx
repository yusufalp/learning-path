import { Navigate, Outlet } from "react-router";

import { useAuth } from "../context/auth/useAuth";

export default function PublicRoute() {
  const { user, loading } = useAuth();

  if (loading) return <div>Loading...</div>;

  return !user ? <Outlet /> : <Navigate to="/dashboard" replace />;
}
