import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

function UpdateSkill() {
  const location = useLocation();
  const [skill, setSkill] = useState(location.state);

  useEffect(() => {
    if (location.state) setSkill(location.state);
  }, [location.state]);

  //   setSkill(data.lable);
  //   console.log(data);
  return (
    <div className="container-fluid">
      <div className="container">
        <div className="row">
          <div className="col-12">Update the Skill</div>
          <div className="col-lg-4">
            <p>Enter name of the Skill</p>
            <input
              type="text"
              className="skills-input"
              //   defaultVa/lue={""}
              value={skill.lable}
              name="skillName"
              required
            />
            {skill.lable}
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
      </div>
    </div>
  );
}

export default UpdateSkill;
