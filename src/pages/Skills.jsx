import React from "react";
import { useState, useEffect, useNavigate } from "react";
import "../css/skills.css";
import axios from "axios";
import BACKEND from "../../constrance";

import ProgressBar from "./ProgressBar";

function Skills() {
  const navigate = useNavigate();
  const submitHandeler = async (e) => {
    e.preventDefault();
    const skillName = e.target.skillName.value;
    const strength = e.target.strength.value;
    const experience = e.target.experience.value;

    try {
      const response = await axios
        .post(`${BACKEND}/skill`, {
          skillName,
          strength,
          experience,
        })
        .then((res) => {
          if (res.data.message === "Data saved successfully");
          navigate("/");
        });
    } catch (error) {
      console.error("Error posting data:", error);
    }
  };

  const [skills, setSkills] = useState([]);

  useEffect(() => {
    axios
      .get(`${BACKEND}/skill`) // Replace with your API URL
      .then((res) => {
        setSkills(res.data);
      })
      .catch((error) => {
        console.error("Error fetching skills:", error);
      });
  }, []);

  return (
    <div className="container-fluid skill-con-fluid">
      <form className="container add-skill-con" onSubmit={submitHandeler}>
        <div className="row">
          <div className="col-12">
            <h3 className="skill-header">Add a new Skill</h3>
          </div>
          <div className="col-lg-4">
            <p>Enter name of the Skill</p>
            <input
              type="text"
              className="skills-input"
              placeholder="Name of the skill"
              name="skillName"
              required
            />
          </div>
          <div className="col-lg-3">
            <p>Enter strength of the Skill (10-100)</p>
            <input
              type="number"
              name="strength"
              id=""
              className="skills-input"
              placeholder="Strength"
              required
            />
          </div>
          <div className="col-lg-3">
            <p>Enter experience of the Skill (Yr.)</p>
            <input
              type="number"
              className="skills-input"
              placeholder="Experience"
              name="experience"
              required
            />
          </div>
          <div className="col-lg-2">
            <button type="submit" className="addSkillBtn">
              Add Skill
            </button>
          </div>
        </div>
      </form>

      <div className="container all-skill-con">
        <div className="row">
          <div className="col-12">
            <h3 className="allSkill">All Skills</h3>
          </div>
          {skills.map((skill) => (
            <div className="col-12" key={skill._id}>
              <ProgressBar
                percentage={skill.strength}
                label={skill.skillName}
                experience={skill.experience}
                id={skill._id}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;
