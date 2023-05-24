import React from 'react';
import { Link } from "@remix-run/react";
import AppFooter from './footer';
// Import any other necessary components

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-grow">
        
        {children}
      </div>
      <AppFooter />
    </div>
  );
};

export default Layout;