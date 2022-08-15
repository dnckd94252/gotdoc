import AddStyle from "../../styles/hospital/AddStyle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import {pickPicture} from "../../fnc/register.js";
import React, { useState, useRef } from "react";
import axios from "axios";
import Modal from "../../components/hospital/Modal";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";

const Add = () => {
  const [picture, setPicture] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const addressRef = useRef<any>();
  const userList = useSelector((state: any) => state.usersList);
  const router = useRouter();
  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };
  const addAction = async (e: any) => {
    e.preventDefault();
    const input: any = document.getElementsByTagName("input");
    const value: any = {
      address: input.address.value,
      name: input.name.value,
      rooms: input.room.value,
      picture,
      user_id: userList.users.id,
    };

    for (let i in value) {
      const item = value[i];
      if (!item) return alert("모든 값을 채워주세요.");
    }
    await axios.post("/api/hospital/add", value).then((res: any) => {
      if (res.data === "success") {
        alert("등록이 완료되었습니다.");
        router.push("/hospital");
      } else alert("잠시후 다시 시도해주세요.");
    });
  };

  const addPhoto = async () => {
    const photo: any = await pickPicture();
    setPicture(photo);
  };

  return (
    <section
      id="add"
      className="container d-flex align-items-center pt-5 pb-5 justify-content-center flex-column"
    >
      <div className="title d-flex align-items-center mt-5">
        <h3>Add Hospital Information</h3>
      </div>
      <Modal
        open={modalOpen}
        close={closeModal}
        header="주소 선택"
        addressRef={addressRef}
        setModalOpen={setModalOpen}
      >
        함수형 모달 팝업창입니다. 쉽게 만들 수 있어요. 같이 만들어봐요!
      </Modal>
      <form onSubmit={addAction} className="mt-3 p-5">
        <div className="item d-flex w-100 flex-column ml-2 mr-2">
          <span>병원 이름</span>
          <input
            required
            className="form-control pt-3 pb-3"
            type="text"
            name="name"
            placeholder="이름을 입력해주세요."
          />
        </div>
        <div className="item mt-3 d-flex flex-column ml-2 mr-2">
          <div className="d-flex align-items-center mb-3">
            <span>주소</span>
            <button
              onClick={openModal}
              className="btn btn-info ml-3"
              type="button"
            >
              주소 입력
            </button>
          </div>
          <input
            ref={addressRef}
            required
            className="form-control pt-3 pb-3"
            type="text"
            name="address"
            placeholder="주소를 입력해주세요."
            disabled
          />
        </div>
        <div className="item mt-3 d-flex flex-column ml-2 mr-2">
          <span>방 개수</span>
          <input
            required
            className="form-control pt-3 pb-3"
            type="number"
            name="room"
            placeholder="방개수를 입력해주세요."
          />
        </div>
        <div className="item mt-4 d-flex justify-content-center align-items-center flex-column ml-2 mr-2">
          <div className="d-flex align-items-center">
            <span>대표 사진</span>
            <button
              type="button"
              className="btn btn-info ml-3"
              onClick={addPhoto}
            >
              사진 추가
            </button>
          </div>
          <div className="preview d-flex align-items-center justify-content-center overflow-hidden">
            {picture ? (
              <img
                src={picture}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            ) : (
              <div className="d-flex align-items-center justify-content-center flex-column">
                <FontAwesomeIcon icon={faPlus} size="3x" />
                <h5 className="mt-3 pl-3 pr-3">
                  jpg , png 등 이미지 파일을 올려주세요
                </h5>
              </div>
            )}
          </div>
        </div>

        <button className="btn btn-primary w-100 mt-5">병원 추가</button>
      </form>
      <style jsx>{AddStyle}</style>
    </section>
  );
};

export default Add;
