import { Outlet, Link, useNavigate } from "react-router";

import Button from "../../components/Button";
import Card from "../../components/Card";
import useHasRequiredRoles from "../../hooks/useHasRequiredRole";

export default function Dashboard() {
  const isOwnerOrAdmin = useHasRequiredRoles(["owner", "admin"]);
  const isApplicant = useHasRequiredRoles(["read"]);
  const navigate = useNavigate();

  return (
    <div className="flex justify-between flex-col md:flex-row">
      <Card title="Dashboard">
        <div className="flex flex-col justify-between gap-3 md:flex-row md:gap-0">
          {isApplicant && (
            <Button
              variant="secondary"
              onClick={() => navigate("/application")}
            >
              View Application
            </Button>
          )}

          {isOwnerOrAdmin && (
            <Button
              variant="secondary"
              onClick={() => navigate("/admin/users")}
            >
              View All Users
            </Button>
          )}
        </div>
      </Card>

      <Card title="Personal Info">
        <div className="flex flex-col justify-between gap-3 md:flex-row md:gap-0">
          <Button variant="secondary" onClick={() => navigate("/profile")}>
            Profile
          </Button>
          <Button variant="secondary">Preferences</Button>
          <Button variant="secondary">Settings</Button>
        </div>
      </Card>
    </div>
  );
}
