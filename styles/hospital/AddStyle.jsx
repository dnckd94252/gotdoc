import css from "styled-jsx/css";
const AddStyle = css`
  #add .title h3 {
    font-family: "notoBold";
    color: #555;
  }
  #add form {
    border-radius: 10px;
    background-color: #fff;
    box-shadow: 30px 10px 64px -18px rgb(94 94 94 / 15%);
  }
  #add form input[type="text"],
  #add form input[type="password"],
  #add form input[type="number"],
  #add form textarea,
  #add form input[type="datetime-local"] {
    background-color: #f6f7fa;
    padding: 10px 10px;
    border: 2px solid #e7edfa;
    border-radius: 10px;
    font-weight: "bold";
    width: 300px;
  }
  #add form span {
    color: #3d232f;
    font-family: "notoBold";
  }
  #add form .preview {
    width: 250px;
    color: #fff;
    height: 250px;
    background-color: #333;
    border-radius: 20px;
    margin-top: 10px;
  }
  #add form .preview h5 {
    word-break: keep-all;
    font-size: 18px;
    text-align: center;
    color: #aaa;
  }
  #add form .item button {
    background-color: var(--point-blue);
    border: none;
  }
`;
export default AddStyle;