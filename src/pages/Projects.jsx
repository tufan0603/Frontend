import "../css/project.css";
import BACKEND from "../../constrance.js";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import { UploadCloud } from "lucide-react";

function Projects() {
  const [fileName, setFileName] = useState("");
  const navigate = useNavigate();
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFileName(file.name);
    }
  };

  const submitHandeler = async (e) => {
    e.preventDefault();
    const title = e.target.title.value;
    const github = e.target.github.value;
    const smallDescription = e.target.smallDescription.value;
    const bigDescription = e.target.bigDescription.value;
    try {
      const response = await axios
        .post(`${BACKEND}/project`, {
          title,
          github,
          smallDescription,
          bigDescription,
        })
        .then((res) => {
          if (res.data.message === "Data saved successfully") navigate("/");
        });
    } catch (error) {
      console.error("Error posting data:", error);
    }
  };

  return (
    <div className="container-fluid projects-container-f ">
      <div className="container">
        <form className="row" onSubmit={submitHandeler} method="post">
          <div className="col-12">
            <h1 className="add-projects">Add Projects</h1>
          </div>
          <div className=" col-12 file d-flex flex-column">
            <label
              htmlFor="file-upload"
              className="cursor-pointer d-flex flex-column align-items-center justify-content-center"
            >
              <UploadCloud size={48} className="text-primary" />
              <span className="mt-2 text">
                {fileName || "Click to upload or drag and drop a image"}
              </span>
              <input
                id="file-upload"
                type="file"
                className="d-none"
                onChange={handleFileChange}
              />
            </label>
          </div>

          <div className="col-lg-6 project-input">
            <label htmlFor="title" className="label">
              Project Name
            </label>
            <input type="text" name="title" placeholder="Name" />
          </div>
          <div className="col-lg-6 project-input">
            <label htmlFor="github" className="label">
              Github Link
            </label>
            <input type="text" name="github" placeholder="Link" />
          </div>
          <div className="col-12 project-input">
            <label htmlFor="smallDescription" className="label">
              Giva a short overview of the Project
            </label>
            <textarea
              type="text"
              rows="3"
              cols="50"
              contact
              name="smallDescription"
              id="smallDescription"
              placeholder="overview"
              className="project-input"
              style={{ height: "100px" }}
            />
            {/* <input type="text" name="smallDescription" /> */}
          </div>
          <div className="col-12 project-input">
            <label htmlFor="bigDescription" className="label">
              Give a brief description.
            </label>
            <textarea
              type="text"
              rows="5"
              cols="50"
              contact
              name="bigDescription"
              id="bigDescription"
              placeholder="description"
              className="project-input"
              style={{ height: "150px" }}
            />
          </div>

          <div className="col-lg-12 addSkillBtnCol">
            <button type="submit" className="addProjectBtn">
              Add Project
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Projects;
