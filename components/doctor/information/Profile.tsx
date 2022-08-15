import Image from "next/image";
import ProfileStyle from "../../../styles/information/ProfileStyle";
import {
  faHeart,
  faPlusSquare,
  faBook,
  faMinusSquare
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getHeartList } from "../../../fnc/doctor";
import { useState, useEffect } from "react";
import Link from "next/link";
import { followClick, followCheck } from "../../../fnc/follow";
import { useSelector } from "react-redux";

const Profile = (props:any) => {
  const info = props.info;
  const [heart, setHeart] = useState([]);
  const [follow, setFollow] = useState(false);
  const userList = useSelector((state:any) => state.usersList);
  const users = userList.users;

  useEffect(() => {
    getHeartList(info.id, setHeart);
    followCheck(info, users, setFollow);
  }, []);

  return (
    <div className="profile d-flex ml-3 mr-3 align-items-center flex-column justify-content-center col-4 pr-3 pl-3">
      <div className="introduce  d-flex align-items-center justify-content-center flex-column">
        <div className="image d-flex align-items-center justify-content-center flex-column">
          <div className="img">
            <Image
              src={`/api/profile/${info.photo}`}
              width={250}
              height={250}
              objectFit="cover"
            />
          </div>
          <h5 className="mt-3">{info.name}</h5>
          <span>{info.email}</span>
        </div>
      </div>
      <div className="item d-flex align-items-center  justify-content-between pl-5 pr-5 pt-2 pb-2">
        <span>Hearts Received</span>
        <div className="d-flex align-items-center heart">
          <FontAwesomeIcon icon={faHeart} size="2x" />
          <p className="ml-2 mb-0">{heart.length}</p>
        </div>
      </div>
      <div className="item d-flex align-items-center  justify-content-between pl-5 pr-5 pt-2 pb-2">
        <span>Reviews Received</span>
        <div className="d-flex align-items-center review">
          <FontAwesomeIcon icon={faBook} size="2x" />
          <p className="ml-2 mb-0">0</p>
        </div>
      </div>
      {!follow ? (
        <div
          className="item d-flex align-items-center follow pointer justify-content-center pl-5 pr-5 pt-2 pb-2"
          onClick={async () => {
            if (!users) return alert("로그인 후 이용가능합니다.");
            await followClick(info, users, setFollow);
          }}
        >
          <FontAwesomeIcon icon={faPlusSquare} size="2x" />
          <span className="ml-3">Follow Doctor</span>
        </div>
      ) : (
        <div
          className="item d-flex align-items-center red follow justify-content-center pointer pl-5 pr-5 pt-2 pb-2"
          onClick={async () => {
            if (!users) return alert("로그인 후 이용가능합니다.");
            await followClick(info, users, setFollow);
          }}
        >
          <FontAwesomeIcon icon={faMinusSquare} size="2x" />
          <span className="ml-3">Follow Cancel</span>
        </div>
      )}
      <div className="item d-flex align-items-center other justify-content-center flex-column pl-5 pr-5 pt-2 pb-2">
        <Link href="/message">
          <a>
            <button className="btn btn-dark m-2">톡 문의</button>
          </a>
        </Link>
        <Link href={`/doctor/${info.id}/reservation`}>
          <a>
            <button className="btn btn-dark m-2 otherBtn">
              진료 예약
            </button>
          </a>
        </Link>
      </div>
      <style jsx>{ProfileStyle}</style>
    </div>
  );
};

export default Profile;
