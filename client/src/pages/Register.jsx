import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] =
    useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const {
      name,
      email,
      phone,
      password,
      confirmPassword,
    } = formData;

    // Validation
    if (!name || !email || !phone || !password || !confirmPassword) {
      alert("❌ Please fill all fields.");
      return;
    }

    if (password.length < 6) {
      alert("❌ Password must contain at least 6 characters.");
      return;
    }

    if (password !== confirmPassword) {
      alert("❌ Passwords do not match.");
      return;
    }

    // Get existing users
    const users =
      JSON.parse(localStorage.getItem("users")) || [];

    // Check duplicate email
    const existingUser = users.find(
      (user) =>
        user.email.toLowerCase() === email.toLowerCase()
    );

    if (existingUser) {
      alert("❌ An account with this email already exists.");
      return;
    }

    // Create user
    const newUser = {
      id: Date.now(),
      name,
      email,
      phone,
      password,
    };

    // Save user
    users.push(newUser);

    localStorage.setItem(
      "users",
      JSON.stringify(users)
    );

    // Save basic profile
    const profile = {
      name,
      email,
      phone,
      location: "",
      education: "",
      skills: "",
      experience: "",
      about: "",
      photo: "",
    };

    localStorage.setItem(
      "profile",
      JSON.stringify(profile)
    );

    alert("✅ Registration successful!");

    navigate("/login");
  };

  return (
    <div className="min-vh-100 bg-light">

      {/* NAVBAR */}

      <nav className="navbar navbar-dark bg-primary">

        <div className="container">

          <Link
            to="/"
            className="navbar-brand fw-bold"
          >
            💼 JobPortal
          </Link>

          <Link
            to="/"
            className="btn btn-outline-light"
          >
            Home
          </Link>

        </div>

      </nav>


      {/* REGISTER */}

      <div className="container py-5">

        <div className="row justify-content-center">

          <div className="col-lg-7 col-md-9">

            <div className="card shadow border-0">

              <div className="card-body p-4 p-md-5">

                <div className="text-center mb-4">

                  <div
                    style={{
                      fontSize: "60px",
                    }}
                  >
                    👤
                  </div>

                  <h2 className="fw-bold">
                    Create Your Account
                  </h2>

                  <p className="text-muted">
                    Join JobPortal and find your dream job.
                  </p>

                </div>


                <form onSubmit={handleSubmit}>

                  {/* NAME */}

                  <div className="mb-3">

                    <label className="form-label fw-semibold">
                      Full Name
                    </label>

                    <input
                      type="text"
                      className="form-control"
                      name="name"
                      placeholder="Enter your full name"
                      value={formData.name}
                      onChange={handleChange}
                    />

                  </div>


                  {/* EMAIL */}

                  <div className="mb-3">

                    <label className="form-label fw-semibold">
                      Email Address
                    </label>

                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      placeholder="Enter your email"
                      value={formData.email}
                      onChange={handleChange}
                    />

                  </div>


                  {/* PHONE */}

                  <div className="mb-3">

                    <label className="form-label fw-semibold">
                      Phone Number
                    </label>

                    <input
                      type="tel"
                      className="form-control"
                      name="phone"
                      placeholder="Enter phone number"
                      value={formData.phone}
                      onChange={handleChange}
                    />

                  </div>


                  {/* PASSWORD */}

                  <div className="mb-3">

                    <label className="form-label fw-semibold">
                      Password
                    </label>

                    <div className="input-group">

                      <input
                        type={
                          showPassword
                            ? "text"
                            : "password"
                        }
                        className="form-control"
                        name="password"
                        placeholder="Minimum 6 characters"
                        value={formData.password}
                        onChange={handleChange}
                      />

                      <button
                        type="button"
                        className="btn btn-outline-secondary"
                        onClick={() =>
                          setShowPassword(!showPassword)
                        }
                      >
                        {showPassword
                          ? "Hide"
                          : "Show"}
                      </button>

                    </div>

                  </div>


                  {/* CONFIRM PASSWORD */}

                  <div className="mb-4">

                    <label className="form-label fw-semibold">
                      Confirm Password
                    </label>

                    <div className="input-group">

                      <input
                        type={
                          showConfirmPassword
                            ? "text"
                            : "password"
                        }
                        className="form-control"
                        name="confirmPassword"
                        placeholder="Re-enter password"
                        value={
                          formData.confirmPassword
                        }
                        onChange={handleChange}
                      />

                      <button
                        type="button"
                        className="btn btn-outline-secondary"
                        onClick={() =>
                          setShowConfirmPassword(
                            !showConfirmPassword
                          )
                        }
                      >
                        {showConfirmPassword
                          ? "Hide"
                          : "Show"}
                      </button>

                    </div>

                  </div>


                  {/* SUBMIT */}

                  <button
                    type="submit"
                    className="btn btn-primary btn-lg w-100"
                  >
                    🚀 Create Account
                  </button>

                </form>


                {/* LOGIN LINK */}

                <div className="text-center mt-4">

                  <p className="mb-0">
                    Already have an account?
                  </p>

                  <Link
                    to="/login"
                    className="fw-bold text-decoration-none"
                  >
                    Login here
                  </Link>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Register;