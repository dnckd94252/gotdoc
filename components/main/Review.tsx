import ReviewStyle from "../../styles/ReviewStyle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";

const Review = () => {
  return (
    <section id="review" className="pageItem">
      <div className="head container d-flex align-items-end mb-5 justify-content-between">
        <div className="title">
          <h3>
            What do <b>people say</b>
          </h3>
          <h3>about us?</h3>
        </div>
        <div className="pageBtn d-flex align-items-center">
          <button className="btn btn-dark m-3 p-3">
            <FontAwesomeIcon icon={faArrowLeft} size="2x" />
          </button>
          <button className="btn btn-dark m-3 p-3">
            <FontAwesomeIcon icon={faArrowRight} size="2x" />
          </button>
        </div>
      </div>
      <div className="contents d-flex container align-items-center pt-5 mt-5">
        <div className="item">
          <p className="itemText">
            &quot;다른 치과에서 받은 교정이 마무리가 잘 안되어서 이번에
            한그루치과병원에서 클리피씨로 부분교정을 시작했어요. 비용도 생각한
            범위에서 크게 벗어나지 않았고 친절하고 꼼꼼하게 상담해주셨습니다.
            교정장치 착용 다음날은 확인 전화까지 해주시네요!&quot;
          </p>
          <div className="profile d-flex mt-5 align-items-center">
            <div className="img">
              <Image
                src="/api/review/profile1.jpg"
                objectFit="cover"
                width={70}
                height={70}
              />
            </div>
            <div className="introduce ml-3">
              <h5 className="m-0">김하준</h5>
              <span>Product Designer</span>
            </div>
          </div>
        </div>
        <div className="item">
          <p className="itemText">
            &quot;충치치료 할 게 많다고해서 인레이 행사하길래 방문했어요 근데
            치료가 딱히 필요한 게 없다고 해서 돌아왔어요 얼마나 깨질까
            걱정했는데.이렇게 양심적일수가... 앞으로 여기만 방문 할
            예정입니당&quot;
          </p>
          <div className="profile d-flex mt-5 align-items-center">
            <div className="img">
              <Image
                src="/api/review/profile2.jpg"
                objectFit="cover"
                width={70}
                height={70}
              />
            </div>
            <div className="introduce ml-3">
              <h5 className="m-0">정도현</h5>
              <span>Product Designer</span>
            </div>
          </div>
        </div>
        <div className="item">
          <p className="itemText">
            &quot;이마 많이 시려서 갔는데 잘 치료가 되었습니다. 첫번째 치료 때
            이가 계속 시렸는데 다음에 방문할 때 다시 한번 보시고 더
            치료해주샸어요. 추가비용이 발생하는줄 알았는데 추가비용없이 잘
            끝났습니다. 감사합니다.&quot;
          </p>
          <div className="profile d-flex mt-5 align-items-center">
            <div className="img">
              <Image
                src="/api/review/profile3.jpg"
                objectFit="cover"
                width={70}
                height={70}
              />
            </div>
            <div className="introduce ml-3">
              <h5 className="m-0">이서준</h5>
              <span>Product Designer</span>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{ReviewStyle}</style>
    </section>
  );
};

export default Review;
