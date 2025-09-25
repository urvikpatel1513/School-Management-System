/* eslint-disable no-unused-vars */
import "@fortawesome/fontawesome-free/css/all.min.css";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { useEffect } from "react";
import MainLayout from "./Frontend/MainLayout";
import AdminLayout from "./Admin/AdminLayout";
import Home from "./Frontend/Home";
import Gallery from "./Frontend/Gallery";
import Teacher from "./Frontend/Teacher";
import About from "./Frontend/About";
import Contact from "./Frontend/Contact";
import Blogs from "./Frontend/Blogs";
import AdminDashboard from "./Admin/AdminDashboard";
import AdminGallery from "./Admin/AdminGallery";
import AdminTeacher from "./Admin/AdminTeacher";
import AdminBlogs from "./Admin/AdminBlogs";
import UploadImage from "./Admin/UploadImage";
import UploadBlogsData from "./Admin/UploadBlogsData";
import UploadTeacherData from "./Admin/UploadTeacherData";
import EditTeacherData from "./Admin/EditTeacherData";
import EditBlogsData from "./Admin/EditBlogsData";

function App() {
  function ScrollTop() {
    const { pathname } = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);
  }

  return (
    <>
      <BrowserRouter>
        <ScrollTop />
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/teacher" element={<Teacher />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blogs" element={<Blogs />} />
          </Route>

          <Route element={<AdminLayout />}>
            <Route path="/admin/dashboard" element={<AdminDashboard />} />
            <Route path="/admin/gallery" element={<AdminGallery />} />
            <Route path="/admin/teacher" element={<AdminTeacher />} />
            <Route path="/admin/blogs" element={<AdminBlogs />} />
            <Route path="/admin/uploadimage" element={<UploadImage />} />
            <Route path="/admin/uploadteacherdata" element={<UploadTeacherData />} />
            <Route path="/edit-teacher" element={<EditTeacherData />} />
            <Route path="/admin/uploadblogsdata" element={<UploadBlogsData />}/>
            <Route path="/edit-blog" element={<EditBlogsData />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
