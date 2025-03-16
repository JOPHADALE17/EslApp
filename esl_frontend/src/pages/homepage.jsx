// import { useState } from "react";
import { useNavigate } from "react-router-dom";
import eslLogo from "../assets/esl-logo.png";
import eslText from "../assets/esl-text.png";
import girlIMG from "../assets/heroImage.png";

function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col gap-4">
      <nav className="bg-white sticky top-0">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          {/* Logo */}
          <a
            onClick={() => navigate("/")}
            className="flex items-center space-x-3 rtl:space-x-reverse cursor-pointer"
          >
            <img src={eslLogo} className="h-8" alt="ESL Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              <img src={eslText} className="h-8" alt="ESL Text" />
            </span>
          </a>

          {/* Right Side Buttons */}
          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <button
              type="button"
              onClick={() => navigate("login")}
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center"
            >
              Get started
            </button>
          </div>
        </div>
      </nav>

      <div className="bg-gradient-to-r from-[#09BB92] to-[#1E97BE] sm:min-h-screen flex flex-col-reverse md:flex-row justify-center items-center p-4 sm:p-8 gap-5 md:gap-12">
        {/* Text Section */}
        <div className="flex flex-col items-center  text-center px-4 sm:px-8 max-w-lg sm:max-w-xl">
          <h1 className="text-white text-3xl sm:text-4xl md:text-6xl font-bold">
            Welcome to ESL Platform
          </h1>
          <p className="text-white text-base sm:text-lg md:text-xl mt-4">
            Learn, improve, and succeed with the best English learning
            experience.
          </p>
        </div>

        {/* Image Section */}
        <img
          src={girlIMG}
          className="w-full sm:w-1/2 md:w-1/3 max-w-3/4 md:max-w-[75%]"
          alt="ESL Learning"
        />
      </div>

      <div className="bg-white text-black py-12 px-6 sm:px-12 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">
          About ESL Platform
        </h2>
        <p className="text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed">
          ESL Platform is designed to help learners master English through
          interactive lessons, live support from teachers, and flexible online
          classes.
        </p>
      </div>

      <div>
        <div className="bg-gray-100 text-center py-6">
          <h3 className="text-xl font-semibold">Get in Touch</h3>
          <p className="text-gray-600 text-sm">Have questions? Reach out at</p>
          <p className="text-blue-600 font-medium">
            jophadalecarlvelasco94@gmail.com
          </p>
        </div>

        <footer className="w-full bg-gray-900 text-white text-center py-4">
          <p className="text-sm sm:text-base">
            Developed by Jophadal Carl Velasco
          </p>
        </footer>
      </div>
    </div>
  );
}

export default HomePage;
