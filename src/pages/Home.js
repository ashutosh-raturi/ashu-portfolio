import React from "react";
import Button from "../components/Button";
import Avatar from "../components/Avatar";
import pic from "../assets/avatar.jpg";
import { body, subject } from "../utils/constants";

const Home = () => {
  const handleHireMeClick = () => {
    const email = process.env.REACT_APP_MY_EMAIL;
    window.location.href = `mailto:${email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  };

  const handleResumeDownload = (e) => {
    const link = document.createElement("a");
    link.href = process.env.REACT_APP_RESUME_URL;
    link.download = "ASHUTOSH_RATURI.pdf";
    link.click();
  };

  const avatarSection = (
    <div className="md:mx-5">
      <Avatar src={pic} alt={"Ashutosh Raturi"}/>
    </div>
  );

  const introSection = (
    <div className="md:w-[60%] w-full mt-8 md:mt-0">
      <p className="text-[var(--text-light)] text-center md:text-left font-bold md:text-lg text-base mb-2">
        HELLO
      </p>
      <h2 className="text-[var(--text-dark)] text-center md:text-left text-3xl mb-2">
        I'm Ashutosh <br />
        Web UI Specialist
      </h2>
      <p className="md:text-left text-[var(--text-light)] leading-7 font-medium text-center">
        Welcome to my portfolio! I'm an experienced front-end developer with a
        strong focus on building dynamic, responsive, and visually appealing web
        applications. With expertise in React, JavaScript, and modern UI
        frameworks, I bring creativity and functionality together to craft
        seamless user experiences. From interactive single-page applications to
        complex front-end solutions, my projects reflect my commitment to
        quality and innovation in web development.
      </p>
      <div className="w-full flex md:justify-start justify-center mt-8">
        <Button className="mr-4" type="primary" onClick={handleHireMeClick}>
          Hire Me
        </Button>
        <Button type="outline" onClick={handleResumeDownload}>
          Resume
        </Button>
      </div>
    </div>
  );

  return (
    <section className="md:p-4 p-2">
      <div className="flex justify-between items-center md:mt-16 mt-2 flex-col md:flex-row">
        {avatarSection}
        {introSection}
      </div>
    </section>
  );
};

export default Home;
