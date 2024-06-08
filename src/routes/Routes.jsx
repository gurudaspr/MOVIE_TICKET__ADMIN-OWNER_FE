import Hero from "../components/hero/Hero";
import AdminLayout from "../layouts/AdminLayout";
import HomeLayout from "../layouts/HomeLayout";
import LoginPage from "../pages/auth/LoginPage";
import SignupPage from "../pages/auth/SignupPage";
import AdminDashboard from "../components/admin/AdminDashboard";
import Transactions from "../components/admin/TransactionList";
import UserList from "../components/admin/UserList";
import TheaterList from "../components/admin/TheaterList";
import MoviesList from "../components/admin/MoviesList";


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
        path: "/theaters",
        element: <TheaterList />
      },
      {
        path: "/movies",
        element: <MoviesList />
      }
    ]
  }
];