"use client";
import Image from "next/image";
import Body from "./components/Body";
import Fields from "./components/Fields";
import { Tilt } from "react-tilt";
import About from "./components/About";
import Work from "./components/Work";
import Contact from "./components/Contact";


export default function Home() {
  return (
    <div className="">
      <div className="">
        <Body />
        <About />
        <Work />
      </div>
    </div>
  );
}
