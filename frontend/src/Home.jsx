import { useEffect, useState } from "react";
import axios from "axios";

function Home() {
  const [adminCount, setAdminCount] = useState(0);
  const [employeeCount, setEmployeeCount] = useState(0);
  const [Salary, setSalary] = useState(0);
  useEffect(() => {
    axios
      .get("http://localhost:8081/adminCount")
      .then((res) => {
        setAdminCount(res.data[0].admin);
      })
      .catch((err) => console.log(err));

    axios
      .get("http://localhost:8081/employeeCount")
      .then((res) => {
        setEmployeeCount(res.data[0].employee);
      })
      .catch((err) => console.log(err));

    axios
      .get("http://localhost:8081/salarySum")
      .then((res) => {
        setSalary(res.data[0].sumOfSalary);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <div>
        <div className="p-3 d-flex justify-content-around mt-3">
          <div className="p-3 border shadow-sm w-25">
            <p>Admin</p>
            <hr />
            <p>Toltal: {adminCount}</p>
          </div>
          <div className="p-3 border shadow-sm w-25">
            <p>Employee</p>
            <hr />
            <p>Toltal: {employeeCount}</p>
          </div>
          <div className="p-3 border shadow-sm w-25">
            <p>Salary</p>
            <hr />
            <p>Toltal: {Salary}</p>
          </div>
        </div>
        {/* List of admin */}
        <div className="mt-4 px-5 pt-3">
          <h3>List of Admins</h3>
          <table className="table">
            <thead>
              <tr>
                <th>Email</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>test</td>
                <td>test</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default Home;
