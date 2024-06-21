import Hero from "../components/hero/Hero";
import AdminLayout from "../layouts/AdminLayout";
import HomeLayout from "../layouts/HomeLayout";
import LoginPage from "../pages/auth/LoginPage";
import SignupPage from "../pages/auth/SignupPage";
import AdminRoutes from "../protectRoute/AdminRoutes";
import OwnerRoutes from "../protectRoute/OwnerRoutes";
import OwnerDashboard from "../components/owner/OwnerDashboard";
import OwnerLayout from "../layouts/OwnerLayout";
import AddTheaterPage from "../pages/owner/AddTheaterPage";
import ManageTheaterPage from "../pages/owner/ManageTheaterPage";
import MoviePage from "../pages/admin/MoviePage";
import UserPage from "../pages/admin/UserPage";
import TransactionPage from "../pages/admin/TransactionPage";
import ApprovedTheatersPage from "../pages/admin/ApprovedTheatersPage";
import ApproveTheaterPage from "../pages/admin/ApproveTheaterPage";
import AllMoviePage from "../pages/owner/AllMoviePage";
import AdminDashboardPage from "../pages/admin/AdminDashboardPage";
import AddShowPage from "../pages/owner/AddShowPage";


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
        element:<AdminRoutes><AdminDashboardPage /></AdminRoutes> 
      },
      {
        path: "/transactions",
        element: <AdminRoutes><TransactionPage /></AdminRoutes>
      },
      {
        path: "/users",
        element:<AdminRoutes><UserPage /></AdminRoutes>
      },
      {
        path: "/theaters/approved",
        element: <AdminRoutes><ApprovedTheatersPage /></AdminRoutes>
      },
      {
        path: "/theater/pending-approval",
        element: <AdminRoutes><ApproveTheaterPage /></AdminRoutes>
      },
      {
        path: "/movies",
        element: <AdminRoutes><MoviePage /></AdminRoutes>
      }
    ]
  },
  {
    element: <OwnerLayout />,
    children : [
      {
        path: "/ownerDashboard",
        element:<OwnerRoutes><OwnerDashboard /></OwnerRoutes>
      },
      {
        path: "/movie-list",
        element: <OwnerRoutes><AllMoviePage/></OwnerRoutes>
      },
      { path: "/theater/add",
       element: <OwnerRoutes><AddTheaterPage/></OwnerRoutes> 
      },
      {
        path: "/theaters/manage",
        element: <OwnerRoutes><ManageTheaterPage/></OwnerRoutes>
      },
      {
        path: "/shows",
        element: <OwnerRoutes><AddShowPage/></OwnerRoutes>
      }

    ]
  }
];