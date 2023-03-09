import "./Home.css";
import Back from "../../assets/cars1.png";
import { Link } from "react-router-dom";

const Homes = () => {
  const video = require("../../assets/cars1.mp4");
  return (
    <div className="home">
      <div className="home-video">
        <video autoPlay loop muted width="100%">
          <source src={video} type="video/mp4" />
        </video>
      </div>

      <div className="home-text">
        <h3>WELCOME TO</h3>
        <h1>
          CAR <span>WORLD</span>
        </h1>
        <Link to="/products">
          <p className="home-start">
            Get Started
            <span />
          </p>
        </Link>
      </div>
    </div>
  );
};
export default Homes;
