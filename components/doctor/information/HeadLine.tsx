import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faHouse } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import HeadLineStyle from "../../../styles/information/HeadLineStyle";
import Link from "next/link";


const HeadLine = (props:any) => {
  const info = props.info;
  return (
    <div className="headLine d-flex pb-3 border-bottom align-items-center justify-content-between pt-3 mt-5">
      <Link href="/doctor">
        <a style={{ textDecoration: "none", color: "inherit" }}>
          <div className="d-flex align-items-center back">
            <FontAwesomeIcon icon={faArrowLeft} size="2x" />
            <div className="d-flex align-items-center ml-3">
              <div className="img">
                <Image
                  src={`/api/profile/${info.photo}`}
                  width={60}
                  height={60}
                  objectFit="cover"
                />
              </div>
              <h5 className="ml-2">{info.name}</h5>
            </div>
          </div>
        </a>
      </Link>
      <Link href="/">
        <a>
          <div className="button">
            <button className="btn btn-danger pr-3 pl-3 d-flex align-items-center pt-3 pb-3">
              <FontAwesomeIcon icon={faHouse} className="mr-3" />
              MAIN
            </button>
          </div>
        </a>
      </Link>
      <style jsx>{HeadLineStyle}</style>
    </div>
  );
};

export default HeadLine