import React, { Component } from "react";
import { Router, Route, Switch } from "react-router-dom";
import "./../styles/App.css";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import JobsPage from "./pages/JobsPage";
import NewJobPage from "./pages/NewJobPage";
import ShowJobPage from "./pages/ShowJobPage"
import NotFoundPage from "./pages/NotFoundPage";
import PrivateRoute from "./PrivateRoute";
import history from "./../history";
import { connect } from "react-redux";

class App extends Component {

    render() {

        return (
            <Router history={history}>
                <div>
                    <Switch>
                        <Route exact path="/" component={HomePage} />
                        <Route 
                            exact 
                            path="/login" 
                            component={LoginPage}
                        />
                        <Route 
                            exact 
                            path="/register" 
                            component={RegisterPage}
                        />
                        <PrivateRoute exact path="/jobs" component={JobsPage} />
                        <PrivateRoute exact path="/jobs/new" component={NewJobPage} />
                        <PrivateRoute exact path="/jobs/show/:id" component={ShowJobPage} />
                        <Route component={NotFoundPage} />
                    </Switch>
                </div>
            </Router>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        token: state.auth.token
    };
}

export default connect(mapStateToProps)(App);
