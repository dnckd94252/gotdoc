import css from "styled-jsx/css";

const ChatListStyle = css`
  .list {
    background-color: #f9f9fb;
  }
  .list .title {
    height: 100px;
  }
  .list .titleText {
    color: #89899b;
    font-size: 18px;
    letter-spacing: 2px;
  }
  .list .title h3 {
    font-weight: bold;
    color: var(--point-blue);
  }

  .list .contents {
    height: 700px;
    overflow-y: scroll;
  }
  .list .contents::-webkit-scrollbar {
    background-color: none;
    width: 10px;
  }
  .list .contents::-webkit-scrollbar-thumb {
    width: 5px;
    background-color: #555;
    border-radius: 100px;
  }
  .list .item {
    height: 120px;
  }
  .list .item .img {
    width: 60px;
    height: 60px;
    border-radius: 100%;
    overflow: hidden;
  }
  .list .item .text {
    width: 320px;
  }
  .list .item .text .name span {
    font-family: "notoBold";
    font-size: 20px;
  }
  .list .item .text .name button {
    background-color: var(--point-blue);
    border: none;
    border-radius: 100px;
    width: 140px;
    height: 40px;
  }

  .list .item .text .name p {
    margin: 0;
    color: #999;
  }
  .list .item .text .content span {
    color: #141535;
  }
  .list .item .text .content .notice {
    width: 30px;
    height: 30px;
    border-radius: 100%;
    background-color: var(--point-red);
    color: #fff;
  }
`;

export default ChatListStyle;
