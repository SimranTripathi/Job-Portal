import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Profile() {
  const navigate = useNavigate();

  const [profile, setProfile] = useState({
    name: "",
    email: "",
    phone: "",
    location: "",
    education: "",
    skills: "",
    experience: "",
    about: "",
    photo: "",
  });

  const [isEditing, setIsEditing] = useState(true);

  useEffect(() => {
    const currentUser = localStorage.getItem("currentUser");
    const savedProfile = localStorage.getItem("profile");

    if (!currentUser) {
      alert("Please login first.");
      navigate("/login");
      return;
    }

    const user = JSON.parse(currentUser);

    if (savedProfile) {
      const saved = JSON.parse(savedProfile);

      setProfile({
        name: saved.name || user.name || "",
        email: saved.email || user.email || "",
        phone: saved.phone || user.phone || "",
        location: saved.location || "",
        education: saved.education || "",
        skills: saved.skills || "",
        experience: saved.experience || "",
        about: saved.about || "",
        photo: saved.photo || "",
      });
    } else {
      setProfile({
        name: user.name || "",
        email: user.email || "",
        phone: user.phone || "",
        location: "",
        education: "",
        skills: "",
        experience: "",
        about: "",
        photo: "",
      });
    }
  }, [navigate]);

  const handleChange = (e) => {
    setProfile({
      ...profile,
      [e.target.name]: e.target.value,
    });
  };

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];

    if (!file) return;

    if (!file.type.startsWith("image/")) {
      alert("Please select an image.");
      return;
    }

    if (file.size > 2 * 1024 * 1024) {
      alert("Image must be less than 2 MB.");
      return;
    }

    const reader = new FileReader();

    reader.onload = () => {
      setProfile({
        ...profile,
        photo: reader.result,
      });
    };

    reader.readAsDataURL(file);
  };

  const removePhoto = () => {
    setProfile({
      ...profile,
      photo: "",
    });
  };

  const handleSave = (e) => {
    e.preventDefault();

    if (!profile.name.trim()) {
      alert("Please enter your name.");
      return;
    }

    if (!profile.email.trim()) {
      alert("Please enter your email.");
      return;
    }

    localStorage.setItem(
      "profile",
      JSON.stringify(profile)
    );

    const currentUser = localStorage.getItem("currentUser");

    if (currentUser) {
      const user = JSON.parse(currentUser);

      localStorage.setItem(
        "currentUser",
        JSON.stringify({
          ...user,
          name: profile.name,
          email: profile.email,
          phone: profile.phone,
        })
      );
    }

    alert("Profile saved successfully!");

    setIsEditing(false);
  };

  const handleLogout = () => {
    localStorage.removeItem("currentUser");
    navigate("/login");
  };

  const skillsArray = profile.skills
    ? profile.skills
        .split(",")
        .map((skill) => skill.trim())
        .filter((skill) => skill !== "")
    : [];

  return (
    <div className="profile-page">

      {/* ================= CUSTOM STYLE ================= */}

      <style>{`

        .profile-page {
          min-height: 100vh;
          background: #f4f7fb;
          font-family: Arial, sans-serif;
        }

        .profile-navbar {
          background: linear-gradient(
            135deg,
            #0d6efd,
            #084298
          );
        }

        .profile-navbar .navbar-brand {
          font-size: 24px;
          letter-spacing: 0.3px;
        }

        .profile-hero {
          background: linear-gradient(
            135deg,
            #0d6efd,
            #084298
          );
          min-height: 230px;
          position: relative;
          overflow: hidden;
        }

        .profile-hero::before {
          content: "";
          position: absolute;
          width: 300px;
          height: 300px;
          border-radius: 50%;
          background: rgba(255,255,255,0.08);
          right: -70px;
          top: -100px;
        }

        .profile-hero::after {
          content: "";
          position: absolute;
          width: 180px;
          height: 180px;
          border-radius: 50%;
          background: rgba(255,255,255,0.06);
          left: -50px;
          bottom: -80px;
        }

        .hero-content {
          position: relative;
          z-index: 2;
        }

        .profile-main {
          margin-top: -100px;
          position: relative;
          z-index: 5;
        }

        .profile-card {
          border: none;
          border-radius: 20px;
          box-shadow: 0 10px 35px rgba(0,0,0,0.08);
          overflow: hidden;
        }

        .profile-left {
          background: linear-gradient(
            180deg,
            #f8fbff,
            #eef5ff
          );
          border-right: 1px solid #e8edf5;
        }

        .profile-avatar {
          width: 150px;
          height: 150px;
          border-radius: 50%;
          object-fit: cover;
          border: 6px solid white;
          box-shadow: 0 8px 25px rgba(0,0,0,0.15);
        }

        .avatar-placeholder {
          width: 150px;
          height: 150px;
          border-radius: 50%;
          background: linear-gradient(
            135deg,
            #0d6efd,
            #6610f2
          );
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 65px;
          margin: auto;
          border: 6px solid white;
          box-shadow: 0 8px 25px rgba(0,0,0,0.15);
        }

        .profile-name {
          font-size: 28px;
          font-weight: 700;
          color: #172033;
        }

        .profile-role {
          color: #6c757d;
        }

        .info-box {
          background: white;
          border: 1px solid #e8edf5;
          border-radius: 12px;
          padding: 13px 15px;
          margin-bottom: 12px;
        }

        .info-icon {
          width: 38px;
          height: 38px;
          border-radius: 10px;
          background: #eaf2ff;
          color: #0d6efd;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 18px;
          flex-shrink: 0;
        }

        .section-title {
          font-weight: 700;
          color: #172033;
          font-size: 20px;
          margin-bottom: 18px;
        }

        .section-title::after {
          content: "";
          display: block;
          width: 45px;
          height: 3px;
          background: #0d6efd;
          margin-top: 7px;
          border-radius: 5px;
        }

        .form-control,
        .form-select {
          border-radius: 10px;
          padding: 11px 14px;
          border: 1px solid #dce3ec;
        }

        .form-control:focus,
        .form-select:focus {
          border-color: #0d6efd;
          box-shadow: 0 0 0 0.2rem rgba(13,110,253,0.1);
        }

        .skill-badge {
          display: inline-block;
          padding: 8px 13px;
          margin: 4px;
          border-radius: 20px;
          background: #eaf2ff;
          color: #0d6efd;
          font-size: 14px;
          font-weight: 600;
        }

        .preview-card {
          border-radius: 20px;
          border: none;
          box-shadow: 0 8px 30px rgba(0,0,0,0.06);
        }

        .preview-header {
          background: linear-gradient(
            135deg,
            #0d6efd,
            #084298
          );
          color: white;
          padding: 25px;
        }

        .preview-avatar {
          width: 110px;
          height: 110px;
          border-radius: 50%;
          object-fit: cover;
          border: 4px solid white;
        }

        .preview-placeholder {
          width: 110px;
          height: 110px;
          border-radius: 50%;
          background: white;
          color: #0d6efd;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 45px;
          border: 4px solid white;
        }

        .stat-card {
          background: white;
          border-radius: 14px;
          padding: 18px;
          border: 1px solid #e8edf5;
          text-align: center;
        }

        .stat-number {
          font-size: 25px;
          font-weight: 700;
          color: #0d6efd;
        }

        .action-btn {
          border-radius: 10px;
          padding: 11px 20px;
          font-weight: 600;
        }

        .footer {
          background: #111827;
        }

        @media (max-width: 768px) {

          .profile-main {
            margin-top: -60px;
          }

          .profile-left {
            border-right: none;
            border-bottom: 1px solid #e8edf5;
          }

          .profile-hero {
            min-height: 190px;
          }

        }

      `}</style>


      {/* ================= NAVBAR ================= */}

      <nav className="navbar navbar-expand-lg navbar-dark profile-navbar">

        <div className="container py-2">

          <Link
            to="/"
            className="navbar-brand fw-bold"
          >
            💼 JobPortal
          </Link>

          <div className="d-flex gap-2">

            <Link
              to="/"
              className="btn btn-outline-light btn-sm"
            >
              Home
            </Link>

            <Link
              to="/jobs"
              className="btn btn-outline-light btn-sm"
            >
              Jobs
            </Link>

            <Link
              to="/dashboard"
              className="btn btn-light btn-sm"
            >
              Dashboard
            </Link>

            <button
              onClick={handleLogout}
              className="btn btn-danger btn-sm"
            >
              Logout
            </button>

          </div>

        </div>

      </nav>


      {/* ================= HERO ================= */}

      <section className="profile-hero text-white">

        <div className="container hero-content pt-5">

          <h1 className="fw-bold">
            My Professional Profile
          </h1>

          <p className="mb-0">
            Build your profile and stand out to recruiters.
          </p>

        </div>

      </section>


      {/* ================= MAIN ================= */}

      <main className="container profile-main pb-5">

        <div className="card profile-card">

          <div className="row g-0">


            {/* ================= LEFT SIDE ================= */}

            <div className="col-lg-4 profile-left">

              <div className="p-4 p-md-5 text-center">

                {/* PHOTO */}

                {profile.photo ? (

                  <img
                    src={profile.photo}
                    alt="Profile"
                    className="profile-avatar"
                  />

                ) : (

                  <div className="avatar-placeholder">
                    👤
                  </div>

                )}


                <h2 className="profile-name mt-4 mb-1">
                  {profile.name || "Your Name"}
                </h2>

                <p className="profile-role mb-4">
                  Job Seeker
                </p>


                {/* PHOTO BUTTONS */}

                <div className="mb-4">

                  <label
                    htmlFor="photoUpload"
                    className="btn btn-primary action-btn me-2"
                  >
                    📷 Upload
                  </label>

                  <input
                    id="photoUpload"
                    type="file"
                    accept="image/*"
                    className="d-none"
                    onChange={handlePhotoChange}
                  />

                  {profile.photo && (

                    <button
                      type="button"
                      className="btn btn-outline-danger action-btn"
                      onClick={removePhoto}
                    >
                      🗑
                    </button>

                  )}

                </div>


                {/* CONTACT INFO */}

                <div className="text-start">

                  <div className="info-box d-flex gap-3">

                    <div className="info-icon">
                      📧
                    </div>

                    <div>
                      <small className="text-muted">
                        Email
                      </small>

                      <div className="fw-semibold text-break">
                        {profile.email || "Not added"}
                      </div>
                    </div>

                  </div>


                  <div className="info-box d-flex gap-3">

                    <div className="info-icon">
                      📱
                    </div>

                    <div>
                      <small className="text-muted">
                        Phone
                      </small>

                      <div className="fw-semibold">
                        {profile.phone || "Not added"}
                      </div>
                    </div>

                  </div>


                  <div className="info-box d-flex gap-3">

                    <div className="info-icon">
                      📍
                    </div>

                    <div>
                      <small className="text-muted">
                        Location
                      </small>

                      <div className="fw-semibold">
                        {profile.location || "Not added"}
                      </div>
                    </div>

                  </div>

                </div>


                {/* QUICK LINKS */}

                <div className="mt-4 text-start">

                  <h6 className="fw-bold mb-3">
                    Quick Links
                  </h6>

                  <Link
                    to="/resume"
                    className="btn btn-outline-primary w-100 mb-2"
                  >
                    📄 My Resume
                  </Link>

                  <Link
                    to="/applications"
                    className="btn btn-outline-primary w-100 mb-2"
                  >
                    📋 My Applications
                  </Link>

                  <Link
                    to="/jobs"
                    className="btn btn-outline-primary w-100"
                  >
                    🔎 Find Jobs
                  </Link>

                </div>

              </div>

            </div>


            {/* ================= RIGHT SIDE ================= */}

            <div className="col-lg-8">

              <div className="p-4 p-md-5">

                <div className="d-flex justify-content-between align-items-center mb-4">

                  <div>

                    <h3 className="section-title mb-0">
                      Personal Information
                    </h3>

                  </div>

                  {!isEditing && (

                    <button
                      className="btn btn-primary action-btn"
                      onClick={() =>
                        setIsEditing(true)
                      }
                    >
                      ✏️ Edit
                    </button>

                  )}

                </div>


                <form onSubmit={handleSave}>

                  <div className="row g-4">


                    {/* NAME */}

                    <div className="col-md-6">

                      <label className="form-label fw-semibold">
                        Full Name *
                      </label>

                      <input
                        type="text"
                        name="name"
                        className="form-control"
                        value={profile.name}
                        onChange={handleChange}
                        disabled={!isEditing}
                        placeholder="Enter your name"
                      />

                    </div>


                    {/* EMAIL */}

                    <div className="col-md-6">

                      <label className="form-label fw-semibold">
                        Email *
                      </label>

                      <input
                        type="email"
                        name="email"
                        className="form-control"
                        value={profile.email}
                        onChange={handleChange}
                        disabled={!isEditing}
                        placeholder="Enter your email"
                      />

                    </div>


                    {/* PHONE */}

                    <div className="col-md-6">

                      <label className="form-label fw-semibold">
                        Phone Number
                      </label>

                      <input
                        type="tel"
                        name="phone"
                        className="form-control"
                        value={profile.phone}
                        onChange={handleChange}
                        disabled={!isEditing}
                        placeholder="Enter phone number"
                      />

                    </div>


                    {/* LOCATION */}

                    <div className="col-md-6">

                      <label className="form-label fw-semibold">
                        Location
                      </label>

                      <input
                        type="text"
                        name="location"
                        className="form-control"
                        value={profile.location}
                        onChange={handleChange}
                        disabled={!isEditing}
                        placeholder="Chandigarh, India"
                      />

                    </div>


                    {/* EDUCATION */}

                    <div className="col-12 mt-5">

                      <h3 className="section-title">
                        🎓 Education
                      </h3>

                      <input
                        type="text"
                        name="education"
                        className="form-control"
                        value={profile.education}
                        onChange={handleChange}
                        disabled={!isEditing}
                        placeholder="e.g. MCA - Chandigarh University"
                      />

                    </div>


                    {/* EXPERIENCE */}

                    <div className="col-12 mt-4">

                      <h3 className="section-title">
                        💼 Experience
                      </h3>

                      <textarea
                        name="experience"
                        rows="5"
                        className="form-control"
                        value={profile.experience}
                        onChange={handleChange}
                        disabled={!isEditing}
                        placeholder="Describe your internship, job experience, responsibilities..."
                      />

                    </div>


                    {/* SKILLS */}

                    <div className="col-12 mt-4">

                      <h3 className="section-title">
                        🛠 Skills
                      </h3>

                      <input
                        type="text"
                        name="skills"
                        className="form-control"
                        value={profile.skills}
                        onChange={handleChange}
                        disabled={!isEditing}
                        placeholder="React, JavaScript, Node.js, MongoDB"
                      />

                      <small className="text-muted">
                        Separate skills with commas.
                      </small>


                      {skillsArray.length > 0 && (

                        <div className="mt-3">

                          {skillsArray.map(
                            (skill, index) => (

                              <span
                                key={index}
                                className="skill-badge"
                              >
                                ✓ {skill}
                              </span>

                            )
                          )}

                        </div>

                      )}

                    </div>


                    {/* ABOUT */}

                    <div className="col-12 mt-4">

                      <h3 className="section-title">
                        📝 About Me
                      </h3>

                      <textarea
                        name="about"
                        rows="5"
                        className="form-control"
                        value={profile.about}
                        onChange={handleChange}
                        disabled={!isEditing}
                        placeholder="Write a professional summary about yourself..."
                      />

                    </div>

                  </div>


                  {/* BUTTONS */}

                  {isEditing && (

                    <div className="d-flex flex-wrap gap-3 mt-5">

                      <button
                        type="submit"
                        className="btn btn-primary action-btn"
                      >
                        💾 Save Profile
                      </button>

                      <button
                        type="button"
                        className="btn btn-outline-secondary action-btn"
                        onClick={() => {

                          const saved =
                            localStorage.getItem(
                              "profile"
                            );

                          if (saved) {
                            setProfile(
                              JSON.parse(saved)
                            );
                          }

                          setIsEditing(false);

                        }}
                      >
                        Cancel
                      </button>

                    </div>

                  )}

                </form>

              </div>

            </div>

          </div>

        </div>


        {/* ================= PROFILE STATS ================= */}

        <div className="row g-3 mt-4">

          <div className="col-md-4">

            <div className="stat-card">

              <div className="stat-number">
                {skillsArray.length}
              </div>

              <div className="text-muted">
                Skills Added
              </div>

            </div>

          </div>


          <div className="col-md-4">

            <div className="stat-card">

              <div className="stat-number">
                {profile.education ? "✓" : "—"}
              </div>

              <div className="text-muted">
                Education
              </div>

            </div>

          </div>


          <div className="col-md-4">

            <div className="stat-card">

              <div className="stat-number">
                {profile.about ? "✓" : "—"}
              </div>

              <div className="text-muted">
                About Completed
              </div>

            </div>

          </div>

        </div>


        {/* ================= PREVIEW ================= */}

        <div className="card preview-card mt-4 overflow-hidden">

          <div className="preview-header">

            <h3 className="fw-bold mb-1">
              👀 Profile Preview
            </h3>

            <p className="mb-0 opacity-75">
              This is how your profile information looks
              to you.
            </p>

          </div>


          <div className="card-body p-4 p-md-5">

            <div className="row align-items-center">

              <div className="col-md-3 text-center">

                {profile.photo ? (

                  <img
                    src={profile.photo}
                    alt="Profile"
                    className="preview-avatar"
                  />

                ) : (

                  <div className="preview-placeholder mx-auto">
                    👤
                  </div>

                )}

              </div>


              <div className="col-md-9 mt-4 mt-md-0">

                <h2 className="fw-bold">
                  {profile.name || "Your Name"}
                </h2>

                <p className="text-muted">
                  {profile.email || "your@email.com"}
                </p>


                <div className="d-flex flex-wrap gap-2 mb-3">

                  {profile.location && (
                    <span className="badge bg-light text-dark border p-2">
                      📍 {profile.location}
                    </span>
                  )}

                  {profile.education && (
                    <span className="badge bg-light text-dark border p-2">
                      🎓 {profile.education}
                    </span>
                  )}

                </div>


                {skillsArray.length > 0 && (

                  <div className="mb-3">

                    {skillsArray.map(
                      (skill, index) => (

                        <span
                          key={index}
                          className="skill-badge"
                        >
                          {skill}
                        </span>

                      )
                    )}

                  </div>

                )}


                {profile.about && (

                  <p className="text-muted mb-0">
                    {profile.about}
                  </p>

                )}

              </div>

            </div>

          </div>

        </div>


        {/* ================= RESUME CTA ================= */}

        <div
          className="card border-0 mt-4"
          style={{
            borderRadius: "20px",
            background:
              "linear-gradient(135deg,#6610f2,#0d6efd)",
          }}
        >

          <div className="card-body text-white p-4 p-md-5">

            <div className="row align-items-center">

              <div className="col-md-8">

                <h3 className="fw-bold">
                  📄 Complete Your Resume
                </h3>

                <p className="mb-md-0 opacity-75">
                  Upload your PDF resume and make your
                  profile ready for recruiters.
                </p>

              </div>

              <div className="col-md-4 text-md-end mt-3 mt-md-0">

                <Link
                  to="/resume"
                  className="btn btn-light btn-lg"
                >
                  Manage Resume →
                </Link>

              </div>

            </div>

          </div>

        </div>

      </main>


      {/* ================= FOOTER ================= */}

      <footer className="footer text-white py-4">

        <div className="container">

          <div className="row align-items-center">

            <div className="col-md-6">

              <h5 className="fw-bold">
                💼 JobPortal
              </h5>

              <small className="text-secondary">
                Find jobs. Build your career. Get hired.
              </small>

            </div>


            <div className="col-md-6 text-md-end mt-3 mt-md-0">

              <Link
                to="/"
                className="text-secondary text-decoration-none me-3"
              >
                Home
              </Link>

              <Link
                to="/jobs"
                className="text-secondary text-decoration-none me-3"
              >
                Jobs
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

          <div className="text-center">

            <small className="text-secondary">
              © 2026 JobPortal. All Rights Reserved.
            </small>

          </div>

        </div>

      </footer>

    </div>
  );
}

export default Profile;