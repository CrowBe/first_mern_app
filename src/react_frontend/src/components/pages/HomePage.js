import React, { Component } from "react";
import { Link } from "react-router-dom";

class HomePage extends Component {
    render() {
        return (
            <div>
                <h1>Looking Up Landscapes - Job Tracker</h1>
                <div>
                    <Link to="/login">
                        <button>Login</button>
                    </Link>
                    <Link to="/register">
                        <button>Register</button>
                    </Link>
                </div>
            </div>
        );
    }
}

export default HomePage;