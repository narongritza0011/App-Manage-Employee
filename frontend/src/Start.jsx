import { useNavigate } from "react-router-dom";
function Start() {
  const navigate = useNavigate();

  return (
    <>
      <div className="d-flex justify-content-center align-items-center vh-100 loginPage">
        <div className="p-3 bg-white p-3 rounded w-25 border text-center">
          <h2>Login</h2>
          <div className="d-flex justify-content-between  mt-3">
            <button
              className="btn btn-primary btn-lg"
              onClick={() => navigate("/employeeLogin")}
            >
              Employee
            </button>
            <button
              onClick={() => navigate("/login")}
              className="btn btn-success btn-lg"
            >
              Admin
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Start;
