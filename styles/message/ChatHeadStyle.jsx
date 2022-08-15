import css from "styled-jsx/css";
const ChatHeadStyle = css`
  .chat-head {
    height: 70px;
    width: 100%;
    border-radius: 10px;
    box-shadow: 0px 0px 10px rgb(0 0 0 / 10%);
  }
  .chat-head .info .img {
    width: 50px;
    height: 50px;
    border-radius: 100%;
    overflow: hidden;
  }
  .chat-head .info .text h5 {
    color: #333;
    font-family: "notoBold";
  }
  .chat-head .info .text span {
    color: #999;
  }
  .chat-head .buttons button {
    background-color: #f4f4fa;
    border: none;
    width: 55px;
    height: 55px;
    border-radius: 100%;
    color: #c5c5d6;
  }
`;
export default ChatHeadStyle;
