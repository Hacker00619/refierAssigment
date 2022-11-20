import React from "react";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "../styles/PostJobPage.css";

const EditJobPage = () => {
  const id = useParams().id;
  const navigate = useNavigate();
  const [defaultValues, setDefaultValues] = React.useState({});
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    fetch(`/jobs/${id}/`, {
      method: "PUT",
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

  useEffect(() => {
    if (id)
      fetch("/jobs/" + id)
        .then((resp) => resp.json())
        .then((data) => setDefaultValues(data));
  }, [id]);

  return (
    <div className="post-job-page">
      <h1>Post a Job</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title : </label>
        <input
          defaultValue={defaultValues?.title}
          required
          type="text"
          name="title"
          id="title"
        />

        <label htmlFor="vacancy">Vacancies</label>
        <input
          defaultValue={defaultValues?.vacancy}
          required
          type="text"
          name="vacancy"
          id="vacancy"
        />

        <label htmlFor="company">Company : </label>
        <input
          defaultValue={defaultValues?.company}
          required
          type="text"
          name="company"
          id="company"
        />

        <label htmlFor="jobDesc">Description : </label>
        <textarea
          defaultValue={defaultValues?.jobDesc}
          required
          name="jobDesc"
          id="jobDesc"
          cols="30"
          rows="10"
        ></textarea>

        <label htmlFor="timing">Timing : </label>
        <input
          defaultValue={defaultValues?.timing}
          required
          type="text"
          name="timing"
          id="timing"
        />

        <label htmlFor="incentive">Incentive : </label>
        <input
          defaultValue={defaultValues?.incentive}
          required
          type="text"
          name="incentive"
          id="incentive"
        />

        <label htmlFor="minSalary">Minimum Salary : </label>
        <input
          defaultValue={defaultValues?.minSalary}
          required
          type="text"
          name="minSalary"
          id="minSalary"
        />

        <label htmlFor="maxSalary">Maximum Salary : </label>
        <input
          defaultValue={defaultValues?.maxSalary}
          required
          type="text"
          name="maxSalary"
          id="maxSalary"
        />

        <label htmlFor="workExMin">Minimum Work Experience : </label>
        <input
          defaultValue={defaultValues?.workExMin}
          required
          type="text"
          name="workExMin"
          id="workExMin"
        />

        <label htmlFor="workExMax">Maximum Work Experience : </label>
        <input
          defaultValue={defaultValues?.workExMax}
          required
          type="text"
          name="workExMax"
          id="workExMax"
        />

        <label htmlFor="WorkLocation">Work Location Type</label>
        <select required name="WorkLocation" id="WorkLocation">
          <option
            selected={defaultValues?.WorkLocation === "Remote"}
            value="Remote"
          >
            Remote
          </option>
          <option
            selected={defaultValues?.WorkLocation === "In Office"}
            value="In Office"
          >
            In Office
          </option>
        </select>

        <label htmlFor="location">Location</label>
        <input
          defaultValue={defaultValues?.location}
          required
          type="text"
          name="location"
          id="location"
        />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default EditJobPage;
