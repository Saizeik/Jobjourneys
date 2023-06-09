import React from 'react';
import { useLocation } from 'react-router-dom';

const DesktopFooter = () => {
  const currentYear = new Date().getFullYear();
  const location = useLocation();

  const isDesktopViewport = location.pathname !== '/posts' || "/map";

  if (!isDesktopViewport) {
    return null; // Return null if not on desktop viewport
  }

  return (
    <footer className={`footer ${isDesktopViewport ? 'desktop-footer' : ''}`}>
      {isDesktopViewport && (
        <div className="footer-content">
          <p>&copy; {currentYear} Nathan Walker Productions. All rights reserved.</p>
        </div>
      )}
    </footer>
  );
};

export default DesktopFooter;






