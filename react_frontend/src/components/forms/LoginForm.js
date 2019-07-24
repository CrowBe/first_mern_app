import React, {Component} from "react";
import { fetchAuthTokenLogin } from "./../../actions";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import Input from "./fields/Input";

class LoginForm extends Component {
    onFormSubmit = async (formValues) => {
            const { username, password } = formValues;
            await this.props.fetchAuthTokenLogin(username, password);
            this.props.reset();
        }

    render() {
        const { handleSubmit } = this.props;

        return(
            <form onSubmit={handleSubmit(this.onFormSubmit)}>
                <div>
                    <label>Username</label>
                    <Field
                        name="username"
                        component={Input}
                        type="text"
                    />
                </div>
                <div>
                    <label>Password</label>
                    <Field
                        name="password"
                        component={Input}
                        type="password"
                    />
                </div>
                <input type="submit" value="Login" />
            </form>
        );
    }
}

const WrappedLoginForm = reduxForm({
    form: "login",
    validate: (formValues) => {
        const errors = {};

        if(!formValues.username) {
            errors.username = "username is required";
        }

        if(!formValues.password) {
            errors.url = "Password is required";
        }

        return errors;
    }
})(LoginForm);
    
export default connect(null, { fetchAuthTokenLogin })(WrappedLoginForm);