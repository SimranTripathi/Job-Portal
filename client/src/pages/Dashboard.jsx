import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Dashboard() {
  const [applications, setApplications] = useState([]);
const [resume, setResume] = useState(null);
const [user, setUser] = useState(null);
  useEffect(() => {
    // Get applications
    const savedApplications =
      JSON.parse(localStorage.getItem("applications")) || [];

    setApplications(savedApplications);

    // Get resume information
    const savedResume = localStorage.getItem("resumeInfo");

    if (savedResume) {
      setResume(JSON.parse(savedResume));
    }
  }, []);

  // Statistics
  const appliedCount = applications.length;

  const underReviewCount = applications.filter(
    (application) => application.status === "Under Review"
  ).length;

  const shortlistedCount = applications.filter(
    (application) => application.status === "Shortlisted"
  ).length;

  return (
    <div className="container py-5">

      {/* HEADER */}

      <div className="mb-5">

        <h1 className="fw-bold">
          👋 Welcome to JobPortal
        </h1>

        <p className="text-muted">
          Manage your job applications and resume
          from one place.
        </p>

      </div>


      {/* STATISTICS */}

      <div className="row g-4 mb-5">

        {/* APPLIED */}

        <div className="col-md-4">

          <div className="card shadow-sm border-0 h-100">

            <div className="card-body p-4">

              <div className="d-flex justify-content-between">

                <div>

                  <p className="text-muted mb-1">
                    Applied Jobs
                  </p>

                  <h2 className="fw-bold">
                    {appliedCount}
                  </h2>

                </div>

                <div
                  className="bg-primary bg-opacity-10 rounded p-3"
                  style={{ fontSize: "30px" }}
                >
                  📝
                </div>

              </div>

            </div>

          </div>

        </div>


        {/* UNDER REVIEW */}

        <div className="col-md-4">

          <div className="card shadow-sm border-0 h-100">

            <div className="card-body p-4">

              <div className="d-flex justify-content-between">

                <div>

                  <p className="text-muted mb-1">
                    Under Review
                  </p>

                  <h2 className="fw-bold">
                    {underReviewCount}
                  </h2>

                </div>

                <div
                  className="bg-warning bg-opacity-10 rounded p-3"
                  style={{ fontSize: "30px" }}
                >
                  ⏳
                </div>

              </div>

            </div>

          </div>

        </div>


        {/* SHORTLISTED */}

        <div className="col-md-4">

          <div className="card shadow-sm border-0 h-100">

            <div className="card-body p-4">

              <div className="d-flex justify-content-between">

                <div>

                  <p className="text-muted mb-1">
                    Shortlisted
                  </p>

                  <h2 className="fw-bold">
                    {shortlistedCount}
                  </h2>

                </div>

                <div
                  className="bg-success bg-opacity-10 rounded p-3"
                  style={{ fontSize: "30px" }}
                >
                  🎉
                </div>

              </div>

            </div>

          </div>

        </div>

      </div>


      {/* MAIN CONTENT */}

      <div className="row g-4">


        {/* RECENT APPLICATIONS */}

        <div className="col-lg-8">

          <div className="card shadow-sm border-0">

            <div className="card-body p-4">

              <div className="d-flex justify-content-between align-items-center mb-4">

                <h3 className="fw-bold mb-0">
                  📋 Recent Applications
                </h3>

                <Link
                  to="/applications"
                  className="btn btn-outline-primary btn-sm"
                >
                  View All
                </Link>

              </div>


              {applications.length === 0 ? (

                <div className="text-center py-5">

                  <div style={{ fontSize: "60px" }}>
                    📭
                  </div>

                  <h5 className="mt-3">
                    No Applications Yet
                  </h5>

                  <p className="text-muted">
                    Start applying for jobs to see them
                    here.
                  </p>

                  <Link
                    to="/jobs"
                    className="btn btn-primary"
                  >
                    🔎 Find Jobs
                  </Link>

                </div>

              ) : (

                <div className="table-responsive">

                  <table className="table align-middle">

                    <thead>

                      <tr>

                        <th>Job</th>

                        <th>Company</th>

                        <th>Location</th>

                        <th>Status</th>

                        <th>Date</th>

                      </tr>

                    </thead>

                    <tbody>

                      {applications
                        .slice()
                        .reverse()
                        .slice(0, 5)
                        .map((application) => (

                          <tr key={application.id}>

                            <td>
                              <strong>
                                {application.title}
                              </strong>
                            </td>

                            <td>
                              {application.company}
                            </td>

                            <td>
                              {application.location}
                            </td>

                            <td>

                              <span
                                className={
                                  application.status ===
                                  "Shortlisted"
                                    ? "badge bg-success"
                                    : application.status ===
                                      "Under Review"
                                    ? "badge bg-warning text-dark"
                                    : "badge bg-primary"
                                }
                              >
                                {application.status}
                              </span>

                            </td>

                            <td>
                              {application.appliedDate}
                            </td>

                          </tr>

                        ))}

                    </tbody>

                  </table>

                </div>

              )}

            </div>

          </div>

        </div>


        {/* RESUME */}

        <div className="col-lg-4">

          <div className="card shadow-sm border-0">

            <div className="card-body p-4">

              <h3 className="fw-bold">
                📄 My Resume
              </h3>

              <p className="text-muted">
                Manage your uploaded resume.
              </p>


              {resume ? (

                <div>

                  <div className="alert alert-success">

                    <strong>
                      ✅ Resume Uploaded
                    </strong>

                    <p className="mb-0 mt-2">
                      {resume.name}
                    </p>

                  </div>

                  <Link
                    to="/resume"
                    className="btn btn-primary w-100"
                  >
                    👀 View Resume
                  </Link>

                </div>

              ) : (

                <div>

                  <div className="alert alert-light border">

                    <div
                      style={{
                        fontSize: "45px",
                        textAlign: "center"
                      }}
                    >
                      📄
                    </div>

                    <p className="text-center mb-0">
                      No resume uploaded yet.
                    </p>

                  </div>

                  <Link
                    to="/resume"
                    className="btn btn-success w-100"
                  >
                    📤 Upload Resume
                  </Link>

                </div>

              )}

            </div>

          </div>


          {/* QUICK ACTIONS */}

          <div className="card shadow-sm border-0 mt-4">

            <div className="card-body p-4">

              <h5 className="fw-bold mb-3">
                ⚡ Quick Actions
              </h5>

              <div className="d-grid gap-2">

                <Link
                  to="/jobs"
                  className="btn btn-outline-primary"
                >
                  🔎 Find Jobs
                </Link>

                <Link
                  to="/applications"
                  className="btn btn-outline-dark"
                >
                  📋 My Applications
                </Link>

                <Link
                  to="/resume"
                  className="btn btn-outline-success"
                >
                  📄 Manage Resume
                </Link>

              </div>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Dashboard;