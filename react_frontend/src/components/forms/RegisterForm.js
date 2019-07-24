import React, {Component} from "react";
import { fetchAuthTokenRegister } from "./../../actions";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import Input from "./fields/Input";

class RegisterForm extends Component {
    onFormSubmit = async (formValues) => {
            const { username, password, key } = formValues;
            await this.props.fetchAuthTokenRegister(username, password, key);
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
                    <label>Admin Key</label>
                    <Field
                        name="key"
                        component={Input}
                        type="text"
                    />
                </div>
                <input type="submit" value="Register New User" />
            </form>
        );
    }
}

const WrappedRegisterForm = reduxForm({
    form: "register",
    validate: (formValues) => {
        console.log(formValues)
        const errors = {};

        if(!formValues.username) {
            errors.username = "Username is required";
        }

        if(!formValues.password) {
            errors.url = "Password is required";
        }

        return errors;
    }
})(RegisterForm);
    
export default connect(null, { fetchAuthTokenRegister })(WrappedRegisterForm);