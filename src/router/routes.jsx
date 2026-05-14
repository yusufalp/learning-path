import { createBrowserRouter, Outlet } from "react-router";

import MainLayout from "../layout/MainLayout";

import PublicRoute from "./PublicRoute";
import PrivateRoute from "./PrivateRoute";
import RoleProtectedRoute from "./RoleProtectedRoute";

import Login from "../features/Login";
import Signup from "../features/Signup";
import ApplicationNew from "../features/Application/ApplicationNew";
import ProfileNew from "../features/Profile/ProfileNew";
import ProfileEdit from "../features/Profile/ProfileEdit";

import About from "../pages/About";
import Home from "../pages/Home";
import Application from "../pages/Application/Application";
import Courses from "../pages/Course/Courses";
import CourseDetails from "../pages/Course/CourseDetails";
import CourseDetailModules from "../pages/Course/CourseDetailModules";
import CourseDetailModuleDetails from "../pages/Course/CourseDetailModuleDetails";
import CourseDetailAssignments from "../pages/Course/CourseDetailAssignments";
import CourseDetailAssignmentDetails from "../pages/Course/CourseDetailAssignmentDetails";
import CourseDetailAssignmentNew from "../pages/Course/CourseDetailAssignmentNew";
import CourseDetailAnnouncements from "../pages/Course/CourseDetailAnnouncements";
import CourseDetailGrades from "../pages/Course/CourseDetailGrades";
import CourseDetailPeople from "../pages/Course/CourseDetailPeople";
import Dashboard from "../pages/Dashboard/Dashboard";
import DashboardSettings from "../pages/Dashboard/DashboardSettings";
import Profile from "../pages/Profile/Profile";
import UserList from "../pages/User/UserList";
import UserDetails from "../pages/User/UserDetails";
import UserDetailsUserEdit from "../pages/User/UserDetailsUserEdit";
import UserDetailsProfileEdit from "../pages/User/UserDetailsProfileEdit";
import UserDetailsApplicationEdit from "../pages/User/UserDetailsApplicationEdit";

import NotFound from "../pages/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "about",
        Component: About,
      },
      {
        Component: PublicRoute,
        children: [
          {
            path: "/login",
            Component: Login,
          },
          {
            path: "/signup",
            Component: Signup,
          },
        ],
      },
      {
        Component: PrivateRoute,
        children: [
          {
            path: "admin",
            Component: () => (
              <RoleProtectedRoute allowedRoles={["admin"]}>
                <Outlet />
              </RoleProtectedRoute>
            ),
            children: [
              {
                path: "users",
                children: [
                  { index: true, Component: UserList },
                  {
                    path: ":userId",
                    children: [
                      { index: true, Component: UserDetails },
                      {
                        path: "user-edit",
                        Component: UserDetailsUserEdit,
                      },
                      {
                        path: "profile-edit",
                        Component: UserDetailsProfileEdit,
                      },
                      {
                        path: "application-edit",
                        Component: UserDetailsApplicationEdit,
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            path: "application",
            Component: () => (
              <RoleProtectedRoute allowedRoles={["read"]}>
                <Outlet />
              </RoleProtectedRoute>
            ),
            children: [
              { index: true, Component: Application },
              { path: "new", Component: ApplicationNew },
            ],
          },
          {
            path: "dashboard",
            children: [
              { index: true, Component: Dashboard },
              { path: "settings", Component: DashboardSettings },
            ],
          },
          {
            path: "profile",
            children: [
              { index: true, Component: Profile },
              { path: "edit", Component: ProfileEdit },
              { path: "new", Component: ProfileNew },
            ],
          },
          {
            path: "courses",
            children: [
              { index: true, Component: Courses },
              {
                path: ":courseId",
                children: [
                  { index: true, Component: CourseDetails },
                  {
                    path: "modules",
                    children: [
                      { index: true, Component: CourseDetailModules },
                      {
                        path: ":modulesId",
                        Component: CourseDetailModuleDetails,
                      },
                    ],
                  },
                  {
                    path: "assignments",
                    children: [
                      { index: true, Component: CourseDetailAssignments },
                      {
                        path: ":assignmentId",
                        Component: CourseDetailAssignmentDetails,
                      },
                      {
                        path: "new",
                        Component: CourseDetailAssignmentNew,
                      },
                    ],
                  },
                  {
                    path: "grades",
                    children: [{ index: true, Component: CourseDetailGrades }],
                  },
                  {
                    path: "people",
                    children: [{ index: true, Component: CourseDetailPeople }],
                  },
                  {
                    path: "announcements",
                    children: [
                      { index: true, Component: CourseDetailAnnouncements },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    path: "*",
    Component: NotFound,
  },
]);
