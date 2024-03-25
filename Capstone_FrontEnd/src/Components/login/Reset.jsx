// import { useState } from "react";
// import { Link, Navigate } from "react-router-dom";
// import { backendUrl } from "../../../config";


// export const Reset = () => {
//   const [data, setData] = useState({
//     password: "",
//   });
//   const [isReset, setIsReset] = useState(false);
//   const handleChange = (ele) => {
//     const { name, value } = ele.target;
//     setData({
//       ...data,
//       [name]: value,
//     });
//   };
//   const handleSubmit = async (ele) => {
//     ele.preventDefault();
//     const response = await fetch(`${backendUrl}/resetPassword`, {
//       method: "POST",
//       body: JSON.stringify(data),
//       headers: {
//         "Content-Type": "application/json",
//       },
//     });
//     if (response.status === 401) {
//       alert("Error");
//     } else {
//       alert("Password reset successfully");
//       setIsReset(true);
//     }
//     setData({
//       password: "",
//     });
//   };
//   if (isReset) {
//     return <Navigate to={'/login'} replace />
//   }
//   return (
//     <div>
//       {/* Header */}
//       <nav className="navbar navbar-expand-lg navbar-dark bg-primary"> {/* Changed bg-light to bg-primary for vibrant color */}
//                 <div className="container-fluid">
//                     <h2 className="navbar-brand">Inventory Billing App</h2> {/* Removed href from h2 */}
//                     <div className="ml-auto">
//                         <Link to='/login' className="btn btn-light">Log In</Link> {/* Added btn-outline-light class for light outline */}
//                         <Link to='/register' className="btn btn-light">Sign In</Link> {/* Changed button color to light */}
//                     </div>
//                 </div>
//       </nav>

//       {/* Reset Form */}
//       <div className="container">
//         <div className="row justify-content-center mt-5">
//           <div className="col-md-6">
//             <div className="card">
//               <div className="card-body">
//                 <h4 className="card-title text-center mb-4">Password Reset Form</h4>
//                 <form onSubmit={handleSubmit}>
//                   <div className="mb-3">
//                     <label htmlFor="password" className="form-label">Password:</label>
//                     <input
//                       type="password"
//                       className="form-control"
//                       id="password"
//                       name="password"
//                       value={data.password}
//                       onChange={handleChange}
//                       required
//                     />
//                   </div>
//                   <div className="d-grid">
//                     <button type="submit" className="btn btn-primary">Submit</button>
//                   </div>
//                 </form>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };
// import { useState } from "react";
// import { Link, Navigate } from "react-router-dom";
// import { backendUrl } from "../../../config";

// export const Reset = () => {
//   const [data, setData] = useState({
//     email: "",
//     oldPassword: "",
//     newPassword: "",
//     confirmPassword: "",
//   });
//   const [isReset, setIsReset] = useState(false);
//   const [passwordsMatch, setPasswordsMatch] = useState(true);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setData({
//       ...data,
//       [name]: value,
//     });

//     // Check if new passwords match when either new password or confirm password changes
//     if (name === "newPassword" || name === "confirmPassword") {
//       setPasswordsMatch(data.newPassword === data.confirmPassword);
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     // Check if passwords match before submitting the form
//     if (!passwordsMatch) {
//       alert("New passwords do not match!");
//       return;
//     }

//     const response = await fetch(`${backendUrl}/resetPassword`, {
//       method: "POST",
//       body: JSON.stringify(data),
//       headers: {
//         "Content-Type": "application/json",
//       },
//     });

//     if (response.status === 401) {
//       alert("Error");
//     } else {
//       alert("Password reset successfully");
//       setIsReset(true);
//     }

//     // Clear form data after submission
//     setData({
//       email: "",
//       oldPassword: "",
//       newPassword: "",
//       confirmPassword: "",
//     });
//   };

//   if (isReset) {
//     return <Navigate to={'/login'} replace />;
//   }

//   return (
//     <div>
//       {/* Header */}
//       <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
//         <div className="container-fluid">
//           <h2 className="navbar-brand">Inventory Billing App</h2>
//           <div className="ml-auto">
//             <Link to='/login' className="btn btn-light">Log In</Link>
//             <Link to='/register' className="btn btn-light">Sign In</Link>
//           </div>
//         </div>
//       </nav>

