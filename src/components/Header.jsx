import React from "react";

function Header() {
  return (
    <div className="container-fluid p-3 ">
      <div className="container header">
        <div className="row">
          <div className="col-lg-4 ">
            <span className="name fs-2">
              <Link to={"/"} className="name fs-2">
                TUFAN.
              </Link>
            </span>
          </div>

          <div className="col-lg-5 ">
            <div className="row ">
              <div className="col-sm">
                <Link to={"/"} className="links">
                  Home
                </Link>
              </div>
              <div className="col-sm">
                <Link to={"/skills"} className="links">
                  Skills
                </Link>
              </div>
              <div className="col-sm">
                <Link to={"/projects"} className="links">
                  Projects
                </Link>
              </div>
              <div className="col-sm">
                <Link to={"/resume"} className="links">
                  Resume
                </Link>
              </div>
              <div className="col-sm">
                <Link to={"/linkedin"} className="links">
                  LinkedIn
                </Link>
              </div>
              <div className="col-sm">
                <Link to={"/contact"} className="links">
                  Contact
                </Link>
              </div>
            </div>
          </div>

          <div className="col-lg-3 text-end ">
            <Link to={"/contact"}>
              <button className="talk"> Let’s Talk</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
