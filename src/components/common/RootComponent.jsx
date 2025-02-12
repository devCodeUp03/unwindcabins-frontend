import React from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import ErrorBoundary from "./ErrorBoundary";

const RootComponent = () => {
  return (
    <ErrorBoundary>
      <Header />
      <Outlet />
      <Footer />
    </ErrorBoundary>
  );
};

export default RootComponent;
