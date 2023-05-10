
"use client";
import React, { useState } from "react";
import { BiCopy } from "react-icons/bi";

interface CopyKeyboardProps {
  text: string;
}
const CopyKeyboard: React.FC<CopyKeyboardProps> = ({ text }) => {
  const [textDisplayed, setTextDisplayed] = useState(text);
  const copyToClipboard = () => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        console.log("Text copied to clipboard!");
        setTextDisplayed("Copied");
        setTimeout(()=>{
            setTextDisplayed(text)
        },2000)
      })
      .catch((error) => {
        console.error("Failed to copy text: ", error);
      });
  };

  return (
    <div
      onClick={copyToClipboard}
      className="w-full flex items-center rounded-tl-[20px] hover:bg-[rgb(54,91,254)] hover:text-white group rounded-br-[20px] h-[3.5rem] mt-4  cursor-pointer bg-[rgb(44,48,62)] text-[rgb(102,111,133)]"
    >
      <div className="h-full  group-hover:bg-[rgb(17,56,226)] rounded-tl-[20px] flex items-center px-4 bg-[rgb(102,111,133)] text-white">
        <BiCopy />
      </div>

      <span className="text-center w-full font-bold text-lg">{textDisplayed}</span>
    </div>
  );
};

export default CopyKeyboard;
