import Image from "next/image";
import ProcessStyle from "../../styles/ProcessStyle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faArrowRight
} from "@fortawesome/free-solid-svg-icons";
const Process = () => {
  return (
    <section id="process" className="container">
      <div
        style={{
          opacity: 0,
          transform: "translateY(-50px)",
          transition: ".5s",
        }}
        className="title d-flex align-items-center pageItem justify-content-center flex-column"
      >
        <h3>
          How to Grow Your <b>Business</b>
        </h3>
        <h3>
          <b>Experience</b> With Estima
        </h3>
      </div>
      <div className="contents pb-5">
        <div className="item item1 d-flex align-items-center pageItem justify-content-between">
          <div
            className="text col-6"
            style={{
              opacity: 0,
              transform: "translateY(-50px)",
              transition: ".5s",
            }}
          >
            <h4 className="d-flex align-items-center justify-content-center">
              01
            </h4>
            <h3 className="mt-5 mb-4">
              Log in and contact your special Doctor.
            </h3>
            <p className="mt-5 mb-5">
              If you try to contact me, I&apos;ll get a call a little later.
              After that, adjust each other&apos;s schedule and get treatment.
            </p>
            <div className="more d-flex align-items-center">
              <span className="mr-3">Learn More</span>
              <FontAwesomeIcon icon={faArrowRight} size="2x" />
            </div>
          </div>
          <div
            className="img col-6 d-flex align-items-center justify-content-center"
            style={{
              opacity: 0,
              transform: "translateY(-50px)",
              transition: "1.5s",
            }}
          >
            <Image
              src="/api/process/user.png"
              width={500}
              height={400}
            />
          </div>
        </div>
        <div className="item item2 d-flex align-items-center pageItem justify-content-between">
          <div
            className="img col-6 d-flex align-items-center justify-content-center"
            style={{
              opacity: 0,
              transform: "translateY(-50px)",
              transition: "1.5s",
            }}
          >
            <Image
              src="/api/process/list.png"
              width={500}
              height={400}
            />
          </div>
          <div
            className="text col-6 ml-5"
            style={{
              opacity: 0,
              transform: "translateY(-50px)",
              transition: ".5s",
            }}
          >
            <h4 className="d-flex align-items-center justify-content-center">
              02
            </h4>
            <h3 className="mt-5 mb-4">
              Search all Hospital you want in your location
            </h3>
            <p className="mt-5 mb-5">
              Search your location and recommend it based on the score. Make a
              quick to the location you want.
            </p>
            <div className="more d-flex align-items-center">
              <span className="mr-3">Learn More</span>
              <FontAwesomeIcon icon={faArrowRight} size="2x" />
            </div>
          </div>
        </div>
        <div className="item item3 d-flex align-items-center pageItem justify-content-between">
          <div
            className="text col-6"
            style={{
              opacity: 0,
              transform: "translateY(-50px)",
              transition: ".5s",
            }}
          >
            <h4 className="d-flex align-items-center justify-content-center">
              03
            </h4>
            <h3 className="mt-5 mb-4">
              Choose and Doctor you want real disease
            </h3>
            <p className="mt-5 mb-5">
              It&apos;s not just location selection. I recommend which doctor to
              see in the hospital through the score.
            </p>
            <div className="more d-flex align-items-center">
              <span className="mr-3">Learn More</span>
              <FontAwesomeIcon icon={faArrowRight} size="2x" />
            </div>
          </div>
          <div
            className="img col-6 d-flex align-items-center justify-content-center"
            style={{
              opacity: 0,
              transform: "translateY(-50px)",
              transition: "1.5s",
            }}
          >
            <Image
              src="/api/process/point.png"
              width={500}
              height={400}
            />
          </div>
        </div>
      </div>
      <style jsx>{ProcessStyle}</style>
    </section>
  );
};
export default Process;
