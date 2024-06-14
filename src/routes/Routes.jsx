import Hero from "../components/hero/Hero";
import AdminLayout from "../layouts/AdminLayout";
import HomeLayout from "../layouts/HomeLayout";
import LoginPage from "../pages/auth/LoginPage";
import SignupPage from "../pages/auth/SignupPage";
import AdminDashboard from "../components/admin/AdminDashboard";
import Transactions from '../pages/admin/TransactionPage'
import UserList from "../pages/admin/UserPage";
import MoviesList from "../pages/admin/MoviePage";
import ApprovedTheaters from "../components/admin/ApprovedTheaters";
import ApproveTheater from "../components/admin/ApproveTheater";
import AdminRoutes from "../protectRoute/AdminRoutes";
import OwnerRoutes from "../protectRoute/OwnerRoutes";
import OwnerDashboard from "../components/owner/OwnerDashboard";
import OwnerLayout from "../layouts/OwnerLayout";


export const routes = [
  {
    element: <HomeLayout />,
    children: [
      {
        path: "/",
        element: <Hero />
      },
      {
        path: "/signup",
        element: <SignupPage />
      },
      {
        path: "/login",
        element: <LoginPage />
      }

    ]
  }, 
  {
    element: <AdminLayout />,
    children : [
      {
        path: "/adminDashboard",
        element:<AdminRoutes><AdminDashboard /></AdminRoutes> 
      },
      {
        path: "/transactions",
        element: <AdminRoutes><Transactions /></AdminRoutes>
      },
      {
        path: "/users",
        element:<AdminRoutes><UserList /></AdminRoutes>
      },
      {
        path: "/theaters/approved",
        element: <AdminRoutes><ApprovedTheaters /></AdminRoutes>
      },
      {
        path: "/theater/pending-approval",
        element: <AdminRoutes><ApproveTheater /></AdminRoutes>
      },
      {
        path: "/movies",
        element: <AdminRoutes><MoviesList /></AdminRoutes>
      }
    ]
  },
  {
    element: <OwnerLayout />,
    children : [
      {
        path: "/ownerDashboard",
        element:<OwnerDashboard />
      },
    ]
  }
];