// import "dotenv/config";
import "bootstrap/dist/css/bootstrap.css";
// Put any other imports below so that CSS from your
// components takes precedence over default styles.

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Resume from "./pages/Resume";
import UpdateSkill from "./pages/UpdateSkill";
import Messages from "./pages/Messages";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/project" element={<Projects />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/updateSkill" element={<UpdateSkill />} />
        <Route path="/message" element={<Messages />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
