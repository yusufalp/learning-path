import { createBrowserRouter } from "react-router";

import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import About from "../pages/About";

import PublicRoute from "./PublicRoute";
import Login from "../pages/Login";
import Signup from "../pages/Signup";

import PrivateRoute from "./PrivateRoute";
import Dashboard from "../pages/Dashboard/Dashboard";
import DashboardSettings from "../pages/Dashboard/DashboardSettings";
import Profile from "../pages/Profile/Profile";
import ProfileSettings from "../pages/Profile/ProfileSettings";

import Courses from "../pages/Course/Courses";
import CourseDetails from "../pages/Course/CourseDetails";
import CourseDetailModules from "../pages/Course/CourseDetailModules";
import CourseDetailModuleDetails from "../pages/Course/CourseDetailModuleDetails";
import CourseDetailAssignments from "../pages/Course/CourseDetailAssignments";
import CourseDetailAssignmentDetails from "../pages/Course/CourseDetailAssignmentDetails";
import CourseDetailGrades from "../pages/Course/CourseDetailGrades";
import CourseDetailPeople from "../pages/Course/CourseDetailPeople";
import CourseDetailAnnouncements from "../pages/Course/CourseDetailAnnouncements";

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
              { path: "settings", Component: ProfileSettings },
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
