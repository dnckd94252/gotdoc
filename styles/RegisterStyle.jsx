import css from "styled-jsx/css";
const RegisterStyle = css`
  #register {
    height: 1300px;
  } 
  #register .form {
    width: 500px;
    height: 1100px;
    background-color: #fff;
    padding: 40px;
    box-shadow: 30px 10px 64px -18px rgb(94 94 94 / 35%);
    border-radius: 10px;
  }

  #register .form .formItem input[type="text"],
  #register .form .formItem input[type="password"] {
    width: 200px;
    background-color: #f6f7fa;
    padding: 10px 10px;
    border: 2px solid #e7edfa;
    border-radius: 10px;
    font-weight: "bold";
  }

  #register .form label {
    font-family: "notoBold";
    letter-spacing: 1px;
  }
  #register .form .formItem p {
    color: #3d232f;
    font-family: "notoBold";
  }
  #register .form .registerBtn {
    background-color: var(--point-blue);
    border: none;
  }
  #register .form .registerBtn:hover {
    background-color: var(--point-yellow);
  }
  #register .photoBlock {
    width: 200px;
    height: 200px;
    background-color: #e7edfa;
    border-radius: 10px;
    overflow: hidden;
  }
`;
export default RegisterStyle;
