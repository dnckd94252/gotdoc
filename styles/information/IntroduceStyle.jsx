import css from "styled-jsx/css";
const IntroduceStyle = css`
  .introduce .title {
    height: 100px;
    width: 99%;
    background-color: #fff;
    border: 1px solid #ddd;
  }
  .introduce .title h4 {
    color: #555;
    top: 5px;
    position: relative;
    border-bottom: 5px solid var(--point-blue);
    font-family: "notoBold";
  }
  .introduce .contents {
    border: 1px solid #ddd;
    width: 99%;
    background-color: #fff;
  }
  .introduce .contents .item {
    width: 380px;
    margin: 10px;
    height: 120px;
  }
  .introduce .contents .item .itemTitle h5 {
    font-family: "notoBold";
    color: #777;
  }

  .introduce .contents .item .text {
    background-color: #fbfdff;
    border-radius: 10px;
    border: 2px solid #eef0f1;
  }
  .introduce .contents .item span {
    color :#344062;
    font-family: 'notoBold';
    letter-spacing: 2px ;
  }
`;
export default IntroduceStyle;
