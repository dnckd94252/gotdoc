import Image from "next/image";
import HeaderStyle from "../../styles/HeaderStyle";
import Link from "next/link";
import {  loginCheck , logout } from "../../fnc/login";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser , faMessage } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const dispatch = useDispatch();
  const userList = useSelector((state:any) => state.usersList);
  const logoutAction = async (dis:any = dispatch) => {
    await logout(dispatch);
    alert('로그아웃 되었습니다.');
    return loginCheck(dispatch);
  }
  
  useEffect(() => {
    loginCheck(dispatch);
  }, [dispatch]);
  
  return (
    <header>
      <div className="d-flex align-items-center justify-content-between container pt-4 pb-4">
        <Link href="/">
          <a>
            <div className="d-flex logo align-items-center">
              <Image
                src="/api/logo.png"
                width={40}
                height={40}
              />
              <h4 className="m-0 ml-2 font-weight-bold">GotDoc</h4>
            </div>
          </a>
        </Link>

        <div className="d-flex align-items-center justify-content-between menu">
          <Link href="/doctor">
            <a className=" font-weight-bold m-0">DOCTOR</a>
          </Link>
          <Link href="/review">
            <a className=" font-weight-bold m-0">REVIEW</a>
          </Link>
          <Link href="/hospital">
            <a className=" font-weight-bold m-0">HOSPITAL</a>
          </Link>
        </div>
        {!userList.users || userList.users.length <= 0 ? (
          <div className="d-flex align-items-center unLogin util">
            <Link href="/login">
              <a>
                <button className="btn btn-info pl-3 pr-3 button">
                  로그인
                </button>
              </a>
            </Link>
            <Link href="/register">
              <a>
                <button className="btn btn-info pl-3 pr-3 button-border button ml-3">
                  회원가입
                </button>
              </a>
            </Link>
          </div>
        ) : (
          <div className="d-flex afterLogin align-items-center util">
            <Link href="/mypage">
              <a>
                <button className="btn btn-info button icon">
                  <FontAwesomeIcon icon={faUser} />
                </button>
              </a>
            </Link>
            <Link href="/message">
              <a>
                <button className="btn btn-info ml-3 button icon">
                  <FontAwesomeIcon icon={faMessage} />
                </button>
              </a>
            </Link>
            <button
              className="btn btn-info pl-3 pr-3 button-border button ml-3"
              onClick={logoutAction}
            >
              로그아웃
            </button>
          </div>
        )}
      </div>
      <style jsx>{HeaderStyle}</style>
    </header>
  );
};

export default Header;
