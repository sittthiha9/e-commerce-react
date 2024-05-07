import handIcon from "../assets/hand_icon.png";
import arrow from "../assets/arrow.png";
import heroImage from "../assets/hero_image.png";
import "./Hero.css";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-left">
        <h2>NEW ARRIVAL ONLY</h2>
        <div>
          <div className="hero-hand">
            <p>new</p>
            <img src={handIcon} alt="hand-icon" />
          </div>
          <p>collections</p>
          <p>for everyone</p>
        </div>
        <div className="hero-button">
          <div>Latest Collections</div>
          <img src={arrow} alt="arrow" />
        </div>
      </div>
      <div className="hero-right">
        <img src={heroImage} alt="image" />
      </div>
    </div>
  );
};

export default Hero;
