"use client";
import Image from "next/image";
import React from "react";
import Snowfall from "react-snowfall";
import Contact from "./Contact";
interface BackgroundProps {
  children: React.ReactNode;
}

const Background: React.FC<BackgroundProps> = ({ children }) => {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Snowfall
        style={{
          position: "fixed",
          width: "100vw",
          height: "100vh",
        }}
      />
      <div className="max-w-[90rem] mx-auto px-5 xl:px-20">{children}</div>
      <Contact />
    </div>
  );
};

export default Background;
