// ScrollToTopButton.js
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import "./goBackBtn.css";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();

  const handleScroll = () => {
    const scrollTop = document.documentElement.scrollTop;
    const windowHeight = window.innerHeight;
    const docHeight = document.documentElement.offsetHeight;

    // Kiểm tra nếu cuộn đến gần cuối trang (10% cuối trang)
    if (scrollTop + windowHeight >= docHeight * 0.9) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const goHome = () => {
    navigate("/");
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    isVisible && (
      <button className="scroll-to-top-button" onClick={goHome}>
        <FaHome size={20} />
      </button>
    )
  );
};

export default ScrollToTopButton;
