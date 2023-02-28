import "./Home.css";
import Back from "../../assets/cars1.png";
import { Link } from "react-router-dom";

const Homes = () => {
  return (
    <div className="homes">
      <div className="home-frame">
        <img src={Back} alt="car" />
      </div>
      <div className="home-text">
        <h1>Welcome to</h1>
        <h1>
          Car <span>World</span>
        </h1>
        <Link to="/products">
          <p className="hero-start">
            Get Started
            <span />
          </p>
        </Link>
      </div>
    </div>
  );
};
export default Homes;
