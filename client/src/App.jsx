import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import Resume from "./pages/Resume";
import Jobs from "./pages/Jobs";
import JobDetails from "./pages/JobDetails";
import Applications from "./pages/Applications";
import PostJob from "./pages/PostJob";
import ManageJobs from "./pages/ManageJobs";

function App() {
  return (
    <BrowserRouter>

      <Routes>

        <Route path="/" element={<Home />} />

        <Route
          path="/login"
          element={<Login />}
        />

        <Route
          path="/register"
          element={<Register />}
        />

        <Route
          path="/dashboard"
          element={<Dashboard />}
        />

        <Route
          path="/profile"
          element={<Profile />}
        />

        <Route
          path="/resume"
          element={<Resume />}
        />

        <Route
          path="/jobs"
          element={<Jobs />}
        />

        <Route
          path="/jobs/:id"
          element={<JobDetails />}
        />

        <Route
          path="/applications"
          element={<Applications />}
        />

        <Route
          path="/post-job"
          element={<PostJob />}
        />

        <Route
          path="/manage-jobs"
          element={<ManageJobs />}
        />

      </Routes>

    </BrowserRouter>
  );
}

export default App;