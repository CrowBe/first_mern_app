import React, {Component} from "react";
import { createJob } from "./../../actions";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import Input from "./fields/Input";

class NewJobForm extends Component {
    onFormSubmit = async (formValues) => {
        const { customerName } = formValues;
        await this.props.createJobs(customerName);
        this.props.reset();
    }
    render() {
        const { handleSubmit } = this.props;

        return(
            <form onSubmit={handleSubmit(this.onFormSubmit)}>
                <label>Customer Name</label>
                <Field
                    name="customerName"
                    component={Input}
                    type="text"
                />
                <input type="submit" value="createJob" />
            </form>
        )
    }
}

const WrappedNewJobForm = reduxForm({
    form: "createJob",
    validate: (formValues) => {
        const errors = {};

        if(!formValues.customerName) {
            errors.customerName = "Customer name is required to create a job";
        }

        return errors;
    }
})(NewJobForm);

const mapStateToProps = (state) => {
    return {
        job: state.job
    }
}

export default connect(mapStateToProps, { createJob })(WrappedNewJobForm);