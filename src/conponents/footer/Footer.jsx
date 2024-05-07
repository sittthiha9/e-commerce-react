import "./Footer.css";
import logo from "../assets/logo.png";
import pinterestIcon from "../assets/pintester_icon.png"
import instagramIcon from "../assets/instagram_icon.png"
import whatsappIcon from "../assets/whatsapp_icon.png"

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-logo">
        <img src={logo} alt="logo" />
        <p>SHOPPER</p>
      </div>
      <ul className="footer-link">
        <li>Company</li>
        <li>Products</li>
        <li>Offices</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div className="footer-social-icons">
        <img src={instagramIcon} alt="Instagram"/>
        <img src={pinterestIcon} alt="Pinterest"/>
        <img src={whatsappIcon} alt="Whatsapp"/>
      </div>
    </div>
  );
};

export default Footer;
