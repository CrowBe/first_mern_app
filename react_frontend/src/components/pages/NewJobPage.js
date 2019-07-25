import React, { Component } from "react";
import NewJobForm from "./../forms/NewJobForm";

class LoginPage extends Component {
    render() {
        return(
            <div>
                <h1>Create a new Job</h1>
                <NewJobForm {...this.props} />
            </div>
        );
    }
}

export default LoginPage;