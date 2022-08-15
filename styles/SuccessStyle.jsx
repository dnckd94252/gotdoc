import css from "styled-jsx/css";

const SuccessStyle = css`
  #success .text h2 {
    font-family: "notoBold";
    letter-spacing: 2px;
    color: #555;
  }
  #success .text span {
    width: 400px;
    text-align: center;
    word-break: keep-all;
    font-size: 20px;
    color: #888;
  }
  #success .buttons button {
    width: 460px;
  }
  #success .buttons .login {
    background-color: #fafafa;
    color: #555;
    border: 1px solid #555;
    font-family: "notoBold";
    letter-spacing: 3px;
  }
  #success .buttons .main {
    background-color: var(--point-blue);
    border: 1px solid var(--point-blue);
    
  }
`;
export default SuccessStyle;
