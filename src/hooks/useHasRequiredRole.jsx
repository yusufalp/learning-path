import { useAuth } from "../context/auth/useAuth";

export default function useHasRequiredRoles(requiredRoles = []) {
  const { user } = useAuth();

  if (!user || !user.role) return false;

  if (requiredRoles.length === 0) return true;

  return requiredRoles.some((role) => role === user.role);
}
