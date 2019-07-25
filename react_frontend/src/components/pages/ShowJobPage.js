import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchJob } from "./../../actions";

class ShowJobPage extends Component {
    componentDidMount() {
        const { id } = this.props.match.params;
        this.props.fetchJob(id);
    }

    render() {
        const { job } = this.props;
        const jobFields = Object.keys(job)
        let i = 0;
        return (
            <>
                <h1>Job Details Page</h1>
                
                <div>{jobFields.map((item, index) => {
                    return (
                        <p key={i +=1}>{item}: {job[item]}</p>
                    );
                })}
                </div>
                </>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        job: state.job,
        token: state.auth.token
    }
}

export default connect(mapStateToProps, { fetchJob })(ShowJobPage);