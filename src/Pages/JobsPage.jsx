import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/JobsPage.css";

const JobsPage = () => {
  const [jobs, setJobs] = useState([]);
  const navigate = useNavigate();

  const fetchAndUpdateJobs = () => {
    fetch("/api/jobs/")
      .then((resp) => resp.json())
      .then(setJobs);
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this job?"))
      fetch(`/api/jobs/${id}`, {
        method: "DELETE",
      })
        .then((resp) => resp.text())
        .then(() => {
          alert("Succesfully deleted");
          fetchAndUpdateJobs();
        })
        .catch((err) => console.log(err));
  };

  const handleEdit = (id) => navigate("edit-job/" + id);

  useEffect(fetchAndUpdateJobs, []);

  return (
    <div className="jobs-page">
      {jobs.map((job) => (
        <div className="job-card" key={job.date}>
          <div className="card-heading">
            <h3>
              {job.title} : {job.company}
            </h3>
            <span className="card-actions">
              <button onClick={() => handleEdit(job.id)}>Edit</button>
              <button onClick={() => handleDelete(job.id)}>Delete</button>
            </span>
          </div>
          <hr />
          <div className="card-content">
            <div>
              <p>{job.jobDesc}</p>
            </div>
            <div className="card-details">
              <ul>
                <li>
                  <b>Location</b> - {job.location} ({job.WorkLocation})
                </li>
                <li>
                  <b>Salary Range</b> - {job.minSalary} - {job.maxSalary}
                </li>
                <li>
                  <b>Timing</b> - {job.timing}
                </li>
                <li>
                  <b>Incentive</b> - {job.incentive}
                </li>
                <li>
                  <b>Work Experience Range</b> - {job.workExMin} -
                  {job.workExMax}
                </li>
                <li>
                  <b>Vacancies</b> - {job.vacancy}
                </li>
              </ul>
            </div>
          </div>
          {/* <pre>{JSON.stringify(job, null, 2)}</pre> */}
        </div>
      ))}
    </div>
  );
};

export default JobsPage;
