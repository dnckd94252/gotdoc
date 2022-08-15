import LoginStyle from "../styles/LoginStyle";
import Image from "next/image";
import Link from "next/link";
import { loginAction , loginCheck} from "../fnc/login";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import Router from "next/router";

const Login = () => {
  const dispatch = useDispatch();
  const userList = useSelector((state:any) => state.usersList);

  const pageMove = () => {
    const loginCheck = userList.users;
    if(!loginCheck || loginCheck.length <= 0) {
      return;
    }else {
      alert('로그인이 완료되었습니다.');
      return Router.push("/");
    }
  }
  
  useEffect(() => {
    pageMove();
  },[userList])

  return (
    <section
      id="login"
      className="vh-100 container d-flex align-items-center justify-content-center"
    >
      <form
        className="form"
        onSubmit={e => {
          e.preventDefault();
        }}
      >
        <div className="logo mt-5 d-flex align-items-center justify-content-center">
          <Image src={"/api/logo.png"} width={60} height={60} />
          <h5 className="m-0 ml-3 font-weight-bold">GotDoc</h5>
        </div>
        <div className="inputBox mt-4">
          <p className="m-0">Id</p>
          <input type="text" name="id" placeholder="Enter your Id" />
        </div>
        <div className="inputBox mt-4">
          <p className="m-0">Set Password</p>
          <input type="password" name="pw" placeholder="Enter Password" />
        </div>
        <button
          className="btn btn-dark w-100 mt-5 pt-3 pb-3 mb-3"
          onClick={async () => {
            await loginAction();
            await loginCheck(dispatch);
          }}
        >
          Login
        </button>
        <Link href="/register">
          <a className="register">아직 회원이 아니신가요?</a>
        </Link>
      </form>
      <style jsx>{LoginStyle}</style>
    </section>
  );
};

export default Login;
