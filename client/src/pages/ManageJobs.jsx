import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function ManageJobs() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    loadJobs();
  }, []);

  const loadJobs = () => {
    const savedJobs =
      JSON.parse(localStorage.getItem("postedJobs")) || [];

    setJobs(savedJobs);
  };

  const deleteJob = (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this job?"
    );

    if (!confirmDelete) {
      return;
    }

    const updatedJobs = jobs.filter(
      (job) => job.id !== id
    );

    localStorage.setItem(
      "postedJobs",
      JSON.stringify(updatedJobs)
    );

    setJobs(updatedJobs);

    alert("🗑 Job deleted successfully!");
  };

  const toggleStatus = (id) => {
    const updatedJobs = jobs.map((job) => {

      if (job.id === id) {

        return {
          ...job,
          status:
            job.status === "Active"
              ? "Closed"
              : "Active",
        };

      }

      return job;

    });

    localStorage.setItem(
      "postedJobs",
      JSON.stringify(updatedJobs)
    );

    setJobs(updatedJobs);
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
              to="/post-job"
              className="btn btn-light"
            >
              + Post Job
            </Link>

          </div>

        </div>

      </nav>


      {/* CONTENT */}

      <div className="container py-5">

        <div className="d-flex justify-content-between align-items-center mb-4">

          <div>

            <h1 className="fw-bold">
              📋 Manage Jobs
            </h1>

            <p className="text-muted mb-0">
              Manage your posted job vacancies.
            </p>

          </div>

          <Link
            to="/post-job"
            className="btn btn-primary"
          >
            + Post New Job
          </Link>

        </div>


        {/* NO JOBS */}

        {jobs.length === 0 ? (

          <div className="card border-0 shadow-sm">

            <div className="card-body text-center py-5">

              <div style={{ fontSize: "70px" }}>
                📭
              </div>

              <h3 className="mt-3">
                No Jobs Posted
              </h3>

              <p className="text-muted">
                You haven't posted any jobs yet.
              </p>

              <Link
                to="/post-job"
                className="btn btn-primary"
              >
                📢 Post Your First Job
              </Link>

            </div>

          </div>

        ) : (

          <div className="row g-4">

            {jobs
              .slice()
              .reverse()
              .map((job) => (

                <div
                  className="col-lg-6"
                  key={job.id}
                >

                  <div className="card border-0 shadow-sm h-100">

                    <div className="card-body p-4">

                      {/* TITLE */}

                      <div className="d-flex justify-content-between align-items-start">

                        <div>

                          <h4 className="fw-bold">
                            {job.title}
                          </h4>

                          <p className="text-muted mb-1">
                            🏢 {job.company}
                          </p>

                        </div>

                        <span
                          className={
                            job.status === "Active"
                              ? "badge bg-success"
                              : "badge bg-secondary"
                          }
                        >
                          {job.status}
                        </span>

                      </div>


                      <hr />


                      {/* DETAILS */}

                      <div className="row">

                        <div className="col-sm-6">

                          <p>
                            📍{" "}
                            <strong>
                              Location
                            </strong>

                            <br />

                            {job.location}
                          </p>

                        </div>


                        <div className="col-sm-6">

                          <p>
                            💰{" "}
                            <strong>
                              Salary
                            </strong>

                            <br />

                            {job.salary}
                          </p>

                        </div>


                        <div className="col-sm-6">

                          <p>
                            💼{" "}
                            <strong>
                              Type
                            </strong>

                            <br />

                            {job.type}
                          </p>

                        </div>


                        <div className="col-sm-6">

                          <p>
                            📂{" "}
                            <strong>
                              Category
                            </strong>

                            <br />

                            {job.category}
                          </p>

                        </div>

                      </div>


                      {/* DATE */}

                      <p className="text-muted">

                        📅 Posted on:{" "}
                        {job.postedDate}

                      </p>


                      {/* BUTTONS */}

                      <div className="d-flex flex-wrap gap-2">

                        <button
                          className={
                            job.status === "Active"
                              ? "btn btn-warning"
                              : "btn btn-success"
                          }
                          onClick={() =>
                            toggleStatus(job.id)
                          }
                        >
                          {job.status === "Active"
                            ? "⏸ Close Job"
                            : "▶ Activate Job"}
                        </button>


                        <button
                          className="btn btn-outline-danger"
                          onClick={() =>
                            deleteJob(job.id)
                          }
                        >
                          🗑 Delete
                        </button>

                      </div>

                    </div>

                  </div>

                </div>

              ))}

          </div>

        )}

      </div>

    </div>
  );
}

export default ManageJobs;