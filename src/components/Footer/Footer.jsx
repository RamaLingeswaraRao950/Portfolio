import "./index.css";
import { MdOutlineEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-container">
        <h1>Contact</h1>
        <p>
          Experienced Full-Stack developer with over a year of hands-on
          expertise in crafting dynamic, scalable software solutions. Skilled in both
          front-end and back-end technologies, dedicated to delivering
          innovative and robust digital experiences. Need help ?? Just send me a message...!! {" "}
        </p>

        <div className="footer-social">
          <a href="mailto:princeram950@gmail.com" target="_blank" rel="noreferrer"> <MdOutlineEmail /> </a>

          <a href="https://www.linkedin.com/in/rama-lingeswara-rao-sivakavi-b6706428b/" target="_blank"> <FaLinkedin /> </a>
          
          <a href="https://wa.me/916302602564?text=Hi%2C%20Ram%20Sivakavi" target="_blank"> <FaWhatsapp /> </a>
          
          <a href="https://github.com/RamaLingeswaraRao950" target="_blank"> <FaGithub /> </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
