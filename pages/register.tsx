import RegisterStyle from "../styles/RegisterStyle";
import { pickPicture , registerAction , phoneChange } from "../fnc/register";
import { useState, useRef } from "react";

const Register = () => {
  const [profile, setProfile] = useState<any>();
  const phoneRef = useRef<any>();

  const profileImg = async () => {
    const val: boolean | string = await pickPicture();
    if (val) setProfile(val);
  };

  return (
    <section
      id="register"
      className="d-flex pt-5 pb-5 align-items-center justify-content-center"
    >
      <form className="form">
        <div className="formItem mb-3">
          <p>프로필 사진</p>
          <div className="d-flex align-items-start  justify-content-between mt-3 photo">
            <button className="btn btn-dark" type="button" onClick={profileImg}>
              사진 선택
            </button>
            <div className="photoBlock">
              {!profile ? null : (
                <img
                  src={profile}
                  style={{ width: 200, height: 200, objectFit: "cover" }}
                />
              )}
            </div>
          </div>
        </div>
        <div className="d-flex align-items-center justify-content-between">
          <div className="formItem">
            <p className="m-0 mb-2">이름 :</p>
            <input
              type="text"
              required
              placeholder="이름을 입력해주세요."
              name="name"
            />
          </div>
          <div className="formItem">
            <p className="m-0 mb-2">아이디 :</p>
            <input
              type="text"
              required
              placeholder="아이디를 입력해주세요."
              name="id"
            />
          </div>
        </div>
        <div className="formItem mt-4">
          <p className="m-0 mb-2">비밀번호 :</p>
          <input
            required
            type="password"
            className="w-100"
            name="pw"
            placeholder="비밀번호를 입력해주세요."
          />
        </div>
        <div className="formItem mt-4">
          <p className="m-0 mb-2">비밀번호 확인 :</p>
          <input
            required
            type="password"
            className="w-100"
            name="pwCheck"
            placeholder="비밀번호를 확인해주세요."
          />
        </div>
        <div className="formItem mt-4">
          <p className="m-0 mb-2">이메일 :</p>
          <input
            required
            type="text"
            className="w-100"
            placeholder="이메일을 입력해주세요."
            name="email"
          />
        </div>
        <div className="formItem mt-4">
          <p className="m-0 mb-2">전화번호 :</p>
          <input
            required
            type="text"
            maxLength={13}
            className="w-100"
            placeholder="전화번호를 입력해주세요."
            ref={phoneRef}
            onChange={() => {
              phoneChange(phoneRef);
            }}
            name="phone"
          />
        </div>
        <div className="d-flex formItem mt-4 flex-column justify-content-center">
          <p>유저 종류 :</p>
          <div className="radioItem d-flex align-items-center">
            <input
              type="radio"
              defaultChecked
              name="type"
              value="user"
              id="radio1"
            />
            <label htmlFor="radio1" className="m-0 ml-2">
              일반 고객
            </label>
          </div>
          <div className="radioItem d-flex align-items-center">
            <input
              type="radio"
              name="type"
              value="user"
              id="radio2"
            />
            <label htmlFor="radio2" className="m-0 ml-2">
              의사 / 병원
            </label>
          </div>
        </div>
  
        <button className="btn btn-danger registerBtn w-100 pt-3 pb-3 mt-5" onClick={() => {
          registerAction(profile);
        }} type="button" >
          회원가입
        </button>
      </form>
      <style jsx>{RegisterStyle}</style>
    </section>
  );
};

export default Register;
