import React from "react";
import "./nav.css";
import {
  AiOutlineFilePdf,
  AiOutlineFundProjectionScreen,
  AiOutlineHome,
  AiOutlineUser,
} from "react-icons/ai";
import { BiBook, BiMessageSquareDetail } from "react-icons/bi";
// import cv from "../../Assets/cv.pdf";
import { useState } from "react";
import { Box, Link } from "@chakra-ui/react";
export const Nav = () => {
  const [activeNav, setActiveNav] = useState("#");
  return (
    <Box>
      <nav>
        <Link
          id="link"
          href="#"
          onClick={() => setActiveNav("#")}
          className={activeNav === "#" ? "active" : ""}
        >
            <div style={{textAlign:"center"}}>
          <AiOutlineHome /><br />
          {/* Home */}
          </div>
        </Link>
        <Link
          id="link"
          href="#banner"
          onClick={() => setActiveNav("#banner")}
          className={activeNav === "#banner" ? "active" : ""}
        >
            <div style={{textAlign:"center"}}>
          <AiOutlineUser /><br />
          {/* About */}
          </div>
        </Link>
        <Link
          id="link"
          href="#skills"
          onClick={() => setActiveNav("#skill")}
          className={activeNav === "#skill" ? "active" : ""}
        >
            <div style={{textAlign:"center"}}>
          <BiBook /><br />
          {/* Skills */}
          </div>
        </Link>
        <Link
          id="link"
          href="#projects"
          onClick={() => setActiveNav("#project")}
          className={activeNav === "#project" ? "active" : ""}
        >
            <div style={{textAlign:"center"}}>
          <AiOutlineFundProjectionScreen /><br />
          {/* Projects */}
          </div>
        </Link>
        <Link
          id="link"
          href="#contact"
          onClick={() => setActiveNav("#contact")}
          className={activeNav === "#contact" ? "active" : ""}
        >
            {/* <div style={{textAlign:"center"}}> */}
          <BiMessageSquareDetail /><br />
          {/* Contact */}
          {/* </div> */}
        </Link>
        <Link
          id="link"
          href="https://drive.google.com/file/d/1cBdCxa0VSWFCFBgX80jegqT5tG0KOqjw/view"
          download
          target="_blank"
          onClick={() => setActiveNav("#resume")}
          className={activeNav === "#resume" ? "active" : ""}
        >
            {/* <div style={{textAlign:"center"}}> */}
          <AiOutlineFilePdf /><br />
          {/* Resume */}
          {/* </div> */}
        </Link>
      </nav>
    </Box>
  );
};