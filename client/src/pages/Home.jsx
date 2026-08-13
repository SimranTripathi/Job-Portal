import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  const [currentUser, setCurrentUser] = useState(null);

  // Check logged-in user
  useEffect(() => {
    const user = localStorage.getItem("currentUser");

    if (user) {
      setCurrentUser(JSON.parse(user));
    }
  }, []);

  // Logout
  const handleLogout = () => {
    localStorage.removeItem("currentUser");

    setCurrentUser(null);

    alert("✅ Logged out successfully!");

    navigate("/");
  };

  return (
    <div className="min-vh-100 bg-light">

      {/* ================= NAVBAR ================= */}

      <nav className="navbar navbar-expand-lg navbar-dark bg-primary shadow-sm">

        <div className="container">

          {/* LOGO */}

          <Link
            to="/"
            className="navbar-brand fw-bold fs-4"
          >
            💼 JobPortal
          </Link>


          {/* MOBILE MENU BUTTON */}

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarMenu"
            aria-controls="navbarMenu"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>


          {/* NAVIGATION */}

          <div
            className="collapse navbar-collapse"
            id="navbarMenu"
          >

            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">

              {/* HOME */}

              <li className="nav-item">
                <Link
                  to="/"
                  className="nav-link active"
                >
                  Home
                </Link>
              </li>


              {/* JOBS */}

              <li className="nav-item">
                <Link
                  to="/jobs"
                  className="nav-link"
                >
                  Jobs
                </Link>
              </li>


              {/* RESUME */}

              <li className="nav-item">
                <Link
                  to="/resume"
                  className="nav-link"
                >
                  Resume
                </Link>
              </li>


              {/* DASHBOARD */}

              <li className="nav-item">
                <Link
                  to="/dashboard"
                  className="nav-link"
                >
                  Dashboard
                </Link>
              </li>


              {/* APPLICATIONS */}

              <li className="nav-item">
                <Link
                  to="/applications"
                  className="nav-link"
                >
                  Applications
                </Link>
              </li>


              {/* PROFILE */}

              <li className="nav-item">
                <Link
                  to="/profile"
                  className="nav-link"
                >
                  Profile
                </Link>
              </li>

            </ul>


            {/* LOGIN / REGISTER / LOGOUT */}

            <div className="d-flex gap-2 align-items-center">

              {currentUser ? (

                <>
                  {/* USER NAME */}

                  <span className="text-white fw-semibold">
                    👋 {currentUser.name}
                  </span>


                  {/* LOGOUT */}

                  <button
                    className="btn btn-light"
                    onClick={handleLogout}
                  >
                    Logout
                  </button>
                </>

              ) : (

                <>
                  {/* LOGIN */}

                  <Link
                    to="/login"
                    className="btn btn-outline-light"
                  >
                    Login
                  </Link>


                  {/* REGISTER */}

                  <Link
                    to="/register"
                    className="btn btn-light"
                  >
                    Register
                  </Link>
                </>

              )}

            </div>

          </div>

        </div>

      </nav>


      {/* ================= HERO SECTION ================= */}

      <section className="bg-primary text-white py-5">

        <div className="container">

          <div className="row align-items-center">

            {/* LEFT */}

            <div className="col-lg-7">

              <h1 className="display-4 fw-bold">
                Find Your Dream Job
              </h1>

              <p className="lead mt-3">
                Discover thousands of job opportunities
                and take the next step in your career.
              </p>


              {/* BUTTONS */}

              <div className="d-flex flex-wrap gap-3 mt-4">

                <Link
                  to="/jobs"
                  className="btn btn-light btn-lg px-4"
                >
                  🔎 Find Jobs
                </Link>

                <Link
                  to="/resume"
                  className="btn btn-outline-light btn-lg px-4"
                >
                  📄 Upload Resume
                </Link>

              </div>

            </div>


            {/* RIGHT */}

            <div className="col-lg-5 text-center mt-5 mt-lg-0">

              <div
                className="bg-white text-primary rounded-circle shadow d-flex align-items-center justify-content-center mx-auto"
                style={{
                  width: "260px",
                  height: "260px",
                  fontSize: "100px",
                }}
              >
                💼
              </div>

            </div>

          </div>

        </div>

      </section>


      {/* ================= SEARCH SECTION ================= */}

      <section className="container">

        <div
          className="card shadow border-0"
          style={{
            marginTop: "-40px",
            position: "relative",
          }}
        >

          <div className="card-body p-4">

            <h4 className="fw-bold mb-3">
              🔎 Search for Jobs
            </h4>


            <div className="row g-3">

              {/* JOB */}

              <div className="col-md-5">

                <input
                  type="text"
                  className="form-control form-control-lg"
                  placeholder="Job title, skills or keywords"
                />

              </div>


              {/* LOCATION */}

              <div className="col-md-4">

                <input
                  type="text"
                  className="form-control form-control-lg"
                  placeholder="Location"
                />

              </div>


              {/* SEARCH */}

              <div className="col-md-3">

                <Link
                  to="/jobs"
                  className="btn btn-primary btn-lg w-100"
                >
                  Search Jobs
                </Link>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* ================= FEATURES ================= */}

      <section className="container py-5">

        <div className="text-center mb-5">

          <h2 className="fw-bold">
            Why Choose JobPortal?
          </h2>

          <p className="text-muted">
            Everything you need to find your next opportunity.
          </p>

        </div>


        <div className="row g-4">

          {/* FEATURE 1 */}

          <div className="col-md-4">

            <div className="card border-0 shadow-sm h-100 text-center">

              <div className="card-body p-4">

                <div
                  className="mb-3"
                  style={{ fontSize: "55px" }}
                >
                  🔎
                </div>

                <h4 className="fw-bold">
                  Find Jobs
                </h4>

                <p className="text-muted">
                  Search thousands of job opportunities
                  using our powerful search and filters.
                </p>

                <Link
                  to="/jobs"
                  className="btn btn-outline-primary"
                >
                  Explore Jobs
                </Link>

              </div>

            </div>

          </div>


          {/* FEATURE 2 */}

          <div className="col-md-4">

            <div className="card border-0 shadow-sm h-100 text-center">

              <div className="card-body p-4">

                <div
                  className="mb-3"
                  style={{ fontSize: "55px" }}
                >
                  📄
                </div>

                <h4 className="fw-bold">
                  Build Your Profile
                </h4>

                <p className="text-muted">
                  Upload your resume and create a
                  professional profile for recruiters.
                </p>

                <Link
                  to="/profile"
                  className="btn btn-outline-primary"
                >
                  Create Profile
                </Link>

              </div>

            </div>

          </div>


          {/* FEATURE 3 */}

          <div className="col-md-4">

            <div className="card border-0 shadow-sm h-100 text-center">

              <div className="card-body p-4">

                <div
                  className="mb-3"
                  style={{ fontSize: "55px" }}
                >
                  📊
                </div>

                <h4 className="fw-bold">
                  Track Applications
                </h4>

                <p className="text-muted">
                  Keep track of your job applications
                  and monitor your application status.
                </p>

                <Link
                  to="/applications"
                  className="btn btn-outline-primary"
                >
                  My Applications
                </Link>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* ================= HOW IT WORKS ================= */}

      <section className="bg-white py-5">

        <div className="container">

          <div className="text-center mb-5">

            <h2 className="fw-bold">
              How JobPortal Works
            </h2>

            <p className="text-muted">
              Start your job search in just a few steps.
            </p>

          </div>


          <div className="row g-4">

            {/* STEP 1 */}

            <div className="col-md-3">

              <div className="text-center">

                <div
                  className="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center mx-auto mb-3"
                  style={{
                    width: "70px",
                    height: "70px",
                    fontSize: "28px",
                  }}
                >
                  1
                </div>

                <h5 className="fw-bold">
                  Register
                </h5>

                <p className="text-muted">
                  Create your free JobPortal account.
                </p>

              </div>

            </div>


            {/* STEP 2 */}

            <div className="col-md-3">

              <div className="text-center">

                <div
                  className="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center mx-auto mb-3"
                  style={{
                    width: "70px",
                    height: "70px",
                    fontSize: "28px",
                  }}
                >
                  2
                </div>

                <h5 className="fw-bold">
                  Build Profile
                </h5>

                <p className="text-muted">
                  Add your skills, education and experience.
                </p>

              </div>

            </div>


            {/* STEP 3 */}

            <div className="col-md-3">

              <div className="text-center">

                <div
                  className="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center mx-auto mb-3"
                  style={{
                    width: "70px",
                    height: "70px",
                    fontSize: "28px",
                  }}
                >
                  3
                </div>

                <h5 className="fw-bold">
                  Apply
                </h5>

                <p className="text-muted">
                  Find suitable jobs and apply easily.
                </p>

              </div>

            </div>


            {/* STEP 4 */}

            <div className="col-md-3">

              <div className="text-center">

                <div
                  className="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center mx-auto mb-3"
                  style={{
                    width: "70px",
                    height: "70px",
                    fontSize: "28px",
                  }}
                >
                  4
                </div>

                <h5 className="fw-bold">
                  Get Hired
                </h5>

                <p className="text-muted">
                  Track applications and land your dream job.
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* ================= CALL TO ACTION ================= */}

      <section className="bg-primary text-white py-5">

        <div className="container text-center">

          <h2 className="fw-bold">
            Ready to Find Your Dream Job?
          </h2>

          <p className="lead">
            Create your profile and start applying today.
          </p>

          <div className="d-flex justify-content-center gap-3 flex-wrap mt-4">

            <Link
              to="/jobs"
              className="btn btn-light btn-lg px-4"
            >
              🔎 Browse Jobs
            </Link>

            {!currentUser && (
              <Link
                to="/register"
                className="btn btn-outline-light btn-lg px-4"
              >
                🚀 Register Now
              </Link>
            )}

          </div>

        </div>

      </section>


      {/* ================= FOOTER ================= */}

      <footer className="bg-dark text-white py-4">

        <div className="container">

          <div className="row">

            {/* ABOUT */}

            <div className="col-md-4 mb-3">

              <h5 className="fw-bold">
                💼 JobPortal
              </h5>

              <p className="text-secondary">
                Your trusted platform for finding jobs,
                building your career and connecting with
                employers.
              </p>

            </div>


            {/* QUICK LINKS */}

            <div className="col-md-4 mb-3">

              <h5 className="fw-bold">
                Quick Links
              </h5>

              <div className="d-flex flex-column gap-2">

                <Link
                  to="/jobs"
                  className="text-secondary text-decoration-none"
                >
                  Jobs
                </Link>

                <Link
                  to="/resume"
                  className="text-secondary text-decoration-none"
                >
                  Resume
                </Link>

                <Link
                  to="/dashboard"
                  className="text-secondary text-decoration-none"
                >
                  Dashboard
                </Link>

                <Link
                  to="/profile"
                  className="text-secondary text-decoration-none"
                >
                  Profile
                </Link>

              </div>

            </div>


            {/* ACCOUNT */}

            <div className="col-md-4 mb-3">

              <h5 className="fw-bold">
                Account
              </h5>

              <div className="d-flex flex-column gap-2">

                {currentUser ? (

                  <button
                    className="btn btn-link text-start text-secondary p-0 text-decoration-none"
                    onClick={handleLogout}
                  >
                    Logout
                  </button>

                ) : (

                  <>
                    <Link
                      to="/login"
                      className="text-secondary text-decoration-none"
                    >
                      Login
                    </Link>

                    <Link
                      to="/register"
                      className="text-secondary text-decoration-none"
                    >
                      Register
                    </Link>
                  </>

                )}

              </div>

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

export default Home;