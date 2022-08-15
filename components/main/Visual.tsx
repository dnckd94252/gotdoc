import type { NextPage } from "next";
import VisualStyle from "../../styles/VisualStyle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlay , faBriefcase , faBed , faSackDollar} from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";

const Visual: NextPage = () => {
  return (
    <section id="visual" className="pageItem">
      <div className="container pt-5 flex-column d-flex justify-content-center">
        <div className="textBox">
          <div className="text mt-5 pt-5">
            <h1>Find Your Smart Doctor,</h1>
            <h1>
              Hell of a treatment <b>and</b>
            </h1>
            <h1>
              <b>Always Free</b> With 0%
            </h1>
          </div>
          <div className="text mt-5 pt-5">
            <h1>Save your money</h1>
            <h1>
              Save your time <b>and</b>
            </h1>
            <h1>
              <b>Get continuous</b> treatment
            </h1>
          </div>
          <div className="text mt-5 pt-5">
            <h1>Patient&apos;s , Doctor&apos;s Schedule</h1>
            <h1>
              Match each other <b>and</b>
            </h1>
            <h1>
              <b>Pick a place</b> close by
            </h1>
          </div>
        </div>
        <div className="util d-flex align-items-center mt-5">
          <button className="btn btn-info visualBtn mr-3 font-weight-bold">
            Try now, Free!
          </button>
          <div className=" d-flex align-items-center start">
            <FontAwesomeIcon
              icon={faCirclePlay}
              className="playIcon"
              size="4x"
            />
            <h5 className=" font-weight-bold m-0 ml-3 utilText">
              Watch a demo
            </h5>
          </div>
        </div>
        <div className="legend mt-5 pt-2 d-flex  position-relative align-items-center justify-content-between">
          <div className="d-flex contents align-items-center justify-content-between">
            <div className="item">
              <h5>50K</h5>
              <p>Active User</p>
            </div>
            <div className="bar"></div>
            <div className="item">
              <h5>100K</h5>
              <p>Real estate choice</p>
            </div>
          </div>
          <div className="location d-flex align-items-center position-absolute">
            <div className="locationItem p-3">
              <div className="imgBox">
                <Image
                  src={"/api/visual/hospital1.jpg"}
                  style={{ borderRadius: "10px" }}
                  height={450}
                  width={600}
                  objectFit="cover"
                />
                <h5 className="pt-4">Miracle De Primo 213</h5>
                <p>
                  <b>2,500</b> Views
                </p>
                <div className="option d-flex align-items-center pt-4 pb-2 border-top justify-content-between">
                  <div className="item d-flex align-items-center justify-content-center">
                    <FontAwesomeIcon icon={faBriefcase} />
                    <span className="ml-2">5 Worker</span>
                  </div>
                  <div className="item d-flex align-items-center justify-content-center">
                    <FontAwesomeIcon icon={faBed} />
                    <span className="ml-2">124 Rooms</span>
                  </div>
                  <div className="item d-flex align-items-center justify-content-center">
                    <FontAwesomeIcon icon={faSackDollar} />
                    <span className="ml-2">Low Money</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="locationItem p-3 mb-5 pb-5">
              <div className="imgBox">
                <Image
                  src={"/api/visual/hospital2.jpg"}
                  style={{ borderRadius: "10px" }}
                  height={450}
                  width={600}
                  objectFit="cover"
                />
                <h5 className="pt-4">St Colin Louwis 287</h5>
                <p>
                  <b>3,000</b> Views
                </p>
                <div className="option d-flex align-items-center pt-4 pb-2 border-top justify-content-between">
                  <div className="item d-flex align-items-center justify-content-center">
                    <FontAwesomeIcon icon={faBriefcase} />
                    <span className="ml-2">4 Worker</span>
                  </div>
                  <div className="item d-flex align-items-center justify-content-center">
                    <FontAwesomeIcon icon={faBed} />
                    <span className="ml-2">102 Rooms</span>
                  </div>
                  <div className="item d-flex align-items-center justify-content-center">
                    <FontAwesomeIcon icon={faSackDollar} />
                    <span className="ml-2">Low Money</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="locationItem p-3">
              <div className="imgBox">
                <Image
                  src={"/api/visual/hospital3.jpg"}
                  style={{ borderRadius: "10px" }}
                  height={450}
                  width={600}
                  objectFit="cover"
                />
                <h5 className="pt-4">Jacob SD ART 231</h5>
                <p>
                  <b>2,100</b> Views
                </p>
                <div className="option d-flex align-items-center pt-4 pb-2 border-top justify-content-between">
                  <div className="item d-flex align-items-center justify-content-center">
                    <FontAwesomeIcon icon={faBriefcase} />
                    <span className="ml-2">20 Worker</span>
                  </div>
                  <div className="item d-flex align-items-center justify-content-center">
                    <FontAwesomeIcon icon={faBed} />
                    <span className="ml-2">201 Rooms</span>
                  </div>
                  <div className="item d-flex align-items-center justify-content-center">
                    <FontAwesomeIcon icon={faSackDollar} />
                    <span className="ml-2">Low Money</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{VisualStyle}</style>
    </section>
  );
};

export default Visual;