//       {/* Reset Form */}
//       <div className="container">
//         <div className="row justify-content-center mt-5">
//           <div className="col-md-6">
//             <div className="card">
//               <div className="card-body">
//                 <h4 className="card-title text-center mb-4">Password Reset Form</h4>
//                 <form onSubmit={handleSubmit}>
//                   <div className="mb-3">
//                     <label htmlFor="email" className="form-label">Email:</label>
//                     <input
//                       type="email"
//                       className="form-control"
//                       id="email"
//                       name="email"
//                       value={data.email}
//                       onChange={handleChange}
//                       required
//                     />
//                   </div>
//                   <div className="mb-3">
//                     <label htmlFor="oldPassword" className="form-label">Old Password:</label>
//                     <input
//                       type="password"
//                       className="form-control"
//                       id="oldPassword"
//                       name="oldPassword"
//                       value={data.oldPassword}
//                       onChange={handleChange}
//                       required
//                     />
//                   </div>
//                   <div className="mb-3">
//                     <label htmlFor="newPassword" className="form-label">New Password:</label>
//                     <input
//                       type="password"
//                       className="form-control"
//                       id="newPassword"
//                       name="newPassword"
//                       value={data.newPassword}
//                       onChange={handleChange}
//                       required
//                     />
//                   </div>
//                   <div className="mb-3">
//                     <label htmlFor="confirmPassword" className="form-label">Confirm New Password:</label>
//                     <input
//                       type="password"
//                       className="form-control"
//                       id="confirmPassword"
//                       name="confirmPassword"
//                       value={data.confirmPassword}
//                       onChange={handleChange}
//                       required
//                     />
//                     {!passwordsMatch && <p className="text-danger">Passwords do not match!</p>}
//                   </div>
//                   <div className="d-grid">
//                     <button type="submit" className="btn btn-primary">Submit</button>
//                   </div>
//                 </form>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

import { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { backendUrl } from "../../../config";
import '../../App.css';

export const Reset = () => {
  const [data, setData] = useState({
    email: "",
    oldPassword: "",
    newPassword: "",
    confirmPassword: "",
  });
  const [isReset, setIsReset] = useState(false);
  const [passwordsMatch, setPasswordsMatch] = useState(true);
  const [showNewPassword, setShowNewPassword] = useState(false); // State to toggle new password visibility
  const [showConfirmPassword, setShowConfirmPassword] = useState(false); // State to toggle confirm password visibility

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });

    if (name === "newPassword" || name === "confirmPassword") {
      setPasswordsMatch(data.newPassword === value);
    }
  };

  const toggleNewPasswordVisibility = () => {
    setShowNewPassword(!showNewPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!passwordsMatch) {
      alert("New passwords do not match!");
      return;
    }

    const response = await fetch(`${backendUrl}/resetPassword`, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.status === 401) {
      alert("Error");
    } else {
      alert("Password reset successfully");
      setIsReset(true);
    }

    setData({
      email: "",
      oldPassword: "",
      newPassword: "",
      confirmPassword: "",
    });
  };

  if (isReset) {
    return <Navigate to={'/login'} replace />;
  }

  return (
    <div>
      {/* Header */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container-fluid">
          <h2 className="navbar-brand">Inventory Billing App</h2>
          <div className="ml-auto">
            <Link to='/login' className="btn btn-light">Log In</Link>
            &nbsp;&nbsp;&nbsp;
            <Link to='/register' className="btn btn-light">Sign In</Link>
          </div>
        </div>
      </nav>
      <h1 className="lk">Welcome To the GK Inventory Billing App</h1>
      {/* Reset Form */}
      <div className="container">
        <div className="row justify-content-center mt-5">
          <div className="col-md-6">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title text-center mb-4">Password Reset Form</h4>
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
                  <div className="mb-3">
                    <label htmlFor="oldPassword" className="form-label">Old Password:</label>
                    <input
                      type="password"
                      className="form-control"
                      id="oldPassword"
                      name="oldPassword"
                      value={data.oldPassword}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="newPassword" className="form-label">New Password:</label>
                    <div className="input-group">
                      <input
                        type={showNewPassword ? "text" : "password"}
                        className="form-control"
                        id="newPassword"
                        name="newPassword"
                        value={data.newPassword}
                        onChange={handleChange}
                        required
                      />
                      <button
                        className="btn btn-outline-secondary"
                        type="button"
                        onClick={toggleNewPasswordVisibility}
                      >
                        {showNewPassword ? "Hide" : "Show"}
                      </button>
                    </div>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="confirmPassword" className="form-label">Confirm New Password:</label>
                    <div className="input-group">
                      <input
                        type={showConfirmPassword ? "text" : "password"}
                        className="form-control"
                        id="confirmPassword"
                        name="confirmPassword"
                        value={data.confirmPassword}
                        onChange={handleChange}
                        required
                      />
                      <button
                        className="btn btn-outline-secondary"
                        type="button"
                        onClick={toggleConfirmPasswordVisibility}
                      >
                        {showConfirmPassword ? "Hide" : "Show"}
                      </button>
                    </div>
                    {!passwordsMatch && <p className="text-danger">Passwords do not match!</p>}
                  </div>
                  <div className="d-grid">
                    <button type="submit" className="btn btn-primary">Submit</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
