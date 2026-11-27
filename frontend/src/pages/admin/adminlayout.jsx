import { Link, Outlet } from "react-router-dom";

function Adminlayout() {
    return (
        <>
          <div>AdminLayout</div>
          <nav>
            <Link to="admindashboard"> Admin Dashboard</Link>
            <Link to="settings"> Settings </Link>
            <Link to="userdetails"> user Details </Link>
          </nav>
          <Outlet/>
        </>
    );
}

export default Adminlayout;