import { useState, useEffect } from "react";

function Resume() {

  const [selectedFile, setSelectedFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    return () => {
      if (previewUrl) {
        URL.revokeObjectURL(previewUrl);
      }
    };
  }, [previewUrl]);

  const handleFileChange = (event) => {

    const file = event.target.files[0];

    if (!file) {
      return;
    }

    // Check PDF
    if (file.type !== "application/pdf") {
      alert("❌ Please select a PDF file only.");
      event.target.value = "";
      return;
    }

    // Check 5 MB
    if (file.size > 5 * 1024 * 1024) {
      alert("❌ Resume must be less than 5 MB.");
      event.target.value = "";
      return;
    }

    // Remove old preview
    if (previewUrl) {
      URL.revokeObjectURL(previewUrl);
    }

    const url = URL.createObjectURL(file);

    setSelectedFile(file);
    setPreviewUrl(url);
    setSubmitted(false);
  };
  const handleSubmit = (event) => {
  event.preventDefault();

  if (!selectedFile) {
    alert("❌ Please select your resume first.");
    return;
  }

  const resumeInfo = {
    name: selectedFile.name,
    size: selectedFile.size,
    uploadedDate: new Date().toLocaleDateString()
  };

  localStorage.setItem(
    "resumeInfo",
    JSON.stringify(resumeInfo)
  );

  setSubmitted(true);

  alert("✅ Resume submitted successfully!");
};

  

  const handleRemove = () => {

    if (previewUrl) {
      URL.revokeObjectURL(previewUrl);
    }

    setSelectedFile(null);
    setPreviewUrl(null);
    setSubmitted(false);
  };

  return (
    <div className="container py-5">

      {/* PAGE TITLE */}

      <div className="text-center mb-5">

        <h1 className="fw-bold">
          📄 My Resume
        </h1>

        <p className="text-muted">
          Upload, preview and download your resume
        </p>

      </div>


      <div className="row g-4">


        {/* LEFT SIDE */}

        <div className="col-lg-5">

          <div className="card shadow border-0">

            <div className="card-body p-4">

              <h3 className="mb-4">
                📤 Upload Resume
              </h3>


              <form onSubmit={handleSubmit}>

                <label className="form-label fw-bold">
                  Select Resume PDF
                </label>

                <input
                  type="file"
                  className="form-control"
                  accept=".pdf,application/pdf"
                  onChange={handleFileChange}
                />

                <div className="form-text mb-4">
                  PDF only • Maximum size 5 MB
                </div>


                {/* FILE INFORMATION */}

                {selectedFile && (

                  <div className="alert alert-info">

                    <strong>
                      Selected File
                    </strong>

                    <hr />

                    <div>
                      📄 {selectedFile.name}
                    </div>

                    <div>
                      Size:{" "}
                      {(selectedFile.size / 1024 / 1024).toFixed(2)}
                      {" "}MB
                    </div>

                  </div>

                )}


                {/* SUBMIT BUTTON */}

                <button
                  type="submit"
                  className="btn btn-primary btn-lg w-100"
                >
                  ✅ Submit Resume
                </button>

              </form>


              {/* SUCCESS */}

              {submitted && (

                <div className="alert alert-success mt-4">

                  <h5>
                    ✅ Resume Submitted
                  </h5>

                  <p className="mb-0">
                    Your resume is ready to view and download.
                  </p>

                </div>

              )}

            </div>

          </div>


          {/* REMOVE BUTTON */}

          {selectedFile && (

            <button
              className="btn btn-outline-danger w-100 mt-3"
              onClick={handleRemove}
            >
              🗑 Remove Resume
            </button>

          )}

        </div>


        {/* RIGHT SIDE */}

        <div className="col-lg-7">

          <div className="card shadow border-0">

            <div className="card-body p-4">

              <h3 className="mb-4">
                👀 Resume Preview
              </h3>


              {/* PDF PREVIEW */}

              {previewUrl ? (

                <div>

                  <iframe
                    src={previewUrl}
                    title="Resume Preview"
                    width="100%"
                    height="600px"
                    style={{
                      border: "1px solid #ddd",
                      borderRadius: "10px"
                    }}
                  />

                  {/* DOWNLOAD */}

                  <a
                    href={previewUrl}
                    download={
                      selectedFile
                        ? selectedFile.name
                        : "resume.pdf"
                    }
                    className="btn btn-success btn-lg w-100 mt-3"
                  >
                    ⬇️ Download Resume
                  </a>

                </div>

              ) : (

                /* EMPTY PREVIEW */

                <div
                  className="bg-light d-flex justify-content-center align-items-center text-center"
                  style={{
                    height: "600px",
                    borderRadius: "10px"
                  }}
                >

                  <div>

                    <div
                      style={{
                        fontSize: "80px"
                      }}
                    >
                      📄
                    </div>

                    <h4>
                      No Resume Selected
                    </h4>

                    <p className="text-muted">
                      Select your PDF resume from the
                      left side to preview it here.
                    </p>

                  </div>

                </div>

              )}

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Resume;