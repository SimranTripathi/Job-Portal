import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const { email, password } = formData;

    if (!email || !password) {
      alert("❌ Please enter email and password.");
      return;
    }

    // Get registered users
    const users =
      JSON.parse(localStorage.getItem("users")) || [];

    // Find user
    const user = users.find(
      (item) =>
        item.email.toLowerCase() ===
          email.toLowerCase() &&
        item.password === password
    );

    if (!user) {
      alert("❌ Invalid email or password.");
      return;
    }

    // Save logged-in user
    const loggedInUser = {
      id: user.id,
      name: user.name,
      email: user.email,
      phone: user.phone,
    };

    localStorage.setItem(
      "currentUser",
      JSON.stringify(loggedInUser)
    );

    alert("✅ Login successful!");

    navigate("/dashboard");
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


      {/* LOGIN */}

      <div className="container py-5">

        <div className="row justify-content-center">

          <div className="col-md-6 col-lg-5">

            <div className="card shadow border-0">

              <div className="card-body p-4 p-md-5">

                <div className="text-center mb-4">

                  <div
                    style={{
                      fontSize: "60px",
                    }}
                  >
                    🔐
                  </div>

                  <h2 className="fw-bold">
                    Welcome Back
                  </h2>

                  <p className="text-muted">
                    Login to continue to JobPortal.
                  </p>

                </div>


                <form onSubmit={handleSubmit}>

                  {/* EMAIL */}

                  <div className="mb-3">

                    <label className="form-label fw-semibold">
                      Email Address
                    </label>

                    <input
                      type="email"
                      className="form-control form-control-lg"
                      name="email"
                      placeholder="Enter your email"
                      value={formData.email}
                      onChange={handleChange}
                    />

                  </div>


                  {/* PASSWORD */}

                  <div className="mb-4">

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
                        className="form-control form-control-lg"
                        name="password"
                        placeholder="Enter your password"
                        value={formData.password}
                        onChange={handleChange}
                      />

                      <button
                        type="button"
                        className="btn btn-outline-secondary"
                        onClick={() =>
                          setShowPassword(
                            !showPassword
                          )
                        }
                      >
                        {showPassword
                          ? "Hide"
                          : "Show"}
                      </button>

                    </div>

                  </div>


                  {/* LOGIN BUTTON */}

                  <button
                    type="submit"
                    className="btn btn-primary btn-lg w-100"
                  >
                    🔐 Login
                  </button>

                </form>


                {/* REGISTER */}

                <div className="text-center mt-4">

                  <p className="mb-0">
                    Don't have an account?
                  </p>

                  <Link
                    to="/register"
                    className="fw-bold text-decoration-none"
                  >
                    Create an account
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

export default Login;