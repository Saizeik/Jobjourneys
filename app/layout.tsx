import React from "react";
import { Link } from "@remix-run/react";
import AppFooter from "./footer";

// Import any other necessary components

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      {children}
    <AppFooter />
    </>
  );
};

export default Layout;
