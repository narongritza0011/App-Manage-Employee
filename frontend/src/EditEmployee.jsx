import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function EmployeeEdit() {
  const [data, SetData] = useState({
    name: "",
    email: "",
    password: "",
    address: "",
    salary: "",
  });

  const navigate = useNavigate();
  const { id } = useParams();
  useEffect(() => {
    axios
      .get("http://localhost:8081/get/" + id)
      .then((res) => {
        SetData({
          ...data,
          name: res.data.Result[0].name,
          email: res.data.Result[0].email,
          address: res.data.Result[0].address,
          salary: res.data.Result[0].salary,
        });
      })
      .catch((err) => console.log(err));
  }, []);

  function handleSubmit(event) {
    event.preventDefault();
    axios
      .put("http://localhost:8081/update/" + id, data)
      .then((res) => {
        if (res.data.Status === "Success") {
          navigate("/employee");
        }
      })
      .catch((err) => console.log(err));
  }
  return (
    <>
      <div className="d-flex flex-column align-items-center pt-4">
        <h2>Add Employee</h2>
        <form className="row g-3 w-50" onSubmit={handleSubmit}>
          <div className="col-12">
            <label htmlFor="inputName1" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              id="inputName1"
              placeholder="Enter Name"
              onChange={(e) => SetData({ ...data, name: e.target.value })}
              autoComplete="off"
              value={data.name}
            />
          </div>
          <div className="col-12">
            <label htmlFor="inputEmail1" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="inputEmail1"
              placeholder="Enter Email"
              onChange={(e) => SetData({ ...data, email: e.target.value })}
              autoComplete="off"
              value={data.email}
            />
          </div>

          <div className="col-12">
            <label htmlFor="inputSalary1" className="form-label">
              Salary
            </label>
            <input
              type="text"
              className="form-control"
              id="inputSalary1"
              placeholder="Enter Salary"
              onChange={(e) => SetData({ ...data, salary: e.target.value })}
              autoComplete="off"
              value={data.salary}
            />
          </div>
          <div className="col-12">
            <label htmlFor="inputAddress1" className="form-label">
              Address
            </label>
            <input
              type="text"
              className="form-control"
              id="inputAddress1"
              placeholder="1234 Main St"
              onChange={(e) => SetData({ ...data, address: e.target.value })}
              autoComplete="off"
              value={data.address}
            />
          </div>

          <div className="col-12">
            <button type="submit" className="btn btn-primary">
              Update
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default EmployeeEdit;
