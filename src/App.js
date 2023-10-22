import React, { useRef, useEffect } from "react";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import SocialLinks from "./components/SocialLinks";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
function App() {
    useEffect(() => {
        // Load Google Analytics script asynchronously when the component mounts
        const script = document.createElement("script");
        script.async = true;
        script.src = "https://www.googletagmanager.com/gtag/js?id=G-YWCLD7R153";
        document.head.appendChild(script);

        script.onload = () => {
            window.dataLayer = window.dataLayer || [];
            function gtag() {
                window.dataLayer.push(arguments);
            }
            gtag("js", new Date());
            gtag("config", "G-YWCLD7R153");
        };

        // Clean up script tag on component unmount
        return () => {
            document.head.removeChild(script);
        };
    }, []);
  return (
      <div>
        <NavBar/>
          <Home/>
          <About/>
          <Portfolio/>
          <Experience/>
          <Contact/>
          <SocialLinks/>
      </div>

  );
}

export default App;
