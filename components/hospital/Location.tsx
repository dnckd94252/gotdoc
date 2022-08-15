import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faBriefcase,
  faBed,
  faSackDollar,
} from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import HospitalStyle from "../../styles/hospital/HospitalStyle";
import Link from "next/link";

const Location = (props:any) => {
  const { id,address, created_at, name, rooms, photo, user_id } = props.item;
  
  return (
    <Link href={`/hospital/${id}`}>
      <a>
        <div className="locationItem pointer p-3 m-4">
          <div className="imgBox">
            <Image
              src={encodeURI(`/api/hospital/${photo}`)}
              style={{ borderRadius: "10px" }}
              height={250}
              width={400}
              objectFit="cover"
            />
            <h5 className="pt-4">{name}</h5>
            <p>{address}</p>
            <div className="option d-flex align-items-center pt-4 pb-2 border-top justify-content-between">
              <div className="item d-flex align-items-center justify-content-center">
                <FontAwesomeIcon icon={faBriefcase} />
                <span className="ml-2">0 Worker</span>
              </div>
              <div className="item d-flex align-items-center justify-content-center">
                <FontAwesomeIcon icon={faBed} />
                <span className="ml-2">{rooms} Rooms</span>
              </div>
              <div className="item d-flex align-items-center justify-content-center">
                <FontAwesomeIcon icon={faSackDollar} />
                <span className="ml-2">Low Money</span>
              </div>
            </div>
          </div>
          <style jsx>{HospitalStyle}</style>
        </div>
      </a>
    </Link>
  );
};

export default Location;
