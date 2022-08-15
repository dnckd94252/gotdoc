import IntroduceStyle from "../../../styles/information/IntroduceStyle";
// import Reservation from "./Reservation";

const Introduce = (props:any) => {
  const {info , hospital} = props;
  
  return (
    <div className="introduce d-flex align-items-center flex-column col-8">
      <div className="title d-flex align-items-center pl-5 ">
        <h4 className="h-100 d-flex align-items-center  pr-3 pl-3">
          Information (의사 정보)
        </h4>
      </div>
      <div className="contents d-flex flex-wrap justify-content-center pl-5 pr-5">
        <div className="item d-flex flex-column justify-content-center pb-4 mt-5 mb-3">
          <div className="itemTitle">
            <h5>Full Name</h5>
          </div>
          <div className="text pl-4 pt-3 pb-3">
            <span>{info.name}</span>
          </div>
        </div>
        <div className="item d-flex flex-column justify-content-center pb-4 mt-5 mb-3">
          <div className="itemTitle">
            <h5>Phone Number</h5>
          </div>
          <div className="text pl-4 pt-3 pb-3">
            <span>{info.phone}</span>
          </div>
        </div>
        <div className="item d-flex flex-column justify-content-center pb-4 mt-3 mb-3">
          <div className="itemTitle">
            <h5>Email address</h5>
          </div>
          <div className="text pl-4 pt-3 pb-3">
            <span>{info.email}</span>
          </div>
        </div>
        <div className="item d-flex flex-column justify-content-center pb-4 mt-3 mb-3">
          <div className="itemTitle">
            <h5>Doctor Major</h5>
          </div>
          <div className="text pl-4 pt-3 pb-3">
            <span>{!info.major ? '미등록' : info.major}</span>
          </div>
        </div>
        <div className="item d-flex flex-column justify-content-center pb-4 mt-3 mb-3">
          <div className="itemTitle">
            <h5>Affiliated Hospital</h5>
          </div>
          <div className="text pl-4 pt-3 pb-3">
            <span>{!hospital ? '소속 병원 없음' : hospital.name}</span>
          </div>
        </div>
        <div className="item d-flex flex-column justify-content-center pb-4 mt-3 mb-3">
          <div className="itemTitle">
            <h5>Reviews Received</h5>
          </div>
          <div className="text pl-4 pt-3 pb-3">
            <span>0</span>
          </div>
        </div>
        
      </div>
      <style jsx>{IntroduceStyle}</style>
    </div>
  );
};

export default Introduce;
