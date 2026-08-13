import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Applications() {
  const [applications, setApplications] = useState([]);

  useEffect(() => {
    const savedApplications =
      JSON.parse(localStorage.getItem("applications")) || [];

    setApplications(savedApplications);
  }, []);

  const removeApplication = (id) => {
    const updatedApplications = applications.filter(
      (application) => application.id !== id
    );

    localStorage.setItem(
      "applications",
      JSON.stringify(updatedApplications)
    );

    setApplications(updatedApplications);
  };

  const clearApplications = () => {
    if (
      window.confirm(
        "Are you sure you want to remove all applications?"
      )
    ) {
      localStorage.removeItem("applications");
      setApplications([]);
    }
  };

  return (
    <div className="container py-5">

      {/* HEADER */}
      <div className="d-flex justify-content-between align-items-center mb-4">

        <div>
          <h1 className="fw-bold">
            📋 My Applications
          </h1>

          <p className="text-muted mb-0">
            Track all the jobs you have applied for.
          </p>
        </div>

        {applications.length > 0 && (
          <button
            className="btn btn-outline-danger"
            onClick={clearApplications}
          >
            🗑 Clear All
          </button>
        )}

      </div>


      {/* APPLICATION COUNT */}
      {applications.length > 0 && (
        <div className="alert alert-primary">
          You have applied to{" "}
          <strong>{applications.length}</strong>{" "}
          job{applications.length > 1 ? "s" : ""}.
        </div>
      )}


      {/* NO APPLICATIONS */}
      {applications.length === 0 ? (

        <div className="card shadow-sm border-0">

          <div className="card-body text-center py-5">

            <div style={{ fontSize: "70px" }}>
              📭
            </div>

            <h3 className="mt-3">
              No Applications Yet
            </h3>

            <p className="text-muted">
              You haven't applied for any jobs yet.
            </p>

            <Link
              to="/jobs"
              className="btn btn-primary"
            >
              🔎 Find Jobs
            </Link>

          </div>

        </div>

      ) : (

        /* APPLICATION LIST */
        <div className="row g-4">

          {applications.map((application) => (

            <div
              className="col-md-6"
              key={application.id}
            >

              <div className="card shadow-sm border-0 h-100">

                <div className="card-body p-4">

                  <div className="d-flex justify-content-between align-items-start">

                    <div>

                      <h4 className="fw-bold">
                        {application.title}
                      </h4>

                      <p className="text-muted mb-1">
                        🏢 {application.company}
                      </p>

                    </div>

                    <span className="badge bg-primary">
                      {application.status}
                    </span>

                  </div>

                  <hr />

                  <div className="row">

                    <div className="col-sm-6">
                      <p>
                        📍 <strong>Location</strong>
                        <br />
                        {application.location}
                      </p>
                    </div>

                    <div className="col-sm-6">
                      <p>
                        💰 <strong>Salary</strong>
                        <br />
                        {application.salary}
                      </p>
                    </div>

                    <div className="col-sm-6">
                      <p>
                        🕐 <strong>Job Type</strong>
                        <br />
                        {application.type}
                      </p>
                    </div>

                    <div className="col-sm-6">
                      <p>
                        📅 <strong>Applied On</strong>
                        <br />
                        {application.appliedDate}
                      </p>
                    </div>

                  </div>

                  <div className="d-flex gap-2 mt-3">

                    <button
                      className="btn btn-outline-danger"
                      onClick={() =>
                        removeApplication(application.id)
                      }
                    >
                      Remove
                    </button>

                    <Link
                      to="/jobs"
                      className="btn btn-primary"
                    >
                      Find More Jobs
                    </Link>

                  </div>

                </div>

              </div>

            </div>

          ))}

        </div>

      )}

    </div>
  );
}

export default Applications;