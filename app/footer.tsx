import React, { useState } from "react";
import { Link } from "@remix-run/react";
import home from "home.svg";
import jobPosts from "jobPosts.svg";
import map from "map.svg";
import notes from "notes.svg";
import jobNotes from "jobNotes.svg";
import { useLocation } from "react-router-dom";

const AppFooter: React.FC = () => {
  const footerStyles: React.CSSProperties = {
    color: "#fff",
    height: "4rem", // Adjust this value based on the desired footer height
    position: "sticky",
    bottom: 0,
  };

  const [isHovered, setIsHovered] = useState(false);
  const [dashboardIsHovered, setDashboardIsHovered] = useState(false);
  const [jobPostsIsHovered, setJobPostsIsHovered] = useState(false);
  const [mapIsHovered, setMapIsHovered] = useState(false);
  const [notesIsHovered, setNotesIsHovered] = useState(false);
  const [jobNotesIsHovered, setJobNotesIsHovered] = useState(false);

  const handleDashboardIconHover = (hover: boolean) => {
    setDashboardIsHovered(hover);
  };

  const handlejobPostsIconHover = (hover: boolean) => {
    setJobPostsIsHovered(hover);
  };

  const handleMapIconHover = (hover: boolean) => {
    setMapIsHovered(hover);
  };

  const handleNotesIconHover = (hover: boolean) => {
    setNotesIsHovered(hover);
  };
  const handlejobNotesIconHover = (hover: boolean) => {
    setJobNotesIsHovered(hover);
  };

  const location = useLocation();
  const currentYear = new Date().getFullYear();

  const isLoginOrJoinPage = location.pathname === '/login' || location.pathname === '/join';

  if (isLoginOrJoinPage) {
    return null; // Return null to hide the footer on the login and join pages
  }



  return (
    
      <footer
        style={footerStyles}
        className='bg-teal-400 py-4 text-white'
      >
        <nav className="mx-auto flex max-w-4xl justify-between">
          <Link
            to="/posts/user"
            className="relative flex  w-12 flex-col items-center px-4 text-gray-300 hover:text-white "
            onMouseEnter={() => handleDashboardIconHover(true)}
            onMouseLeave={() => handleDashboardIconHover(false)}
          >
            <img
              src={home}
              alt="home icon"
              className={`mb-1 h-4 w-4 ${
                isHovered ? "-translate-y-2 transform" : " "
              }`}
              style={{ transition: "transform 0.4s ease-in-out" }}
            />
            <span
              className={`text-xs ${dashboardIsHovered ? "block" : "hidden"} `}
            >
              Dashboard
            </span>
          </Link>
          <Link
            to="/posts"
            className="relative flex  w-12 flex-col items-center px-4 text-gray-300 hover:text-white"
            onMouseEnter={() => handlejobPostsIconHover(true)}
            onMouseLeave={() => handlejobPostsIconHover(false)}
          >
            <img
              src={jobPosts}
              alt="job posts icon"
              className={`mb-1 h-4 w-4 ${
                isHovered ? "-translate-y-2 transform" : " "
              }`}
              style={{ transition: "transform 0.4s ease-in-out" }}
            />
            <span
              className={`text-xs ${jobPostsIsHovered ? "block " : "hidden"} `}
            >
              Job Posts
            </span>
          </Link>
          <Link
            to="/map"
            className="relative flex   w-12 flex-col items-center px-4 text-gray-300 hover:text-white"
            onMouseEnter={() => handleMapIconHover(true)}
            onMouseLeave={() => handleMapIconHover(false)}
          >
            <img
              src={map}
              alt="map icon"
              className={`mb-1 h-4 w-4 ${
                isHovered ? "-translate-y-2 transform" : " "
              }`}
              style={{ transition: "transform 0.4s ease-in-out" }}
            />
            <span className={`text-xs ${mapIsHovered ? "block " : "hidden"} `}>
              {" "}
              Map Journey
            </span>
          </Link>
          <Link
            to="/notes"
            className=" relative flex  w-12 flex-col items-center px-4 text-gray-300 hover:text-white"
            onMouseEnter={() => handleNotesIconHover(true)}
            onMouseLeave={() => handleNotesIconHover(false)}
          >
            <img
              src={notes}
              alt="notes icon"
              className={`mb-1 h-4 w-4 ${
                isHovered ? "-translate-y-2 transform" : " "
              }`}
            />
            <span className={`text-xs ${notesIsHovered ? "block" : "hidden"} `}>
              Notes
            </span>
          </Link>
          <Link
            to="/jobappnotes"
            className="relative flex  w-12 flex-col items-center px-4 text-gray-300 hover:text-white"
            onMouseEnter={() => handlejobNotesIconHover(true)}
            onMouseLeave={() => handlejobNotesIconHover(false)}
          >
            <img
              src={jobNotes}
              alt=" job notes icon"
              className={`mb-1 h-4 w-4 ${
                isHovered ? "-translate-y-2 transform" : " "
              }`}
              style={{ transition: "transform 0.4s ease-in-out" }}
            />
            <span
              className={`text-xs ${jobNotesIsHovered ? "block " : "hidden"} `}
            >
              Job Notes
            </span>
          </Link>
        </nav>
        <div className='bg-teal-400 py-4 text-white mt-4'>
        <p className=" relative flex  w-12 flex-col items-center px-4 text-gray-300 hover:text-white">
          &copy; {currentYear} Nathan Walker Productions. 
        </p>
        <p className="relative flex  w-12 flex-col items-center px-4 text-gray-300 hover:text-white">All rights reserved.</p>
      </div>
    
     </footer>
    
  );
};

export default AppFooter;
