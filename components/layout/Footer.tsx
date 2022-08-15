import FooterStyle from "../../styles/FooterStyle";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBlog,
  faMessage,
  faPhone
} from "@fortawesome/free-solid-svg-icons";
const Footer = () => {
    return (
      <footer className="d-flex align-items-center flex-column justify-content-center">
        <div className="contents container d-flex align-items-center justify-content-between">
          <div className="left">
            <div className="d-flex align-items-center logo">
              <Image
                src="/api/logo.png"
                width={50}
                height={50}
              />
              <h5 className="m-0 ml-3">GotDoc</h5>
            </div>
            <p className="mt-5">
              Enjoy our services in your dream real estate search, Thank you!
            </p>
          </div>
          <div className="right d-flex align-items-center justify-content-between">
            <div className="item">
              <FontAwesomeIcon icon={faBlog} size="2x" />
            </div>
            <div className="item">
              <FontAwesomeIcon icon={faMessage} size="2x" />
            </div>
            <div className="item">
              <FontAwesomeIcon icon={faPhone} size="2x" />
            </div>
          </div>
        </div>
        <div className="copyright container mt-5 pt-5 border-top d-flex align-items-center justify-content-between">
          <p>Created Choi Woo Chang Copyright all Right.</p>
          <div className="d-flex align-items-center last justify-content-between">
            <p>Legal doc</p>
            <div className="bar"></div>
            <p>Privacy Policy</p>
            <div className="bar"></div>
            <p>Terms of Use</p>
          </div>
        </div>
        <style jsx>{FooterStyle}</style>
      </footer>
    );
};
export default Footer;
