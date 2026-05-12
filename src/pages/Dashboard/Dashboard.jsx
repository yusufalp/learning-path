import { Outlet, Link, useNavigate } from "react-router";

import Button from "../../components/Button";
import Card from "../../components/Card";

export default function Dashboard() {
  const navigate = useNavigate();

  return (
    <div>
      <Card title="Dashboard">
        <div className="flex flex-col justify-between gap-3 sm:flex-row sm:gap-0">
          <Button variant="secondary" onClick={() => navigate("/application")}>
            View Application
          </Button>

          <Button variant="secondary" onClick={() => navigate("/profile")}>
            View Profile
          </Button>
        </div>
      </Card>
    </div>
  );
}
