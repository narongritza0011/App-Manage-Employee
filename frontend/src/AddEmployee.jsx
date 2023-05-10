import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddEmployee() {
  const [data, SetData] = useState({
    name: "",
    email: "",
    password: "",
    address: "",
    salary: "",
    image: "",
  });

  const navigate = useNavigate();
  function handleSubmit(event) {
    event.preventDefault();
    const formdata = new FormData();
    formdata.append("name", data.name);
    formdata.append("email", data.email);
    formdata.append("password", data.password);
    formdata.append("address", data.address);
    formdata.append("salary", data.salary);
    formdata.append("image", data.image);

    axios
      .post("http://localhost:8081/create", formdata)
      .then((res) => {
        navigate("/employee");
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
            />
          </div>
          <div className="col-12">
            <label htmlFor="inputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="inputPassword1"
              placeholder="Enter Password"
              onChange={(e) => SetData({ ...data, password: e.target.value })}
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
            />
          </div>
          <div className="col-12 mb-3">
            <label htmlFor="inputFile01">Select Image</label>
            <input
              type="file"
              className="form-control"
              id="inputFile01"
              onChange={(e) => SetData({ ...data, image: e.target.files[0] })}
            />
          </div>
          <div className="col-12">
            <button type="submit" className="btn btn-primary">
              Create
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default AddEmployee;
