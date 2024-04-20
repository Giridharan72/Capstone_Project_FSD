import { useState } from "react";
import { backendUrl } from "../../../config";
import { Link } from "react-router-dom";

export const Forgot = () => {
  const [data, setData] = useState({
    email: "",
  });
  const [hold, setHold] = useState(false);
  const handleChange = (ele) => {
    const { name, value } = ele.target;
    setData({
      ...data,
      [name]: value,
    });
  };
  const handleSubmit = async (ele) => {
    ele.preventDefault();
    setHold(true);
    const response = await fetch(`https://giridharan-5.onrender.com/forgotPassword`, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.status === 401) {
      alert("Invalid email");
    } else {
      setHold(false);
      alert("Verify your email, please check your email");
    }
    setData({
      email: "",
    });
  };
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
      {/* Forgot Password Form */}
      <div className="container">
        <div className="row justify-content-center mt-5">
          <div className="col-md-6">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title text-center mb-4">Forgot Password Form</h4>
                <form onSubmit={handleSubmit}>
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
                  <div className="d-grid">
                    <button type="submit" className="btn btn-primary">Submit</button>
                  </div>
                </form>
                {hold && <p className="text-center mt-3">Hold tight, we are sending email to you</p>}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
