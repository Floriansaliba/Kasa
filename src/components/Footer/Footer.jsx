import "./Footer.css";
import logo from "../../pictures/logo.svg";

const Footer = () => {


  return (
    <div className="footer" >
      <img className="footer_logo" src={logo} alt="Kasa"></img>
      <p className="footer_text">© 2020 Kasa. All rights reserved</p>
    </div>
  );
};

export default Footer;
