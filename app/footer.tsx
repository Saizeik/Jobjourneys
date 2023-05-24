import React, {useState}from 'react';
import { Link,  } from "@remix-run/react";
import home from "home.svg"
import jobPosts from "jobPosts.svg"
import map from "map.svg"
import notes from "notes.svg"
import jobNotes from "jobNotes.svg"




const AppFooter: React.FC = () => {

  const footerStyles: React.CSSProperties = {
    
    color: '#fff',
    height: '4rem', // Adjust this value based on the desired footer height
    position: 'sticky',
    bottom: 0,
  };


  const [isHovered, setIsHovered] = useState(false);
  const [dashboardIsHovered, setDashboardIsHovered] = useState(false);
  const [jobPostsIsHovered, setJobPostsIsHovered] = useState(false);
  const [mapIsHovered , setMapIsHovered ] = useState(false);
  const [notesIsHovered, setNotesIsHovered] = useState(false);
  const [jobNotesIsHovered ,setJobNotesIsHovered ] = useState(false);

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

  
    return (
      <footer style={footerStyles} className =" bg-teal-400 text-white py-4 md:hidden">
        <nav className="flex justify-between max-w-4xl mx-auto">
          
          <Link to="/posts/user" className="text-gray-300 hover:text-white  flex flex-col items-center px-4 relative w-12" onMouseEnter={() => handleDashboardIconHover(true)}
          onMouseLeave={() =>handleDashboardIconHover(false)}>
          <img src = {home} alt ="home icon" className={`w-4 h-4 mb-1 ${isHovered ? 'transform -translate-y-2' : ' '}`} style={{ transition: 'transform 0.4s ease-in-out' }} />
          <span className={`text-xs ${dashboardIsHovered ? 'block' : 'hidden'} `}>Dashboard</span>
          </Link>
          <Link to="/posts" className="text-gray-300 hover:text-white  flex flex-col items-center px-4 relative w-12" onMouseEnter={() => handlejobPostsIconHover(true)}
          onMouseLeave={() => handlejobPostsIconHover (false)}>
          <img src = {jobPosts} alt ="job posts icon" className={`w-4 h-4 mb-1 ${isHovered ? 'transform -translate-y-2' : ' '}`} style={{ transition: 'transform 0.4s ease-in-out' }} />
          <span className={`text-xs ${jobPostsIsHovered ? 'block ' : 'hidden'} `}>Job Posts</span>
            
          </Link>
          <Link to="/map" className="text-gray-300 hover:text-white   flex flex-col items-center px-4 relative w-12" onMouseEnter={() => handleMapIconHover(true)}
          onMouseLeave={() => handleMapIconHover(false)}>
          <img src = {map} alt ="map icon" className={`w-4 h-4 mb-1 ${isHovered ? 'transform -translate-y-2' : ' '}`} style={{ transition: 'transform 0.4s ease-in-out' }}  />
          <span className={`text-xs ${mapIsHovered ? 'block ' : 'hidden'} `}> Map Journey</span>
           
          </Link>
          <Link to="/notes" className=" text-gray-300 hover:text-white  flex flex-col items-center px-4 relative w-12" onMouseEnter={() =>handleNotesIconHover (true)}
          onMouseLeave={() => handleNotesIconHover (false)}>
          <img src = {notes} alt ="notes icon" className={`w-4 h-4 mb-1 ${isHovered ? 'transform -translate-y-2' : ' '}`}/>
          <span className={`text-xs ${notesIsHovered ? 'block' : 'hidden'} `}>Notes</span>
          
          </Link>
          <Link to="/jobappnotes" className="text-gray-300 hover:text-white  flex flex-col items-center px-4 relative w-12" onMouseEnter={() => handlejobNotesIconHover(true)}
          onMouseLeave={() => handlejobNotesIconHover (false)}>
          <img src = {jobNotes} alt =" job notes icon" className={`w-4 h-4 mb-1 ${isHovered ? 'transform -translate-y-2' :' '}`} style={{ transition: 'transform 0.4s ease-in-out' }} />
          <span className={`text-xs ${jobNotesIsHovered ? 'block ' : 'hidden'} `}>Job Notes</span>
            
          </Link>
        </nav>
      </footer>
    );
  };
  
  export default AppFooter;