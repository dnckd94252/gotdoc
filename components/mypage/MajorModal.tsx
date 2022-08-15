import ModalStyle from "../../styles/hospital/ModalStyle";
import MajorModalStyle from "../../styles/mypage/MajorModalStyle";
import axios from "axios";
import { useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";

const MajorModal = (props:any) => {
  const { open, close, header, setUserList } = props;
  const inputRef = useRef<any>();
  const { users } = useSelector((state:any) => state.usersList);

  const majorAction = async (e: any) => {
    e.preventDefault();
    const val = {
      user_id: users.id,
      value: inputRef.current.value,
    };
    await axios.post("/api/doctor/major", val).then(res => {
      const data = res.data;
      if (data === "success") {
        const user = {
          users: {
            division: users.division,
            email: users.email,
            heart: users.heart,
            id: users.id,
            major: val.value,
            type: users.type,
            photo: users.photo,
          },
        };
        setUserList(user);
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
              <div className="contents">
                <form
                  className=" d-flex align-items-center justify-content-between"
                  onSubmit={majorAction}
                >
                  <input
                    type="text"
                    placeholder="예) 일반외과"
                    required
                    ref={inputRef}
                  />
                  <button className="btn btn-danger" type="submit">
                    <FontAwesomeIcon icon={faCheck} />
                  </button>
                </form>
              </div>
            </div>
          </main>
        </section>
      ) : null}
      <style jsx>{ModalStyle}</style>
      <style jsx>{MajorModalStyle}</style>
    </div>
  );
};
export default MajorModal;
