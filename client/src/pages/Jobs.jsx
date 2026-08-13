import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Jobs() {
  const [jobs, setJobs] = useState([]);

  const [search, setSearch] = useState("");
  const [location, setLocation] = useState("");
  const [category, setCategory] = useState("");
  const [jobType, setJobType] = useState("");

  // Default jobs
  const defaultJobs = [
    {
      id: 1,
      title: "Frontend Developer",
      company: "Tech Solutions",
      location: "Chandigarh",
      category: "Web Development",
      type: "Full Time",
      salary: "₹5 - ₹8 LPA",
      experience: "0-2 Years",
      description:
        "We are looking for a frontend developer to build modern and responsive web applications.",
      skills:
        "React, JavaScript, HTML, CSS, Bootstrap",
      status: "Active",
      postedDate: "14/08/2026",
    },

    {
      id: 2,
      title: "Backend Developer",
      company: "CodeWorks",
      location: "Mohali",
      category: "IT & Software",
      type: "Full Time",
      salary: "₹6 - ₹10 LPA",
      experience: "1-3 Years",
      description:
        "Join our backend development team and work on scalable APIs and web applications.",
      skills:
        "Node.js, Express, MongoDB, REST API",
      status: "Active",
      postedDate: "14/08/2026",
    },

    {
      id: 3,
      title: "React Developer Intern",
      company: "Innovate Labs",
      location: "Remote",
      category: "Web Development",
      type: "Internship",
      salary: "₹15,000 - ₹25,000 / month",
      experience: "Fresher",
      description:
        "We are looking for a React developer intern to work with our development team.",
      skills:
        "React, JavaScript, HTML, CSS",
      status: "Active",
      postedDate: "14/08/2026",
    },

    {
      id: 4,
      title: "Data Analyst",
      company: "DataTech",
      location: "Delhi",
      category: "Data Science",
      type: "Full Time",
      salary: "₹5 - ₹9 LPA",
      experience: "0-2 Years",
      description:
        "Analyze business data and create meaningful reports and dashboards.",
      skills:
        "Python, Pandas, SQL, Excel, Power BI",
      status: "Active",
      postedDate: "14/08/2026",
    },

    {
      id: 5,
      title: "UI/UX Designer",
      company: "Creative Studio",
      location: "Bangalore",
      category: "Design",
      type: "Full Time",
      salary: "₹4 - ₹7 LPA",
      experience: "1-2 Years",
      description:
        "Design attractive and user-friendly interfaces for web and mobile applications.",
      skills:
        "Figma, UI Design, UX Research, Prototyping",
      status: "Active",
      postedDate: "14/08/2026",
    },
  ];

  // Load jobs
  useEffect(() => {
    const postedJobs =
      JSON.parse(
        localStorage.getItem("postedJobs")
      ) || [];

    setJobs([
      ...defaultJobs,
      ...postedJobs,
    ]);
  }, []);

  // Filter jobs
  const filteredJobs = jobs.filter((job) => {

    const searchText =
      search.toLowerCase();

    const matchesSearch =
      job.title
        .toLowerCase()
        .includes(searchText) ||
      job.company
        .toLowerCase()
        .includes(searchText) ||
      job.skills
        ?.toLowerCase()
        .includes(searchText);

    const matchesLocation =
      location === "" ||
      job.location
        .toLowerCase()
        .includes(location.toLowerCase());

    const matchesCategory =
      category === "" ||
      job.category === category;

    const matchesJobType =
      jobType === "" ||
      job.type === jobType;

    return (
      matchesSearch &&
      matchesLocation &&
      matchesCategory &&
      matchesJobType &&
      job.status !== "Closed"
    );
  });

  // Clear filters
  const clearFilters = () => {
    setSearch("");
    setLocation("");
    setCategory("");
    setJobType("");
  };

  return (
    <div className="min-vh-100 bg-light">

      {/* ================= NAVBAR ================= */}

      <nav className="navbar navbar-dark bg-primary shadow-sm">

        <div className="container">

          <Link
            to="/"
            className="navbar-brand fw-bold fs-4"
          >
            💼 JobPortal
          </Link>

          <div className="d-flex gap-2">

            <Link
              to="/"
              className="btn btn-outline-light"
            >
              Home
            </Link>

            <Link
              to="/dashboard"
              className="btn btn-light"
            >
              Dashboard
            </Link>

          </div>

        </div>

      </nav>


      {/* ================= HEADER ================= */}

      <section className="bg-primary text-white py-5">

        <div className="container">

          <h1 className="fw-bold">
            🔎 Find Your Dream Job
          </h1>

          <p className="lead mb-0">
            Explore the latest job opportunities.
          </p>

        </div>

      </section>


      {/* ================= FILTER ================= */}

      <div className="container">

        <div
          className="card border-0 shadow-sm"
          style={{
            marginTop: "-30px",
            position: "relative",
          }}
        >

          <div className="card-body p-4">

            <h5 className="fw-bold mb-3">
              Search & Filter Jobs
            </h5>


            <div className="row g-3">

              {/* SEARCH */}

              <div className="col-lg-3 col-md-6">

                <label className="form-label">
                  Search
                </label>

                <input
                  type="text"
                  className="form-control"
                  placeholder="Job title or skills"
                  value={search}
                  onChange={(e) =>
                    setSearch(e.target.value)
                  }
                />

              </div>


              {/* LOCATION */}

              <div className="col-lg-3 col-md-6">

                <label className="form-label">
                  Location
                </label>

                <input
                  type="text"
                  className="form-control"
                  placeholder="e.g. Chandigarh"
                  value={location}
                  onChange={(e) =>
                    setLocation(e.target.value)
                  }
                />

              </div>


              {/* CATEGORY */}

              <div className="col-lg-2 col-md-6">

                <label className="form-label">
                  Category
                </label>

                <select
                  className="form-select"
                  value={category}
                  onChange={(e) =>
                    setCategory(e.target.value)
                  }
                >

                  <option value="">
                    All Categories
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

              <div className="col-lg-2 col-md-6">

                <label className="form-label">
                  Job Type
                </label>

                <select
                  className="form-select"
                  value={jobType}
                  onChange={(e) =>
                    setJobType(e.target.value)
                  }
                >

                  <option value="">
                    All Types
                  </option>

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


              {/* CLEAR */}

              <div className="col-lg-2 col-md-12 d-flex align-items-end">

                <button
                  className="btn btn-outline-secondary w-100"
                  onClick={clearFilters}
                >
                  🔄 Clear
                </button>

              </div>

            </div>

          </div>

        </div>

      </div>


      {/* ================= JOB RESULTS ================= */}

      <div className="container py-5">

        <div className="d-flex justify-content-between align-items-center mb-4">

          <div>

            <h3 className="fw-bold mb-1">
              Available Jobs
            </h3>

            <p className="text-muted mb-0">
              {filteredJobs.length} jobs found
            </p>

          </div>

          <Link
            to="/post-job"
            className="btn btn-primary"
          >
            📢 Post a Job
          </Link>

        </div>


        {/* NO JOB */}

        {filteredJobs.length === 0 ? (

          <div className="card border-0 shadow-sm">

            <div className="card-body text-center py-5">

              <div
                style={{
                  fontSize: "70px",
                }}
              >
                😔
              </div>

              <h3 className="mt-3">
                No Jobs Found
              </h3>

              <p className="text-muted">
                Try changing your search or filters.
              </p>

              <button
                className="btn btn-primary"
                onClick={clearFilters}
              >
                Clear Filters
              </button>

            </div>

          </div>

        ) : (

          <div className="row g-4">

            {filteredJobs.map((job) => (

              <div
                className="col-lg-6"
                key={job.id}
              >

                <div className="card border-0 shadow-sm h-100">

                  <div className="card-body p-4">


                    {/* TOP */}

                    <div className="d-flex justify-content-between align-items-start">

                      <div>

                        <h4 className="fw-bold">
                          {job.title}
                        </h4>

                        <p className="text-muted mb-2">
                          🏢 {job.company}
                        </p>

                      </div>

                      <span className="badge bg-success">
                        {job.status}
                      </span>

                    </div>


                    {/* DETAILS */}

                    <div className="row mt-3">

                      <div className="col-sm-6">

                        <p className="mb-2">
                          📍{" "}
                          <strong>
                            Location:
                          </strong>

                          <br />

                          <span className="text-muted">
                            {job.location}
                          </span>
                        </p>

                      </div>


                      <div className="col-sm-6">

                        <p className="mb-2">
                          💰{" "}
                          <strong>
                            Salary:
                          </strong>

                          <br />

                          <span className="text-muted">
                            {job.salary}
                          </span>
                        </p>

                      </div>


                      <div className="col-sm-6">

                        <p className="mb-2">
                          💼{" "}
                          <strong>
                            Type:
                          </strong>

                          <br />

                          <span className="text-muted">
                            {job.type}
                          </span>
                        </p>

                      </div>


                      <div className="col-sm-6">

                        <p className="mb-2">
                          📂{" "}
                          <strong>
                            Category:
                          </strong>

                          <br />

                          <span className="text-muted">
                            {job.category}
                          </span>
                        </p>

                      </div>

                    </div>


                    {/* EXPERIENCE */}

                    <p className="mb-2">

                      🎓{" "}
                      <strong>
                        Experience:
                      </strong>{" "}

                      <span className="text-muted">
                        {job.experience || "Not specified"}
                      </span>

                    </p>


                    {/* SKILLS */}

                    {job.skills && (

                      <div className="mb-3">

                        <strong>
                          🛠 Skills:
                        </strong>

                        <div className="mt-2">

                          {job.skills
                            .split(",")
                            .map((skill, index) => (

                              <span
                                key={index}
                                className="badge bg-light text-dark border me-2 mb-2"
                              >
                                {skill.trim()}
                              </span>

                            ))}

                        </div>

                      </div>

                    )}


                    <hr />


                    {/* FOOTER */}

                    <div className="d-flex justify-content-between align-items-center">

                      <small className="text-muted">
                        📅 Posted: {job.postedDate}
                      </small>


                      <Link
                        to={`/jobs/${job.id}`}
                        state={{ job }}
                        className="btn btn-primary"
                      >
                        View Details →
                      </Link>

                    </div>

                  </div>

                </div>

              </div>

            ))}

          </div>

        )}

      </div>


      {/* ================= FOOTER ================= */}

      <footer className="bg-dark text-white py-4">

        <div className="container">

          <div className="row">

            <div className="col-md-6">

              <h5 className="fw-bold">
                💼 JobPortal
              </h5>

              <p className="text-secondary mb-0">
                Find jobs. Build your career. Get hired.
              </p>

            </div>


            <div className="col-md-6 text-md-end mt-3 mt-md-0">

              <Link
                to="/"
                className="text-secondary text-decoration-none me-3"
              >
                Home
              </Link>

              <Link
                to="/resume"
                className="text-secondary text-decoration-none me-3"
              >
                Resume
              </Link>

              <Link
                to="/dashboard"
                className="text-secondary text-decoration-none"
              >
                Dashboard
              </Link>

            </div>

          </div>


          <hr className="border-secondary" />


          <div className="text-center text-secondary">

            <small>
              © 2026 JobPortal. All Rights Reserved.
            </small>

          </div>

        </div>

      </footer>

    </div>
  );
}

export default Jobs;