import ScheduleStyle from "../../styles/mypage/ScheduleStyle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";

const Schedule = (props:any) => {
  const {list} = props;
  const { users } = useSelector((state: any) => state.usersList);
  
  return (
    <div className="schedule p-4">
      <div className="title">
        <p>최신 스케줄</p>
      </div>
      <div className="check mt-3 ml-3 justify-content-center p-3 d-flex align-items-center">
        <p className="m-0 mr-2">All Time (5)</p>
        <FontAwesomeIcon icon={faStar} />
      </div>
      <div className="d-flex align-items-center flex-column items">
        {list.map((item: any, i: number) => {
          const date = new Date(item.time);
          const createDate = new Date(item.created_at);
          return (
            <div
              key={i}
              className="item d-flex align-items-center justify-content-between w-100 p-2 border-bottom"
            >
              <div className="date d-flex align-items-center justify-content-center flex-column">
                <h4>{date.getDate()}일</h4>
                <h5>{date.getMonth() + 1}월</h5>
              </div>
              <div className="calendar d-flex  justify-content-center flex-column">
                <h4 className="mb-1">
                  {users.id === item.id
                    ? `${item.reservation_name}님 진찰`
                    : `${item.user_name} 선생님 진찰`}
                </h4>
                <h5>
                  {date.getHours()} : {date.getMinutes()}
                </h5>
              </div>
              <div className="tag d-flex  justify-content-center flex-column">
                <span>
                  {item.check_val === "none"
                    ? "신청중..."
                    : item.check_val === "wait"
                    ? "진료대기중"
                    : "확인완료"}
                </span>
              </div>
              <div className="money d-flex align-items-end  justify-content-center flex-column">
                <h4 className="m-0">작성날짜</h4>
                <span>
                  {createDate.getFullYear()}-{createDate.getMonth() + 1}-
                  {createDate.getDate()}
                </span>
              </div>
            </div>
          );
        })}
      </div>
      <style jsx>{ScheduleStyle}</style>
    </div>
  );
};

export default Schedule;
