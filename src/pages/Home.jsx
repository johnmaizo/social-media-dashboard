import React, {useState} from "react";

import Footer from "../Footer.jsx";

import {followers} from "../data/followers.json";
import {overviews} from "../data/overviews.json";

import FollowersCard from "../components/FollowersCard.jsx";
import OverviewCard from "../components/OverviewCard.jsx";

const Home = () => {
  const [Theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    setTheme(Theme === "dark" ? "light" : "dark");
  };

  return (
    <>
      <main
        className={` background_box relative z-10 min-h-screen ${
          Theme === "dark"
            ? "background_box_dark bg-[#1D2029]"
            : "background_box_light bg-[#FFFFFF]"
        } transition-colors`}
      >
        <div className="container mx-auto">
          <div className=" mx-[2em] py-10 lg:mx-[4em] xl:mx-[10em] ">
            <div className=" mb-10 md:flex md:items-center md:justify-between">
              <div>
                <h1
                  className={`text-2xl font-bold ${
                    Theme === "dark" ? "text-[#fff]" : "text-[#000]"
                  } transition-colors lg:text-3xl`}
                >
                  Social Media Dashboard
                </h1>
                <p
                  className={` font-bold ${
                    Theme === "dark" ? "text-[#8b97c6]" : "text-[#63687e]"
                  } transition-colors`}
                >
                  Total Followers: 23,004
                </p>
              </div>
              <hr
                className={` my-5 lg:hidden ${
                  Theme === "dark" ? "border-[#373A4D]" : "border-[#898C9B]"
                } transition-colors`}
              />
              <div className="flex justify-between gap-3">
                <span
                  className={` font-bold ${
                    Theme === "dark" ? "text-[#fff]" : "text-[#000]"
                  } transition-colors `}
                >
                  Dark Mode
                </span>
                <button
                  aria-label="Toggle Theme"
                  onClick={toggleTheme}
                  className={` button_circle relative rounded-xl px-6 py-3 ${
                    Theme === "light"
                      ? "button_circle_light button_theme_light"
                      : ""
                  } button_theme_dark`}
                ></button>
              </div>
            </div>

            <div className="grid_auto_fit grid gap-5">
              {followers.map((followers, index) => {
                return (
                  <FollowersCard
                    key={index}
                    number={index}
                    Theme={Theme}
                    {...followers}
                  />
                );
              })}
            </div>
            <h2
              className={` mb-6 mt-10 text-2xl font-bold ${
                Theme === "dark" ? "text-[#fff]" : "text-[#636677]"
              } transition-colors`}
            >
              Overview - Today
            </h2>

            <div className="grid_auto_fit_overview 2xl:grid_auto_fit_overview_large grid gap-5 ">
              {overviews.map((overviews, index) => {
                return (
                  <OverviewCard
                    key={index}
                    number={index}
                    Theme={Theme}
                    {...overviews}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </main>
      
      <Footer Theme={Theme} />
    </>
  );
};

export default Home;
