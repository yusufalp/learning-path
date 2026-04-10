import { createBrowserRouter } from "react-router";

import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import About from "../pages/About";

import PublicRoute from "./PublicRoute";
import Login from "../pages/Login";
import Signup from "../pages/Signup";

import PrivateRoute from "./PrivateRoute";
import Dashboard from "../pages/Dashboard";
import Profile from "../pages/Profile";
import ProfileSettings from "../pages/ProfileSettings";

import NotFound from "../pages/NotFound";
import Courses from "../pages/Course/Courses";
import CourseDetails from "../pages/Course/CourseDetails";
import CourseDetailModules from "../pages/Course/CourseDetailModules";
import CourseDetailModuleDetails from "../pages/Course/CourseDetailModuleDetails";
import CourseDetailAssignments from "../pages/Course/CourseDetailAssignments";
import CourseDetailAssignmentDetails from "../pages/Course/CourseDetailAssignmentDetails";
import CourseDetailGrades from "../pages/Course/CourseDetailGrades";
import CourseDetailPeople from "../pages/Course/CourseDetailPeople";
import CourseDetailAnnouncements from "../pages/Course/CourseDetailAnnouncements";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        element: <PublicRoute />,
        children: [
          {
            path: "/login",
            element: <Login />,
          },
          {
            path: "/signup",
            element: <Signup />,
          },
        ],
      },
      {
        element: <PrivateRoute />,
        children: [
          {
            path: "dashboard",
            element: <Dashboard />,
          },
          {
            path: "profile",
            element: <Profile />,
            children: [
              {
                path: "settings",
                element: <ProfileSettings />,
              },
            ],
          },
          {
            path: "courses",
            element: <Courses />,
            children: [
              {
                path: ":courseId",
                element: <CourseDetails />,
                children: [
                  {
                    path: "modules",
                    element: <CourseDetailModules />,
                    children: [
                      {
                        path: ":moduleId",
                        element: <CourseDetailModuleDetails />,
                      },
                    ],
                  },
                  {
                    path: "assignments",
                    element: <CourseDetailAssignments />,
                    children: [
                      {
                        path: ":assignmentId",
                        element: <CourseDetailAssignmentDetails />,
                      },
                    ],
                  },
                  {
                    path: "grades",
                    element: <CourseDetailGrades />,
                  },
                  {
                    path: "people",
                    element: <CourseDetailPeople />,
                  },
                  {
                    path: "announcements",
                    element: <CourseDetailAnnouncements />,
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
    element: <NotFound />,
  },
]);
