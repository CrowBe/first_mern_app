import React from "react";
import { Link } from "react-router-dom";

const JobCard = (props) => {
    const { jobs, statusName } = props;
    function onButtonClick() {
        const x = document.getElementById(statusName);
        if (x.style.display === "none") {
          x.style.display = "block";
        } else {
          x.style.display = "none";
        }
      };

    return (
        <>
            <h2>{`Jobs at ${statusName} stage`} ({jobs.length})</h2>
            {jobs.length > 0 ? <button onClick={onButtonClick}>View/Hide</button> : <span>None to show</span>}
            <div id={statusName} style={{display: "none"}} >
                <ul>
                {jobs.map((item, index) => {
                    let id = item._id;
                    console.log(id)
                    return (
                        <>
                            <li key={id}>{item.customerName}</li>
                            <Link to={`/jobs/show/${id}`}>
                                <button>Update this job</button>
                            </Link>
                        </>
                    );
                })}
                </ul>
            </div>
        </>
    );
}

export default JobCard;