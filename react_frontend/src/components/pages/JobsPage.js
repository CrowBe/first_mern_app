import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchJobs } from "./../../actions";

class JobsPage extends Component {
    componentDidMount() {
        this.props.fetchJobs();
    }

    render() {
        const { jobs } = this.props;
        
        return (
            <>
                <h2>Enquiry Stage</h2>
                <h2>Site Visit Stage</h2>
                <h2>Quoting Stage</h2>
                <h2>Quoted Stage</h2>
                <h2>Inital Documentation Stage</h2>
                <h2>Walkthrough Stage</h2>
                <h2>Finalise Documentation Stage</h2>
                <h2>Ready Stage</h2>
                <h2>In Progress Stage</h2>
                <h2>Handover Stage</h2>
            </>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        fetchJobs: state.fetchJobs
    }
}

export default connect(mapStateToProps, { fetchJobs })(JobsPage);