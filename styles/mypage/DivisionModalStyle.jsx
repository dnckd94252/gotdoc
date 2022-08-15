import css from "styled-jsx/css";
const DivisionModalStyle = css`
  .modal .contents {
    height: 400px;
    overflow-y: scroll;
  }
  .modal .contents::-webkit-scrollbar {
    display: none;
  }
  .modal .contents .item {
    padding: 10px;
    border-radius: 10px;
    border-bottom: 1px solid #ddd;
    transition: 0.2s;
  }
  .modal .contents .item:hover {
    background-color: var(--point-blue);
  }
  .modal .contents .item:hover h4 {
    color: #fff;
  }
  .modal .contents .item:hover .text span {
    color: #eee;
  }
  .modal .contents .item .text {
    width: 270px;
  }
  .modal .contents .item .text h4 {
    font-family: "notoBlack";
    margin: 0;
  }
  .modal .contents .item .text span {
    font-weight: bold;
    color: #888;
  }
  .modal .contents .item .img {
    border-radius: 10px;
    overflow: hidden;
    width: 100px;
    height: 80px;
  }
`;
export default DivisionModalStyle;
