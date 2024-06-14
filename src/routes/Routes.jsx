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
        element: <AdminDashboard />
      },
      {
        path: "/transactions",
        element: <Transactions />
      },
      {
        path: "/users",
        element: <UserList />
      },
      {
        path: "/theaters/approved",
        element: <ApprovedTheaters />
      },
      {
        path: "/theater/pending-approval",
        element: <ApproveTheater />
      },
      {
        path: "/movies",
        element: <MoviesList />
      }
    ]
  }
];