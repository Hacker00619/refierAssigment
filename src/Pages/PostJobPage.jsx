import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/PostJobPage.css";

const PostJobPage = () => {
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    fetch("jobs/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((resp) => resp.json())
      .then(() => {
        alert("Success");
        navigate("/");
      })
      .catch(() => alert("Unsuccesfull"));
  };

  return (
    <div className="post-job-page">
      <h1>Post a Job</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title : </label>
        <input required type="text" name="title" id="title" />

        <label htmlFor="vacancy">Vacancies</label>
        <input required type="text" name="vacancy" id="vacancy" />

        <label htmlFor="company">Company : </label>
        <input required type="text" name="company" id="company" />

        <label htmlFor="jobDesc">Description : </label>
        <textarea
          required
          name="jobDesc"
          id="jobDesc"
          cols="30"
          rows="10"
        ></textarea>

        <label htmlFor="timing">Timing : </label>
        <input required type="text" name="timing" id="timing" />

        <label htmlFor="incentive">Incentive : </label>
        <input required type="text" name="incentive" id="incentive" />

        <label htmlFor="minSalary">Minimum Salary : </label>
        <input required type="text" name="minSalary" id="minSalary" />

        <label htmlFor="maxSalary">Maximum Salary : </label>
        <input required type="text" name="maxSalary" id="maxSalary" />

        <label htmlFor="workExMin">Minimum Work Experience : </label>
        <input required type="text" name="workExMin" id="workExMin" />

        <label htmlFor="workExMax">Maximum Work Experience : </label>
        <input required type="text" name="workExMax" id="workExMax" />

        <label htmlFor="WorkLocation">Work Location Type</label>
        <select required name="WorkLocation" id="WorkLocation">
          <option value="Remote">Remote</option>
          <option value="In Office">In Office</option>
        </select>

        <label htmlFor="location">Location</label>
        <input required type="text" name="location" id="location" />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default PostJobPage;
