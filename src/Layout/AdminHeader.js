import { useEffect, useState } from "react";
import assets from "../assets/assets"
import '../Admin/Style/AdminHeader.css'
import { Link, useLocation } from "react-router-dom";

function AdminHeader() {
    const [showSidebar, setShowSidebar] = useState(false);
    const location = useLocation();

    const toggleSidebar = () => {
        setShowSidebar(!showSidebar);
    };

    useEffect(() =>{
        setShowSidebar(false);
    },[location]);

    const navMenu = (
        <>
            <h1>Admin</h1>
            <Link to="/admin/dashboard" className={location.pathname === "/admin/dashboard" ? "active" : ""}>Dashboard</Link>
            <Link to="/admin/gallery" className={location.pathname === "/admin/gallery" || location.pathname === "/admin/uploadimage" ? "active" : ""}>Gallery</Link>
            <Link to="/admin/teacher" className={location.pathname === "/admin/teacher" || location.pathname === "/admin/uploadteacherdata" ? "active" : ""}>Teacher Data</Link>
            <Link to="/admin/blogs" className={location.pathname === "/admin/blogs" || location.pathname === "/admin/uploadblogsdata" ? "active" : ""}>Blogs</Link>
            <Link to="/">Home</Link>
        </>
    );

    return (
        <>
            <div className={`admin-sidebar ${showSidebar ? "show" : ""}`}>
                {navMenu}
            </div>

            <header className="admin-header">
                <div className="admin-header-left">
                    <div className="admin-menu-btn" onClick={toggleSidebar}>
                        {showSidebar ? "✕" : "☰"}
                    </div>
                    <Link to="/admin/dashboard">
                        <h1 className="name-logo">Urvik</h1>
                    </Link>
                </div>

                <div className="admin-header-right">
                    <div className="admin-img">
                        <img src={assets.adminImg} alt="admin" />
                    </div>
                </div>
            </header>
        </>
    )
}

export default AdminHeader