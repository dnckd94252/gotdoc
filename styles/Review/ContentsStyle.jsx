import css from "styled-jsx/css";
const ContentsStyle = css`
  .contents .head h3 {
    font-family: "notoBlack";
    font-size: 40px;
  }
  .contents .head select {
    border: none;
    background-color: #fff;
    width: 200px;
    border-radius: 100px;
    overflow: hidden;
    padding: 10px 20px;
    box-shadow: 0 2px 4px rgb(0 0 0 / 10%), 0 8px 30px rgb(0 0 0 / 5%);
  }
  .contents .items {
    height: 580px;
  } 
  .contents .items .item {
    background-color: #fff;
    width: 410px;
    height: 250px;
    border-radius: 10px;
    box-shadow: 0 2px 4px rgb(0 0 0 / 10%), 0 8px 30px rgb(0 0 0 / 5%);
  }
  .contents .items .item .img {
    border-radius: 10px;
    width: 80px;
    box-shadow: 0 2px 4px rgb(0 0 0 / 10%), 0 8px 30px rgb(0 0 0 / 20%);
    height: 80px;
    left: -50px;
  }
  .contents .items .item .user h3 {
    font-family: "notoBlack";
    color: #333;
  }
  .contents .items .item .date {
    color: #aaa;
  }
  .contents .items .item .date .bar {
    height: 2px;
    background-color: #aaa;
    margin-left: 10px;
    border-radius: 10px;
  }
  .contents .items .item .content h5 {
    font-family: "notoBold";
    color: #777;
  }
  .contents .items .item .content span {
    color: #999;
  }
  .page .pageItem {
    width: 30px;
    cursor: pointer;
    height: 30px;
    padding: 10px 20px;
    font-family: "notoBold";
    margin: 5px;
    color: #555;
    border-radius: 10px;
  }
  .page .pageItem.active {
    background-color: var(--point-blue);
    color: #fff;
  }
`;

export default ContentsStyle;
