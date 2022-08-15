import WriteStyle from "../../styles/Review/WriteStyle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import { useRef } from "react";

const Write = () => {
  const [star, setStar] = useState(0);
  const [able, setAble] = useState([]);
  const starScoreArrayForMap = [1, 2, 3, 4, 5];
  const { users } = useSelector((state: any) => state.usersList);
  const router = useRouter();
  const inputRef = useRef<any>();
  const selectRef = useRef<any>();
  const contentRef = useRef<any>();

  const writeAction = async (e: any) => {
    e.preventDefault();
    const title: any = inputRef.current.value;
    const reservationId: any = Number(selectRef.current.value);
    const content: any = contentRef.current.value;
    const postVal = {
      title,
      reservationId,
      content,
      star,
      id: users.id,
    };
    if (!postVal.id) {
      alert("로그인 이후 이용 가능한 서비스입니다.");
      return router.push("/login");
    }
    if (
      !postVal.title ||
      !postVal.reservationId ||
      !postVal.content ||
      !postVal.star
    )
      return alert("모든 값을 입력해주세요.");
    await axios.post("/api/review/write", postVal).then(res => {
      const data = res.data;
      if (data === "success") {
        alert("리뷰를 작성했습니다.");
        return router.push("/review");
      }
    });
  };

  useEffect(() => {
    if (!users) return;
    axios.post("/api/review/able", { users }).then(res => {
      setAble(res.data);
    });
  }, [users]);

  return (
    <section
      id="write"
      className="container pt-5 d-flex align-items-center pt-5 pb-5 justify-content-center flex-column"
    >
      <div className="form mt-5 p-3">
        <form onSubmit={writeAction}>
          <div className="title d-flex justify-content-center">
            <h3>Write Your Review</h3>
          </div>
          <div className="item mt-3 d-flex w-100 flex-column">
            <span>글제목</span>
            <input
              required
              className="form-control pt-3 pb-3"
              type="text"
              name="name"
              ref={inputRef}
              placeholder="이름을 입력해주세요."
            />
          </div>
          <div className="item mt-3 d-flex w-100 flex-column">
            <span>리뷰 대상</span>
            <select ref={selectRef}>
              {able.map((item: any, i: number) => {
                const date = new Date(item.time);
                return (
                  <option key={i} value={item.id}>
                    {date.getFullYear()}.{date.getMonth() + 1}.{date.getDate()}{" "}
                    {item.name} 선생님 진찰
                  </option>
                );
              })}
            </select>
          </div>
          <div className="item mt-3 d-flex w-100 flex-column">
            <span>글내용</span>
            <textarea
              placeholder="200자 이내로 리뷰 작성해주세요."
              maxLength={200}
              required
              ref={contentRef}
            ></textarea>
          </div>
          <div className="item mt-3 d-flex w-100 flex-column">
            <span>별점</span>
            <div className="d-flex justify-content-center star align-items-center">
              {starScoreArrayForMap.map((item: number, i: number) => {
                return star >= item ? (
                  <FontAwesomeIcon
                    key={i}
                    icon={faStar}
                    style={{ color: "#ffaf13" }}
                    className="pointer"
                    size="2x"
                    onClick={() => {
                      setStar(item);
                    }}
                  />
                ) : (
                  <FontAwesomeIcon
                    key={i}
                    icon={faStar}
                    className="pointer"
                    size="2x"
                    onClick={() => {
                      setStar(item);
                    }}
                  />
                );
              })}
            </div>
          </div>
          <button type="submit" className="btn btn-info w-100 mt-3">
            작성
          </button>
        </form>
      </div>
      <style jsx>{WriteStyle}</style>
    </section>
  );
};
export default Write;
