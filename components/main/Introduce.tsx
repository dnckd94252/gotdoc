import IntroduceStyle from "../../styles/IntroduceStyle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShield,
  faBriefcase,
  faBed,
  faSackDollar,
  faClock,
  faLocationDot,
  faCreditCard,
} from "@fortawesome/free-solid-svg-icons";

import Image from "next/image";

const Introduce = () => {
  return (
    <section
      id="introduce"
      className="vh-100 vw-100 d-flex align-items-center pageItem justify-content-center"
    >
      <div className="container d-flex align-items-center justify-content-between">
        <div className="option">
          <div
            className="optionItem actionItem1 mb-5 p-4"
            style={{
              transition: ".3s",
              opacity: 0,
              transform: "translateY(50px)",
            }}
          >
            <div className="icon d-flex align-items-center justify-content-center">
              <FontAwesomeIcon icon={faShield} size="3x" />
            </div>
            <h5>Trusted Agency</h5>
            <span>Agents make life like simple for you and your clients.</span>
          </div>
          <div
            className="optionItem actionItem2 mb-5 p-4"
            style={{
              transition: ".7s",
              opacity: 0,
              transform: "translateY(50px)",
            }}
          >
            <div className="icon d-flex align-items-center justify-content-center">
              <FontAwesomeIcon icon={faClock} size="3x" />
            </div>
            <h5>24 Hour Consul</h5>
            <span>Our contact person is always ready to serve you.</span>
          </div>
        </div>
        <div
          className="content legend actionItem3"
          style={{
            transition: "1.1s",
            opacity: 0,
            transform: "translateY(50px)",
          }}
        >
          <div className="locationItem p-3 mb-5 pb-5">
            <div className="imgBox">
              <Image
                src="/api/visual/hospital2.jpg"
                style={{ borderRadius: "10px" }}
                height={450}
                width={600}
                objectFit="cover"
              />
              <h5 className="pt-4">St Colin Louwis 287</h5>
              <p>
                <b>3,000</b> Views
              </p>
              <div className="options d-flex align-items-center pt-4 pb-2 border-top justify-content-between">
                <div className="item d-flex align-items-center justify-content-center">
                  <FontAwesomeIcon size="2x" icon={faBriefcase} />
                  <span className="ml-4">4 Worker</span>
                </div>
                <div className="item d-flex align-items-center justify-content-center">
                  <FontAwesomeIcon size="2x" icon={faBed} />
                  <span className="ml-4">102 Rooms</span>
                </div>
                <div className="item d-flex align-items-center justify-content-center">
                  <FontAwesomeIcon size="2x" icon={faSackDollar} />
                  <span className="ml-4">Low Money</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="option">
          <div
            className="optionItem actionItem4 mb-5 p-4"
            style={{
              transition: "1.4s",
              opacity: 0,
              transform: "translateY(50px)",
            }}
          >
            <div className="icon d-flex align-items-center justify-content-center">
              <FontAwesomeIcon icon={faLocationDot} size="3x" />
            </div>
            <h5>It&apos;s Everywhere</h5>
            <span>Wherever you are, we are here for you.</span>
          </div>
          <div
            className="optionItem  actionItem5 mb-5 p-4"
            style={{
              transition: "1.7s",
              opacity: 0,
              transform: "translateY(50px)",
            }}
          >
            <div className="icon d-flex align-items-center justify-content-center">
              <FontAwesomeIcon icon={faCreditCard} size="3x" />
            </div>
            <h5>Easy Payment</h5>
            <span>We offer easy payment method for you.</span>
          </div>
        </div>
      </div>
      <style jsx>{IntroduceStyle}</style>
    </section>
  );
};

export default Introduce;
