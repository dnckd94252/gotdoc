import css from "styled-jsx/css";
const LoginStyle = css`
  #login .form {
    width: 500px;
    height: 600px;
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 30px 10px 64px -18px rgb(94 94 94 / 35%);
    padding: 40px;
  }
  #login .form h5 {
    font-family: "notoBlack";
    font-size: 42px;
  }
  #login .form input {
    width: 100%;
    background-color: #f6f7fa;
    padding: 10px 10px;
    border: 2px solid #e7edfa;
    border-radius: 10px;
    font-weight: "bold";
  }
  #login .form p {
    color: #3d232f;
    font-family: "notoBold";
  }
  #login .register {
    color: var(--point-blue);
    font-weight: bold;
  }
`;
export default LoginStyle;
