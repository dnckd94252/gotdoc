import css from "styled-jsx/css";
const ReservationModalStyle = css`
  .modal .contents {
    height: 400px;
    overflow-y: scroll;
  }
  .modal .contents::-webkit-scrollbar {
    background-color: #fff;
    width: 10px;
  }
  .modal .contents::-webkit-scrollbar-thumb {
    background-color: #666;
    border-radius: 10px;
  }

  .modal .contents .item {
    padding: 10px 10px;
    transition: 0.2s;
    border-bottom: 1px solid #ddd;
  }

  .modal .contents .item:hover {
    background-color: var(--point-blue);
  }
  .modal .contents .item:hover .text h5 {
    color: #fff;
  }
  .modal .contents .item:hover .text span {
    color: #ddd;
  }
  .modal .contents .item .img {
    width: 60px;
    height: 60px;
    border-radius: 100px;
    overflow: hidden;
  }

  .modal .contents .item .text {
    width: 200px;
  }
  .modal .contents .item .text h5 {
    font-family: "notoBlack";
    color: #333;
  }
  .modal .contents .item .text span {
    font-family: "notoBold";
    color: #888;
  }
  .modal .contents .item select {
    border: 1px solid #aaa;
    padding: 5px 10px;
    border-radius: 100px;
  }
`;
export default ReservationModalStyle;
