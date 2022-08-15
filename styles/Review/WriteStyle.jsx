import css from "styled-jsx/css";
const WriteStyle = css`
  .form {
    width: 600px;
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 30px 10px 64px -18px rgb(94 94 94 / 15%);
  }
  #write .title h3{
    font-family: 'notoBold';
  }
   #write form span {
    color: #3d232f;
    font-family: "notoBold";
  }
  #write form input[type="text"],
  #write form select,
  #write form input[type="password"],
  #write form input[type="number"],
  #write form textarea,
  #write form input[type="datetime-local"] {
    background-color: #f6f7fa;
    padding: 10px 10px;
    border: 2px solid #e7edfa;
    border-radius: 10px;
    font-weight: "bold";
  }
  #write button[type="submit"] {
    background-color: var(--point-blue);
  }
  #write .star {
    color: #aaa;
    }
`;
export default WriteStyle;