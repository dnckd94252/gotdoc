import ModalStyle from "../../styles/hospital/ModalStyle";
import DivisionModalStyle from "../../styles/mypage/DivisionModalStyle";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useRef, useState } from "react";
import Image from "next/image";
import axios from "axios";
import { useSelector } from "react-redux";

const Modal = (props:any) => {
  const { open, close, header, setUserList } = props;
  const inputRef = useRef<any>();
  const [list, setList] = useState<any>();
  const { users } = useSelector((state:any) => state.usersList);

  const searchAction = async (e: any) => {
    e.preventDefault();
    const search = inputRef.current.value;
    const val = {
      page: 1,
      search,
    };
    await axios.post("/api/hospital/list", val).then(res => {
      setList(res.data);
    });
  };

  const divisionAction = async (division: number) => {
    const val = {
      division,
      id: users.id,
    };
    await axios.post("/api/user/division", val).then(res => {
      const data = res.data;
      if (data === "success") {
        const userList = {
          users: {
            id: users.id,
            pw: users.pw,
            email: users.email,
            phone: users.phone,
            division: division,
            type: users.type,
            photo: users.photo,
          },
        };
        setUserList(userList);
        close();
      }
    });
  };

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
              <form
                className="d-flex  align-items-center justify-content-between overflow-hidden border"
                onSubmit={searchAction}
                style={{ borderRadius: "100px", height: 50 }}
              >
                <input
                  type="text"
                  style={{ width: "100%", height: "100%", border: "none" }}
                  className="ml-2"
                  placeholder="예) 서울아산병원 or 주소"
                  ref={inputRef}
                />
                <button
                  type="submit"
                  className="p-3"
                  style={{ backgroundColor: "rgba(0,0,0,0)" }}
                >
                  <FontAwesomeIcon icon={faMagnifyingGlass} />
                </button>
              </form>
              <div className="contents mt-3">
                {!list
                  ? null
                  : list.map((item:any, i:number) => (
                      <div
                        key={i}
                        onClick={async () => {
                          await divisionAction(item.id);
                        }}
                        className="item pointer justify-content-between d-flex align-items-center"
                      >
                        <div className="img">
                          <Image
                            src={`/api/hospital/${item.photo}`}
                            width={100}
                            height={80}
                            objectFit="cover"
                          />
                        </div>
                        <div className="text">
                          <h4>{item.name}</h4>
                          <span>{item.address}</span>
                        </div>
                      </div>
                    ))}
              </div>
            </div>
          </main>
        </section>
      ) : null}
      <style jsx>{ModalStyle}</style>
      <style jsx>{DivisionModalStyle}</style>
    </div>
  );
};

export default Modal;
