import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { getDoctor } from "../../../fnc/doctor";
import reservationStyle from "../../../styles/reservationStyle";
import { useSelector } from "react-redux";
import { insert } from "../../../fnc/reservation";

const Reservation = () => {
  const router = useRouter();
  const { pid }: any = router.query;
  const [info, setInfo] = useState<any>();
  const userList = useSelector((state: any) => state.usersList);

  const reviewActive = async (e:any) => {
    e.preventDefault();
    const input: any = document.getElementsByTagName("input");
    const textarea: any = document.getElementsByTagName("textarea");
    const val = {
      firstName: input.firstName.value,
      lastName: input.lastName.value,
      email: input.email.value,
      mainAddress: input.mainAddress.value,
      subAddress: input.subAddress.value,
      symptom: textarea.symptom.value,
      doctor: input.doctor.value,
      time: input.time.value,
      userId: userList.users.id,
      doctorId: info.id,
    };
    if (
      !val.firstName ||
      !val.lastName ||
      !val.email ||
      !val.mainAddress ||
      !val.subAddress ||
      !val.symptom ||
      !val.doctor ||
      !val.time ||
      !val.userId ||
      !val.doctorId
    )
      return alert("모든 값을 기입해주세요.");
    await insert(val);
    return router.push(`/doctor/${info.id}`);
  };

  useEffect(() => {
    if (!pid) return;
    getDoctor(pid, setInfo);
  }, [pid]);

  return (
    <section
      id="reservation"
      className="container pt-5 d-flex align-items-center justify-content-center"
    >
      <div className="form p-5">
        <form onSubmit={reviewActive}>
          <div className="name d-flex align-items-center w-100 justify-content-between">
            <div className="item d-flex flex-column w-100 ml-2 mr-2">
              <span>성</span>
              <input
                required
                className="form-control pt-3 pb-3"
                placeholder="성을 입력해주세요."
                type="text"
                name="firstName"
              />
            </div>
            <div className="item d-flex w-100 flex-column ml-2 mr-2">
              <span>이름</span>
              <input
                required
                className="form-control pt-3 pb-3"
                type="text"
                name="lastName"
                placeholder="이름을 입력해주세요."
              />
            </div>
          </div>
          <div className="item d-flex flex-column ml-2 mr-2">
            <span>이메일</span>
            <input
              required
              className="form-control pt-3 pb-3"
              type="text"
              name="email"
              placeholder="이메일을 입력해주세요."
            />
          </div>
          <div className="address mt-4">
            <div className="item d-flex flex-column ml-2 mr-2">
              <span>집 주소</span>
              <input
                required
                className="form-control pt-3 pb-3"
                type="text"
                name="mainAddress"
                placeholder="집 주소를 입력해주세요."
              />
            </div>
            <div className="item d-flex flex-column ml-2 mr-2">
              <span>상세주소</span>
              <input
                required
                className="form-control pt-3 pb-3"
                type="text"
                name="subAddress"
                placeholder="상세주소를 입력해주세요."
              />
            </div>
          </div>
          <div className="item mt-5 d-flex flex-column ml-2 mr-2">
            <span>증세(간단하게 적어주세요.)</span>
            <textarea
              className="form-control pt-3 pb-3"
              name="symptom"
              placeholder="증세를 입력해주세요."
            />
          </div>
          <div className="item mt-5 d-flex flex-column ml-2 mr-2">
            <span>담당 의사</span>
            <input
              required
              className="form-control disabled pt-3 pb-3"
              type="text"
              name="doctor"
              value={!info ? "" : info.name}
              disabled
            />
          </div>
          <div className="item d-flex flex-column ml-2 mr-2">
            <span>예약 시간</span>
            <input
              required
              className="form-control pt-3 pb-3"
              type="datetime-local"
              name="time"
            />
          </div>
          <button className="btn btn-primary w-100 mt-5">진료 예약</button>
        </form>
      </div>
      <style jsx>{reservationStyle}</style>
    </section>
  );
};

export default Reservation;
