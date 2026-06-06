import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../components/layouts/RootLayout";
import {
  Home,
  Login,
  Register,
  Courses,
  CourseDetail,
  Teachers,
  About,
  Contact,
  Groups,
  GroupDetail,
  AddGroup,
  Students,
  StudentProfile,
  Blog,
  BlogDetail,
  NotFound,
} from "../pages";
import ProtectedRoute from "./protected.route.tsx";

const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/courses",
        element: <Courses />,
      },
      {
        path: "/courses/:id",
        element: <CourseDetail />,
      },
      {
        path: "/teachers",
        element: <Teachers />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/groups",
        element: <Groups />,
      },
      {
        path: "/groups/:id",
        element: <GroupDetail />,
      },
      {
        path: "/groups/add",
        element: <AddGroup />,
      },
      {
        path: "/students",
        element: <Students />,
      },
      {
        path: "/students/:id",
        element: <StudentProfile />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/blog/:id",
        element: <BlogDetail />,
      },
    ],
  },
  {
    path: "/login",
    element: (
      <ProtectedRoute>
        <Login />,
      </ProtectedRoute>
    ),
  },
  {
    path: "/register",
    element: (
      <ProtectedRoute>
        <Register />,
      </ProtectedRoute>
    ),
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);
export default router;
