import { useState } from "react";
import { backendUrl } from "../../../config";
import { Link, Navigate } from "react-router-dom";
import '../../App.css'
const Register = () => {
  const [data, setData] = useState({
    userName: "",
    email: "",
    password: "",
  });
  const [loggedIn, setLoggedIn] = useState(false)
  const handleChange = (ele) => {
    const { name, value } = ele.target;
    setData({
      ...data,
      [name]: value,
    });
  };
  const handleSubmit = async (ele) => {
    ele.preventDefault();
    try {
      const response = await fetch(`https://giridharan-5.onrender.com/register`, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      });
      setData({
        userName: "",
        email: "",
        password: "",
      });
      if (response.status === 409) {
        alert("User already exists");
      } else {
        alert("User register successfully");
        setLoggedIn(true)
      }
    } catch (err) {
      console.log(err);
      alert("Error while registering");
    }
  };
  if(loggedIn === true){
    return <Navigate to={'/login'} replace/>
  }
  if (
    localStorage.getItem("user") &&
    JSON.parse(localStorage.getItem("user"))
  ) {
    return <Navigate to={"/"} replace />;
  }

  return (
    <div>
      {/* Header */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary"> {/* Changed bg-light to bg-primary for vibrant color */}
                <div className="container-fluid">
                    <h2 className="navbar-brand">Inventory Billing App</h2> {/* Removed href from h2 */}
                    <div className="ml-auto">
                        <Link to='/login' className="btn btn-light">Log In</Link> {/* Added btn-outline-light class for light outline */}
                        <Link to='/register' className="btn btn-light">Sign In</Link> {/* Changed button color to light */}
                    </div>
                </div>
        </nav>
        <h1 className="lk">Welcome To the GK Inventory Billing App</h1>
      {/* Split Page into Two Columns */}
      <div className="container mt-5">
        <div className="row justify-content-center">
          {/* Left Column for Logo */}
          <div className="col-md-4">
            <img src="https://media.istockphoto.com/id/1400586811/vector/web.jpg?s=612x612&w=0&k=20&c=r5g0JlssvfuZN_fPTSwD4eoqSxXVxNX21w0Xs0NsWNo=" alt="Logo" className="img-fluid" />
          </div>
          {/* Right Column for Registration Form */}
          <div className="col-md-6">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title text-center mb-4">Sign In</h4>
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label htmlFor="userName" className="form-label">Name:</label>
                    <input
                      type="text"
                      className="form-control"
                      id="userName"
                      name="userName"
                      value={data.userName}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email:</label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      name="email"
                      value={data.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password:</label>
                    <input
                      type="password"
                      className="form-control"
                      id="password"
                      name="password"
                      value={data.password}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="d-grid">
                    <button type="submit" className="btn btn-primary">Submit</button>
                  </div>
                </form>
                <div className="text-center mt-3">
                  <Link to="/login" className="text-decoration-none">Already registered? Login</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
