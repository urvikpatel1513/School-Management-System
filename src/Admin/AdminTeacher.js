import "../Admin/Style/AdminTeacher.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function AdminTeacher() {
  const [teacherData, setTeacherData] = useState([]);

  useEffect(() => {
    fetchTeachers();
  }, []);

  const fetchTeachers = () => {
    axios
      .get("https://schoolproject.osapplications.com/api/all-teacher-show")
      .then((response) => {
        console.log(response.data);
        setTeacherData(response.data[0]);
      })
      .catch((error) => {
        console.error(error);
        alert("Failed");
      });
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this teacher data?")) {
      try {
        await axios.delete(
          `https://schoolproject.osapplications.com/api/teacher-delete/${id}`
        );
        alert("Teacher data delete Successfully");
        fetchTeachers();
      } catch (error) {
        console.error(error);
        alert("Failed to delete teacher data");
      }
    }
  };

  return (
    <>
      <div className="admin-main-teacher">
        <div className="admin-teacher-header">
          <h2>Teacher Data</h2>
          <div className="add-teacher-btn">
            <button className="add-btn1">
              <Link to="/admin/uploadteacherdata">Add Teacher +</Link>
            </button>
          </div>
        </div>

        <div className="admin-teacher-conatainer">
          <ul className="admin-teacher-list">
            {teacherData.map((teacher, index) => (
              <li className="admin-teacher-card" key={index}>
                <img
                  src={`https://schoolproject.osapplications.com/images/${teacher.profile}`}
                  className="teacher-img"
                  alt={`Profile ${index + 1}`}
                />
                <div className="admin-teacher-info">
                  <h3>{teacher.name}</h3>
                  <p>
                    <strong>Phone:</strong> {teacher.Phone}{" "}
                  </p>
                  <p>
                    <strong>Address:</strong> {teacher.address}{" "}
                  </p>
                  <div className="action-links">
                    <Link
                      to="/edit-teacher"
                      state={{ teacher }}
                      className="edit-link"
                    >
                      Edit
                    </Link>
                    <button
                      onClick={() => handleDelete(teacher.id)}
                      className="delete-link"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default AdminTeacher;
