import Homepage from './pages/homepage/Homepage.js';
import Signup from './pages/auth/Signup.js';
import Login from './pages/auth/Login.js';
import ResetPassword from './pages/auth/ResetPassword.js';
import Contributors from './pages/contributors/Contributors.js';
import ContributeForm from './pages/contributeForm/ContributeForm.js';
import Courses from './pages/courses/Courses.js';
import CourseCategory from './pages/courseCategory/CourseCategory.js';

const routes = [
  { path: "/", element: <Homepage />, index: true }, // Default route
  { path: "signup", element: <Signup /> },
  { path: "login", element: <Login /> },
  { path: "reset-password", element: <ResetPassword /> },
  { path: "contributors", element: <Contributors /> },
  { path: "contribute-form", element: <ContributeForm /> },
  { path: "courses", element: <Courses /> },
  { path: "course/:courseName", element: <CourseCategory/> }, // Dynamic route
];

export default routes;