import css from "styled-jsx/css";
const ChatRoomStyle = css`
  .chat-room {
    height: 600px;
    overflow-y: scroll;
    width: 100%;
  }
  .chat-room::-webkit-scrollbar{
    display: none;
  } 
  .chat-room .img {
    width: 40px;
    height: 40px;
    border-radius: 100%;
    overflow: hidden;
  }
  .chat-room .text .content {
    max-width: 400px;
    background-color: var(--point-blue);
    padding: 20px;
    margin-left: 10px;
    border-radius: 10px 10px 10px 0;
  }
  .chat-room .text .content p {
    color: #fff;
    font-size: 19px;
    word-break: break-all;
}

  .chat-room .item .time {
    font-family: "notoBold";
    color: #999;
  }
  .chat-room .item.me .content {
    border-radius: 10px 10px 0 10px;
    background-color: #f0f0f6;
  }
  .chat-room .item.me .content p {
    color: #555;
  }
`;
export default ChatRoomStyle;
