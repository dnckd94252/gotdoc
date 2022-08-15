import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faHeartCirclePlus } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import DoctorStlye from "../../styles/DoctorStyle";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import axios from "axios";

const List = (props:any) => {
  const [target, setTarget] = useState(props.target);
  const [active, setActive] = useState(false);
  const userList = useSelector((state:any) => state.usersList);
  const checkArr = props.checkArr;
  
  const heartClick = async (e:any) => {
    e.preventDefault();
    if (!userList.users || userList.users.length <= 0)
      return alert("로그인 후 이용가능합니다.");
    const val = {
      click_id: userList.users.id,
      user_id: target.id,
    };
    await axios
      .post("/api/doctor/heart", val)
      .then(async res => {
        const data = res.data;
        if (data === "success") {
          props.getArr();
          heartCheck();
          await updateProfile();
        }
      })
      .catch(err => {
        if (err) return alert("잠시후 다시 시도해주세요.");
      });
  };

  const updateProfile = async () => {
    const val = { id: target.id };
    await axios.post("/api/doctor/target", val).then(res => {
      setTarget(res.data);
    });
  };

  const heartCheck = async () => {
    const find = checkArr.find((ele:any) => ele.user_id === target.id);
    if (find) setActive(true);
    else setActive(false);
  };

  useEffect(() => {
    heartCheck();
  }, [checkArr]);

  useEffect(() => {
    setTarget(props.target);
  }, [props.target]);

  return (
        <div className="tableItem pointer mt-3 d-flex align-items-center justify-content-between">
          <div className="name  d-flex align-items-center">
            <div className="img">
              <Image
                src={`/api/profile/${target.photo}`}
                width={60}
                height={60}
                objectFit="cover"
              />
            </div>
            <span className="ml-3">{target.name}</span>
          </div>
          <div className="mail">
            <span>{target.email}</span>
          </div>
          <div className="phoneNumber">
            <span>+82 {target.phone}</span>
          </div>
          <div className="position">
            <span className="pl-3 pr-3 pt-2 pb-2">{!target.major ? '미등록' : target.major}</span>
          </div>
          <div className="heartCnt">
            <div className="heartItem pl-4 pr-4 pt-2 pb-2 d-flex align-items-center">
              <FontAwesomeIcon icon={faHeart} />
              <span className="ml-2">{target.heart}</span>
            </div>
          </div>
          <div className="heartBtn">
            <button
              className={`btn btn-dark ${active ? "active" : null}`}
              onClick={heartClick}
            >
              <FontAwesomeIcon icon={faHeartCirclePlus} />
            </button>
          </div>
          <style jsx>{DoctorStlye}</style>
        </div>
  );
};
export default List;
