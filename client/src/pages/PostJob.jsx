import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function PostJob() {
  const navigate = useNavigate();

  const [job, setJob] = useState({
    title: "",
    company: "",
    location: "",
    category: "",
    type: "Full Time",
    salary: "",
    experience: "",
    description: "",
    skills: "",
    deadline: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setJob({
      ...job,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (
      !job.title ||
      !job.company ||
      !job.location ||
      !job.category ||
      !job.salary ||
      !job.description
    ) {
      alert("❌ Please fill all required fields.");
      return;
    }

    const existingJobs =
      JSON.parse(localStorage.getItem("postedJobs")) || [];

    const newJob = {
      id: Date.now(),
      title: job.title,
      company: job.company,
      location: job.location,
      category: job.category,
      type: job.type,
      salary: job.salary,
      experience: job.experience,
      description: job.description,
      skills: job.skills,
      deadline: job.deadline,
      postedDate: new Date().toLocaleDateString(),
      status: "Active",
    };

    existingJobs.push(newJob);

    localStorage.setItem(
      "postedJobs",
      JSON.stringify(existingJobs)
    );

    alert("✅ Job posted successfully!");

    navigate("/manage-jobs");
  };

  return (
    <div className="min-vh-100 bg-light">

      {/* NAVBAR */}

      <nav className="navbar navbar-dark bg-primary shadow-sm">

        <div className="container">

          <Link
            to="/"
            className="navbar-brand fw-bold"
          >
            💼 JobPortal
          </Link>

          <div className="d-flex gap-2">

            <Link
              to="/dashboard"
              className="btn btn-outline-light"
            >
              Dashboard
            </Link>

            <Link
              to="/manage-jobs"
              className="btn btn-light"
            >
              Manage Jobs
            </Link>

          </div>

        </div>

      </nav>


      {/* MAIN */}

      <div className="container py-5">

        <div className="row justify-content-center">

          <div className="col-lg-9">

            <div className="card shadow border-0">

              <div className="card-body p-4 p-md-5">

                {/* HEADER */}

                <div className="mb-4">

                  <h1 className="fw-bold">
                    📢 Post a Job
                  </h1>

                  <p className="text-muted">
                    Create a new job vacancy and find
                    qualified candidates.
                  </p>

                </div>


                <form onSubmit={handleSubmit}>

                  <div className="row g-3">


                    {/* JOB TITLE */}

                    <div className="col-md-6">

                      <label className="form-label fw-semibold">
                        Job Title *
                      </label>

                      <input
                        type="text"
                        className="form-control"
                        name="title"
                        value={job.title}
                        onChange={handleChange}
                        placeholder="e.g. Frontend Developer"
                      />

                    </div>


                    {/* COMPANY */}

                    <div className="col-md-6">

                      <label className="form-label fw-semibold">
                        Company Name *
                      </label>

                      <input
                        type="text"
                        className="form-control"
                        name="company"
                        value={job.company}
                        onChange={handleChange}
                        placeholder="e.g. ABC Technologies"
                      />

                    </div>


                    {/* LOCATION */}

                    <div className="col-md-6">

                      <label className="form-label fw-semibold">
                        Location *
                      </label>

                      <input
                        type="text"
                        className="form-control"
                        name="location"
                        value={job.location}
                        onChange={handleChange}
                        placeholder="e.g. Chandigarh"
                      />

                    </div>


                    {/* CATEGORY */}

                    <div className="col-md-6">

                      <label className="form-label fw-semibold">
                        Category *
                      </label>

                      <select
                        className="form-select"
                        name="category"
                        value={job.category}
                        onChange={handleChange}
                      >

                        <option value="">
                          Select Category
                        </option>

                        <option value="IT & Software">
                          IT & Software
                        </option>

                        <option value="Web Development">
                          Web Development
                        </option>

                        <option value="Data Science">
                          Data Science
                        </option>

                        <option value="Mobile Development">
                          Mobile Development
                        </option>

                        <option value="Design">
                          Design
                        </option>

                        <option value="Marketing">
                          Marketing
                        </option>

                        <option value="Finance">
                          Finance
                        </option>

                        <option value="Human Resources">
                          Human Resources
                        </option>

                      </select>

                    </div>


                    {/* JOB TYPE */}

                    <div className="col-md-6">

                      <label className="form-label fw-semibold">
                        Job Type
                      </label>

                      <select
                        className="form-select"
                        name="type"
                        value={job.type}
                        onChange={handleChange}
                      >

                        <option value="Full Time">
                          Full Time
                        </option>

                        <option value="Part Time">
                          Part Time
                        </option>

                        <option value="Internship">
                          Internship
                        </option>

                        <option value="Contract">
                          Contract
                        </option>

                        <option value="Remote">
                          Remote
                        </option>

                      </select>

                    </div>


                    {/* SALARY */}

                    <div className="col-md-6">

                      <label className="form-label fw-semibold">
                        Salary *
                      </label>

                      <input
                        type="text"
                        className="form-control"
                        name="salary"
                        value={job.salary}
                        onChange={handleChange}
                        placeholder="e.g. ₹5 - ₹8 LPA"
                      />

                    </div>


                    {/* EXPERIENCE */}

                    <div className="col-md-6">

                      <label className="form-label fw-semibold">
                        Experience
                      </label>

                      <input
                        type="text"
                        className="form-control"
                        name="experience"
                        value={job.experience}
                        onChange={handleChange}
                        placeholder="e.g. 0-2 Years"
                      />

                    </div>


                    {/* DEADLINE */}

                    <div className="col-md-6">

                      <label className="form-label fw-semibold">
                        Application Deadline
                      </label>

                      <input
                        type="date"
                        className="form-control"
                        name="deadline"
                        value={job.deadline}
                        onChange={handleChange}
                      />

                    </div>


                    {/* SKILLS */}

                    <div className="col-12">

                      <label className="form-label fw-semibold">
                        Required Skills
                      </label>

                      <input
                        type="text"
                        className="form-control"
                        name="skills"
                        value={job.skills}
                        onChange={handleChange}
                        placeholder="React, JavaScript, HTML, CSS"
                      />

                    </div>


                    {/* DESCRIPTION */}

                    <div className="col-12">

                      <label className="form-label fw-semibold">
                        Job Description *
                      </label>

                      <textarea
                        className="form-control"
                        rows="6"
                        name="description"
                        value={job.description}
                        onChange={handleChange}
                        placeholder="Describe the job responsibilities, requirements and qualifications..."
                      />

                    </div>

                  </div>


                  {/* BUTTONS */}

                  <div className="d-flex gap-3 mt-4">

                    <button
                      type="submit"
                      className="btn btn-primary btn-lg"
                    >
                      📢 Post Job
                    </button>

                    <Link
                      to="/manage-jobs"
                      className="btn btn-outline-secondary btn-lg"
                    >
                      Cancel
                    </Link>

                  </div>

                </form>

              </div>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default PostJob;