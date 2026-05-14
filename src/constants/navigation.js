export const mainLinks = [
  { to: "/", label: "Home", roles: [] },
  { to: "/about", label: "About", roles: [] },
];

export const authenticatedLinks = [
  { to: "/dashboard", label: "Dashboard", roles: [] },
  { to: "/application", label: "Application", roles: ["read"] },
  { to: "/profile", label: "Profile", roles: [] },
];

export const guestLinks = [
  { to: "/login", label: "Login", roles: [] },
  { to: "/signup", label: "Signup", roles: [] },
];
