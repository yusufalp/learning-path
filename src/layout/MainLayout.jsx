import { useState } from "react";
import { Outlet } from "react-router";

import { useAuth } from "../context/auth/useAuth";

import StyledLink from "../components/StyledLink";
import NavMenu from "../components/NavMenu";

import {
  authenticatedLinks,
  guestLinks,
  mainLinks,
} from "../constants/navigation";

export default function MainLayout() {
  const { user, logout } = useAuth();
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = () => setIsOpen(false);

  return (
    <div>
      <nav className="flex items-center justify-between mx-4 my-2 relative z-50">
        <div className="flex items-center gap-x-8">
          <NavMenu links={mainLinks} />
        </div>

        <div className="hidden md:flex items-center gap-x-8">
          <NavMenu links={user ? authenticatedLinks : guestLinks} />

          {user && (
            <StyledLink to="" onClick={() => logout()}>
              Logout
            </StyledLink>
          )}
        </div>

        <button
          className="md:hidden text-gray-700"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </nav>

      {isOpen && (
        <div className="fixed top-[48px] right-4 w-64 bg-white border border-gray-300 rounded-2xl shadow-2xl py-4 z-50 md:hidden">
          <div className="flex flex-col gap-y-4 px-6">
            <NavMenu
              links={user ? authenticatedLinks : guestLinks}
              onLinkClick={handleLinkClick}
            />

            {user && (
              <StyledLink
                to=""
                onClick={() => {
                  logout();
                  handleLinkClick();
                }}
              >
                Logout
              </StyledLink>
            )}
          </div>
        </div>
      )}

      <hr />

      <div className="m-4">
        <Outlet />
      </div>
    </div>
  );
}
