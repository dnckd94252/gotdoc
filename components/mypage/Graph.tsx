import GraphStyle from "../../styles/mypage/GraphStyle";
import axios from "axios";
import { useState, useEffect } from "react";

const Graph = (props:any) => {
  const { list, user } = props;
  const [message, setMessage] = useState<number>(0);
  const [reviewCnt , setReviewCnt] = useState(0);

  useEffect(() => {
    axios.post("/api/chat/list", { user }).then(res => {
      setMessage(res.data.length);
    });
    axios.post('/api/review/able',{users : user}).then(res => {
      const data = res.data;
      setReviewCnt(data.length);
    })
  }, []);
  
  return (
    <div className="graph d-flex align-items-center justify-content-between">
      <div className="item blue d-flex justify-content-between flex-column  mr-3">
        <h3>{list.length}</h3>
        <div className="d-flex align-items-end justify-content-between">
          <div className="text">
            <h5>예약 스케줄</h5>
            <span>-나의 예약</span>
          </div>
          <div className="chart d-flex align-items-end">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
      <div className="item red d-flex justify-content-between flex-column ml-3 mr-3">
        <h3>{reviewCnt}</h3>
        <div className="d-flex align-items-end justify-content-between">
          <div className="text">
            <h5>작성가능 리뷰</h5>
            <span>-병원리뷰</span>
          </div>
          <div className="chart d-flex align-items-end">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
      <div className="item green d-flex justify-content-between flex-column ml-3">
        <h3>{message}</h3>
        <div className="d-flex align-items-end justify-content-between">
          <div className="text">
            <h5>진행중인 채팅</h5>
            <span>-병원채팅</span>
          </div>
          <div className="chart d-flex align-items-end">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </div>

      <style jsx>{GraphStyle}</style>
    </div>
  );
};

export default Graph;
