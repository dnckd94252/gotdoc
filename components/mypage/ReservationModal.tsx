import ModalStyle from "../../styles/hospital/ModalStyle";
import ReservationModalStyle from "../../styles/mypage/ReservationModalStyle";
import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import ReservationModalItem from "./ReservationModalItem";

const ReservationModal = (props:any) => {
  const { open, close, header } = props;
  const [reservationList, setReservationList] = useState([]);
  const { users } = useSelector((state:any) => state.usersList);
  
  const getReservation = async () => {
    await axios.post("/api/reservation/mine", { users }).then(res => {
      setReservationList(res.data);
    });
  };

  useEffect(() => {
    if (!users) return;
    getReservation();
  }, [users]);

  return (
    <div className={open ? "openModal modal" : "modal"}>
      {open ? (
        <section>
          <header>
            {header}
            <button className="close" onClick={close}>
              &times;
            </button>
          </header>
          <main>
            <div>
              <div className="contents">
                {reservationList.map((item, i: number) => (
                  <ReservationModalItem item={item} key={i} />
                ))}
              </div>
            </div>
          </main>
        </section>
      ) : null}
      <style jsx>{ModalStyle}</style>
      <style jsx>{ReservationModalStyle}</style>
    </div>
  );
};

export default ReservationModal;
