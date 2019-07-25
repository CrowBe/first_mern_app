import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchJobs } from "./../../actions";
import JobCard from "./../pageElements/JobCard";

class JobsPage extends Component {
    componentWillMount() {
        this.props.fetchJobs();
    }

    render() {
        const { jobs, token } = this.props;
        const jobsByStatus = {
            "enquiry": [], "siteVisit": [], "quoting": [], "quoted": [], 
            "initialDocs": [], "walkthrough": [], "finaliseDocs": [], 
            "ready": [], "inProgress": [], "handover": []
        }
        const statusList = Object.keys(jobsByStatus)
        jobs.map((item, index) => {
            jobsByStatus[item.status].push(item);
            return jobsByStatus;
        })
        let i = 0;
        if (jobs) {
            return (
                <>
                    { token && <h4>User Logged In!</h4>}
                    <h1>Job Status Index</h1>
                    {statusList.map((item, index) => {
                        return (
                        <JobCard key={i+=1} jobs={jobsByStatus[item]} statusName={item} />
                        )
                    })}
                </>
            );
        } else {
            return(<p>Loading</p>)
        }
    }
}

const mapStateToProps = (state) => {
    return {
        jobs: state.jobs,
        token: state.auth.token
    }
}

export default connect(mapStateToProps, { fetchJobs })(JobsPage);