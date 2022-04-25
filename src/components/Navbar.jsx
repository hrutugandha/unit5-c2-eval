import { Home } from "./Home";
import { Login } from "./Login";
import { EmployeeList } from "./EmployeeList";
//import { EmployeeDetails } from "./components/EmployeeDetails";
import { Admin } from "./Admin";
//import { ProtectedRoute } from "./components/PrivateRoute";
import { Logout } from "./Logout";
import {Link} from 'react-router-dom';

export const Navbar = () => {
    return (
      <div className="navbar">
        <Link className="nav-home" to="/">
          {Home}
        </Link>
        <Link className="nav-list" to="/employees">
         { EmployeeList}
        </Link>
        <Link className="nav-admin" to="/admin">
         { Admin}
        </Link>
        {/* Show Either logout or login based on auth context. DO NOT show both */}
        <Link className="nav-logout" to="/logout">
         { Logout}
        </Link>
  
        <Link className="nav-login" to="/login">
         { Login}
        </Link>
      </div>
    );
  };