import { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { backendUrl } from "../../../config";
import Home from "../Home";
import '../../App.css';

export const Login = () => {
    const [login, setLogin] = useState({
        email: '',
        password: ''
    });

    const handleChange = (ele) => {
        const { name, value } = ele.target;
        setLogin({ ...login, [name]: value });
    };

    const handleSubmit = async (ele) => {
        ele.preventDefault();
        const loginResponse = await fetch(`${backendUrl}/login`, {
            method: 'POST',
            body: JSON.stringify(login),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (loginResponse.status === 401) {
            alert('Login failed');
        } else if (loginResponse.status === 403) {
            alert('Not registered');
        } else {
            alert('Login success');
            localStorage.setItem('user', JSON.stringify(loginResponse));
        }

        setLogin({
            email: '',
            password: ''
        });
    };

    if (localStorage.getItem('user') && JSON.parse(localStorage.getItem('user'))) {
        return <Navigate to={'/'} replace />;
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
            <h1 className="lk">Welcome To the GK Inventory Billing App</h1> {/* Corrected classname to className */}
            {/* Login Form */}
            <div className="container mt-5">
                <div className="row justify-content-center">
                    {/* Left Column for Logo */}
                    <div className="col-md-4">
                        <img src="https://media.istockphoto.com/id/1400586811/vector/web.jpg?s=612x612&w=0&k=20&c=r5g0JlssvfuZN_fPTSwD4eoqSxXVxNX21w0Xs0NsWNo=" alt="Logo" className="img-fluid" />
                    </div>
                    <div className="col-md-6">
                        <div className="card">
                            <div className="card-body">
                                {/* Login Form */}
                                <h4 className="card-title text-center mb-4">Login In</h4>
                                <form onSubmit={handleSubmit}>
                                    <div className="mb-3">
                                        <label htmlFor="email">Email:</label>
                                        <input type="email" className="form-control" id="email" name="email" value={login.email} onChange={handleChange} required />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="password">Password:</label>
                                        <input type="password" className="form-control" id="password" name="password" value={login.password} onChange={handleChange} required />
                                    </div>
                                    <div className="mb-3">
                                        <Link to='/Forgot'>Forgot Password?</Link>
                                        &nbsp;&nbsp;&nbsp;
                                        <Link to='/reset'>Reset?</Link>
                                    </div>
                                    <div className="d-grid">
                                        <button type="submit" className="btn btn-primary">Submit</button>
                                    </div>
                                    <div className="text-center mt-3">
                                        <Link to="/register" className="text-decoration-none">Register ? New account</Link> {/* Changed text color to dark */}
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
