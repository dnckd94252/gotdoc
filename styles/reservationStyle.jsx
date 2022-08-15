import css from "styled-jsx/css";

const reservationStyle = css`
  #reservation {
    height: 900px;
  }
  #reservation .form {
    border-radius: 10px;
    background-color: #fff;
    box-shadow: 30px 10px 64px -18px rgb(94 94 94 / 15%);
  }
  #reservation .form form {
    width: 600px;
  }
  #reservation form input[type="text"],
  #reservation form input[type="password"],
  #reservation form textarea,
  #reservation form input[type="datetime-local"] {
    background-color: #f6f7fa;
    padding: 10px 10px;
    border: 2px solid #e7edfa;
    border-radius: 10px;
    font-weight: "bold";
  }
  #reservation form span {
    color: #3d232f;
    font-family: "notoBold";
  }
`;

export default reservationStyle;
