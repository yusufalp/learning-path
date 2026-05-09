import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router";

import { AuthProvider } from "./context/auth/AuthProvider";
import { ProfileProvider } from "./context/profile/ProfileProvider";
import { router } from "./router/routes";

import "./index.css";

createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <ProfileProvider>
      <RouterProvider router={router} />
    </ProfileProvider>
  </AuthProvider>,
);
