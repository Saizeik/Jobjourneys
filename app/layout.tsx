import React from "react";
import { Link } from "@remix-run/react";
import AppFooter from "./footer";
import { useLocation } from "react-router-dom";

// Import any other necessary components

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const location = useLocation();

  const isLoginOrJoinPage = location.pathname === '/login' || location.pathname === '/join' || location.pathname === '/forgot' ||  location.pathname === '/'

  if (isLoginOrJoinPage) {
    return (
      <>
        {children}
        <AppFooter />
      </>
    );
  }
  return (
    <>
      <div className="flex-grow">{children}</div>
      <AppFooter />
    </>
  );
};

export default Layout;
