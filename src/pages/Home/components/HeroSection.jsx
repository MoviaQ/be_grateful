import React from "react";
import Button from "../../../components/Button";
import ScrollingEmojis from "./ScrollingEmojis";
import { Link } from "react-scroll"; // Importowanie Link z react-scroll

const HeroSection = () => {
  return (
    <div className="m-0 bg-gradient-to-r from-white to-light-blue w-screen h-screen">
      <div className="flex ">
        <h1 className="p-10 text-8xl font-bold text-shadow">be_grateful</h1>
        <div className="ml-auto p-12">
          <Button text="Log In" />
        </div>
      </div>
      <div className="flex-col justify-center text-center">
        <p className="p-10 text-4xl font-semibold">
          Your only app for tracking daily gratitude and mindfulness 🧠
        </p>
        <p className="p-0 text-3xl font-semibold">
          But why should you use it?
        </p>
      </div>
      <ScrollingEmojis />

      <div className="flex-col justify-center text-center">
        <p className="pt-24 text-2xl font-semibold"> Let's find out</p>
        

        <Link
          to="ab-section" 
          smooth={true}
          duration={500} 
        >
         <button className="bg-white p-2 rounded-full transition duration-300 hover:scale-110 hover:bg-light-pink m-20 "><svg fill="#000000" height="30px" width="30px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 330 330" xml:space="preserve" stroke="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC" stroke-width="1.32"></g><g id="SVGRepo_iconCarrier"> <path id="XMLID_24_" d="M216.358,271.76c-2.322-5.605-7.792-9.26-13.858-9.26H180V15c0-8.284-6.716-15-15-15 c-8.284,0-15,6.716-15,15v247.5h-22.5c-6.067,0-11.537,3.655-13.858,9.26c-2.321,5.605-1.038,12.057,3.252,16.347l37.5,37.5 C157.322,328.536,161.161,330,165,330s7.678-1.464,10.607-4.394l37.5-37.5C217.396,283.816,218.68,277.365,216.358,271.76z"></path> </g></svg></button>
        </Link>
      </div>
    </div>
  );
};

export default HeroSection;