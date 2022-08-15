import Image from "next/image";
import SuccessStyle from "../../styles/SuccessStyle";
import Link from "next/link";

const Success = () => {
  return (
    <section
      id="success"
      className="container d-flex align-items-center justify-content-center vh-100"
    >
      <div className="contents d-flex justify-content-center flex-column align-items-center">
        <Image
          src={"/api/register/medal.png"}
          width={410}
          height={330}
          objectFit="cover"
        />
        <div className="text mt-5 d-flex align-items-center flex-column justify-content-center">
          <h2>축하합니다.</h2>
          <h2>회원가입이 완료되었습니다.</h2>
          <span className="mt-3">
            메인페이지로 이동한뒤 컨텐츠를 이용해주세요. 컨텐츠 이용에
            감사드립니다.
          </span>
        </div>
        <div className="buttons d-flex align-items-center mt-5 justify-content-between">
          <Link href="/">
            <button className="btn btn-danger pt-3 pb-3 m-3 main">
              메인페이지
            </button>
          </Link>
          <Link href="/login">
            <button className="btn btn-danger pt-3 pb-3 m-3 login">
              로그인
            </button>
          </Link>
        </div>
      </div>
      <style jsx>{SuccessStyle}</style>
    </section>
  );
};

export default Success;
