import Image from "next/image";
import ProfileStyle from "../../styles/mypage/ProfileStyle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import Modal from "./Modal";
import { useEffect, useState } from "react";
import axios from "axios";
import MajorModal from "./MajorModal";
import ReservationModal from "./ReservationModal";

const Profile = (props:any) => {
  const { userList, setUserList } = props;
  const [division, setDivison] = useState<any>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [majorModalOpen, setMajorModalOpen] = useState(false);
  const [reservationModalOpen, setReservationModalOpen] = useState(false);

  useEffect(() => {
    const userDivision = userList.users.division;
    if (!userDivision) return;
    axios.post("/api/hospital/show", { pid: userDivision }).then(res => {
      setDivison(res.data);
    });
  }, [userList]);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const openMajorModal = () => {
    setMajorModalOpen(true);
  };

  const closeMajorModal = () => {
    setMajorModalOpen(false);
  };

  const openReservationModal = () => {
    setReservationModalOpen(true);
  };

  const closeReservationModal = () => {
    setReservationModalOpen(false);
  };

  return (
    <div className="profile p-4 col-4 ">
      <div className="name d-flex justify-content-center align-items-center flex-column">
        <div className="img mt-5">
          <Image
            src={`/api/profile/${userList.users.photo}`}
            width={160}
            height={160}
            objectFit="cover"
          />
        </div>
        <h5>{userList.users.name}</h5>
        <span className="tag">
          {userList.users.type === "doctor" ? "DOCTOR" : "USER"}
        </span>
        
        <button
          onClick={openReservationModal}
          className="btn btn-info mt-4 massegeBtn"
        >
          View My Reservations
        </button>
        <ReservationModal
          open={reservationModalOpen}
          close={closeReservationModal}
          header="예약 확인 : 리스트 클릭시 상세보기 / 상태 바꾸기"
        />
        <div className="item mt-4">
          <span>Email</span>
          <p className="m-0">{userList.users.email}</p>
        </div>
        <div className="item mt-3">
          <span>Phone Number</span>
          <p className="m-0">{userList.users.phone}</p>
        </div>
        <div className="item mt-3">
          <span>ID</span>
          <p className="m-0">{userList.users.id}</p>
        </div>
        {userList.users.type === "doctor" ? (
          !userList.users.division ? (
            <>
              <div
                className="item pointer empty mt-3"
                onClick={() => {
                  openModal();
                }}
              >
                <span>소속</span>
                <p className="m-0 d-flex align-items-center">
                  소속 등록 하기
                  <FontAwesomeIcon className="ml-2" icon={faPlusCircle} />
                </p>
              </div>
              <Modal
                setModalOpen={setModalOpen}
                open={modalOpen}
                close={closeModal}
                header="소속 등록"
                setUserList={setUserList}
              />
            </>
          ) : (
            <div className="item mt-3">
              <span className="d-flex align-items-center">
                소속
                <button
                  className="ml-3 badge badge-dark"
                  onClick={() => {
                    openModal();
                  }}
                >
                  소속변경
                </button>
              </span>
              <p className="m-0 d-flex align-items-center">
                {!division ? null : division.name}
              </p>
              <Modal
                setModalOpen={setModalOpen}
                open={modalOpen}
                close={closeModal}
                header="소속 등록"
                setUserList={setUserList}
              />
            </div>
          )
        ) : null}
        {userList.users.type === "doctor" ? (
          !userList.users.major ? (
            <>
              <div className="item mt-3 empty pointer" onClick={openMajorModal}>
                <span>전공 </span>
                <p className="m-0">
                  전공 등록 하기
                  <FontAwesomeIcon className="ml-2" icon={faPlusCircle} />
                </p>
              </div>
              <MajorModal
                setUserList={setUserList}
                open={majorModalOpen}
                close={closeMajorModal}
                header="전공 등록"
              />
            </>
          ) : (
            <div className="item mt-3">
              <span>
                전공{" "}
                <button
                  className="ml-3 badge badge-dark"
                  onClick={() => {
                    openMajorModal();
                  }}
                >
                  소속변경
                </button>
              </span>
              <p className="m-0">{userList.users.major}</p>
              <MajorModal
                setUserList={setUserList}
                open={majorModalOpen}
                close={closeMajorModal}
                header="전공 등록"
              />
            </div>
          )
        ) : null}
      </div>
      <style jsx>{ProfileStyle}</style>
    </div>
  );
};

export default Profile;
