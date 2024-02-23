import Arrow from "../assets/icons/arrow.svg";
import IndianFlag from "../assets/icons/india-flag.svg";
import { Link } from "react-router-dom";

const HomeInfo = ({ currentStage }: any) => {
  if (currentStage === 1) {
    return (
      <h1 className="sm:text-xl sm-leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5">
        Hi, I'm
        <span className="font-semibold mx-2 text-white">Kathir</span>
        👋
        <br />
        <span className="flex-row flex items-center justify-start my-3">
          A Software Engineer from India
          <img
            src={IndianFlag}
            alt="indian-flag"
            className="object-contain h-4 w-4 ml-2"
          />
        </span>
      </h1>
    );
  }
  if (currentStage === 2) {
    return (
      <div className="info-box">
        <p className="font-medium sm:text-xl text-center">
          Worked with many companies <br /> and picked up many skills along the
          way
        </p>
        <Link to="/about" className="neo-brutalism-white neo-btn">
          Learn More
          <img src={Arrow} alt="arrow" className="w-4 h-4 object-contain" />
        </Link>
      </div>
    );
  }
  if (currentStage === 3) {
    return (
      <div className="info-box">
        <p className="font-medium sm:text-xl text-center">
          Lead multiple projects to success over the years. <br /> Curious about
          the impact?
        </p>
        <Link to="/projects" className="neo-brutalism-white neo-btn">
          Visit my portfolio
          <img src={Arrow} alt="arrow" className="w-4 h-4 object-contain" />
        </Link>
      </div>
    );
  }
  if (currentStage === 4) {
    return (
      <div className="info-box">
        <p className="font-medium sm:text-xl text-center">
          Need a project done or looking for dev? <br /> I'm just a few
          keystrokes away
        </p>
        <Link to="/contact" className="neo-brutalism-white neo-btn">
          Let's talk
          <img src={Arrow} alt="arrow" className="w-4 h-4 object-contain" />
        </Link>
      </div>
    );
  }
  return null;
};

export default HomeInfo;
