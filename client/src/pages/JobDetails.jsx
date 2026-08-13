import { Link, useLocation, useNavigate } from "react-router-dom";

function JobDetails() {
  const location = useLocation();
  const navigate = useNavigate();

  const job = location.state?.job;

  if (!job) {
    return (
      <div className="container py-5 text-center">
        <h3>Job not found</h3>

        <Link
          to="/jobs"
          className="btn btn-primary mt-3"
        >
          Back to Jobs
        </Link>
      </div>
    );
  }

  const handleApply = () => {
    const applications =
      JSON.parse(localStorage.getItem("applications")) || [];

    const alreadyApplied = applications.some(
      (application) => application.id === job.id
    );

    if (alreadyApplied) {
      alert("You have already applied for this job.");
      return;
    }

    applications.push({
      ...job,
      appliedDate: new Date().toLocaleDateString(),
      status: "Applied",
    });

    localStorage.setItem(
      "applications",
      JSON.stringify(applications)
    );

    alert("Application submitted successfully!");

    navigate("/applications");
  };

  return (
    <div className="container py-5">

      <Link
        to="/jobs"
        className="btn btn-outline-secondary mb-4"
      >
        ← Back to Jobs
      </Link>

      <div className="card shadow border-0">

        <div className="card-body p-5">

          <div className="row">

            <div className="col-md-8">

              <span className="badge bg-primary mb-3">
                {job.category}
              </span>

              <h1 className="fw-bold">
                {job.title}
              </h1>

              <h5 className="text-muted">
                🏢 {job.company}
              </h5>

              <div className="mt-4">

                <p>
                  📍 <strong>Location:</strong>{" "}
                  {job.location}
                </p>

                <p>
                  💰 <strong>Salary:</strong>{" "}
                  {job.salary}
                </p>

                <p>
                  🕐 <strong>Job Type:</strong>{" "}
                  {job.type}
                </p>

                <p>
                  👨‍💻 <strong>Experience:</strong>{" "}
                  {job.experience}
                </p>

              </div>

              <hr />

              <h4 className="mt-4">
                Job Description
              </h4>

              <p className="text-muted">
                {job.description}
              </p>

              <h4 className="mt-4">
                Skills Required
              </h4>

              <div className="d-flex gap-2 flex-wrap">
                <span className="badge bg-secondary">
                  JavaScript
                </span>

                <span className="badge bg-secondary">
                  React
                </span>

                <span className="badge bg-secondary">
                  Problem Solving
                </span>

                <span className="badge bg-secondary">
                  Communication
                </span>
              </div>

            </div>

            <div className="col-md-4 mt-4 mt-md-0">

              <div className="card bg-light border-0">

                <div className="card-body p-4">

                  <h5>
                    Ready to Apply?
                  </h5>

                  <p className="text-muted">
                    Submit your application for this
                    position.
                  </p>

                  <button
                    className="btn btn-primary w-100"
                    onClick={handleApply}
                  >
                    📝 Apply Now
                  </button>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default JobDetails;