
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// ScrollToTop component
const ScrollToTop = () => {
  alert("hello")
  const location = useLocation(); // Get current location (path)

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page when the route changes
  }, [location]); // Run this effect whenever the location changes

  return null; // This component doesn't need to render anything
};

export default ScrollToTop;