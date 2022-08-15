import css from "styled-jsx/css";
const ProcessStyle = css`
  #process .title {
    height: 500px;
  }
  #process .title h3 {
    font-family: "notoBlack";
    font-size: 60px;
  }
  #process .title b {
    font-family: "notoBlack";
    font-size: 60px;
    color: #aaa;
  }
  #process .contents .item {
    height: 500px;
    margin-top: 100px;
    margin-bottom: 100px;
  }
  #process .contents .item .text h4 {
    width: 60px;
    height: 60px;
    border-radius: 5px;
    background-color: #222;
    color: #fff;
    font-family: "notoBlack";
    font-size: 30px;
    margin: 0;
  }
  #process .contents .item .text h3 {
    width: 700px;
    font-size: 50px;
    font-family: "notoBlack";
    color: #333;
  }

  #process .contents .item .text p {
    font-size: 20px;
    width: 550px;
    font-family: "notoBold";
    color: #888;
  }
  #process .contents .item .text .more {
    color: var(--point-blue);
    font-weight: bold;
    font-size: 20px;
  }
  #process .contents .item .img {
    background-color: #eeeeee;
    border-radius: 20px;
    height: 500px;
  }
  #process .showTitle {
   opacity: 1 !important;
   transform: translateY(0) !important;
  }
`;
export default ProcessStyle;
