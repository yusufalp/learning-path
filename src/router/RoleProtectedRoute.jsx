import { Navigate, Outlet } from "react-router";
import { useAuth } from "../context/auth/useAuth";

export default function RoleProtectedRoute({ allowedRoles, children }) {
  const { user, loading, hasRole } = useAuth();

  if (loading) return <div>Loading...</div>;

  if (!user) return <Navigate to="/login" replace />;

  if (user.role === "owner") {
    return <>{children || <Outlet />}</>;
  }

  if (allowedRoles.length > 0 && !hasRole(allowedRoles)) {
    return <Navigate to="/dashboard" replace />;
  }

  return <>{children}</>;
}
