import axios from 'axios';
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { baseUrl } from '../baseUrl/baseUrl';

const AdminRoutes = ({ children }) => {
  const navigate = useNavigate();
  const [authChecked, setAuthChecked] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const checkAdmin = async () => {
      try {
        const res = await axios.get(
          `${baseUrl}/api/admin/check-admin`, { withCredentials: true }
        );
        const data = res.data;
        console.log('datauser', data);
        if (data.success) {
            setIsAuthenticated(true);
          } else {
            navigate("/adminDashboard", { replace: true });
          }
        } catch (error) {
          console.error("Error occurred while checking :", error);
          navigate("/login", { replace: true });
        } finally {
          setAuthChecked(true);
        }
      };
    checkAdmin();
  }, [navigate]);

  if (!authChecked) {
    return null;
  }

  return isAuthenticated ? children : null;
};

export default AdminRoutes;