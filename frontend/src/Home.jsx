function Home() {
  return (
    <>
      <div>
        <div className="p-3 d-flex justify-content-around mt-3">
          <div className="p-3 border shadow-sm w-25">
            <p>Admin</p>
            <hr />
            <p>Toltal: {0}</p>
          </div>
          <div className="p-3 border shadow-sm w-25">
            <p>Employee</p>
            <hr />
            <p>Toltal: {0}</p>
          </div>
          <div className="p-3 border shadow-sm w-25">
            <p>Salary</p>
            <hr />
            <p>Toltal: {0}</p>
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
