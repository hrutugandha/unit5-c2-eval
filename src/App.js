import { Home } from "./components/Home";
import { Login } from "./components/Login";
import { EmployeeList } from "./components/EmployeeList";
import { EmployeeDetails } from "./components/EmployeeDetails";
import { Admin } from "./components/Admin";
//import { PrivateRoute } from "./components/PrivateRoute";
import { Navbar } from "./components/Navbar";
import { Logout } from "./components/Logout";
import {Routes,Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path = "/" component = {Home} />
        <Route path = "/login" component = {Login} />
        <Route path = "/employeelist" component = {EmployeeList} />
        <Route path = "/admin" component = {Admin} />
        <Route path = "/employeedetails" component = {EmployeeDetails} />
        <Route path = "/logout" component = {Logout} />
      </Routes>
    </div>
  );
}

export default App;