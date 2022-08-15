import css from "styled-jsx/css";

const FooterStyle = css`
  footer {
    background-color: #fff;
    height: 500px;
  }
  footer .logo h5 {
    font-family: "notoBlack";
    letter-spacing: 1px;
    font-size: 25px;
    color: #222;
  }
  footer .left p {
    font-size: 25px;
    font-family: "notoBold";
    color: #555;
    width: 600px;
  }
  footer .right {
    width: 250px;
  }
  footer .right .item {
    padding: 20px;
    background-color: #eee;
    border-radius: 10px;
  }
  footer .copyright p {
    color: #999;
    font-size: 18px;
    margin: 0;
  }
  footer .copyright .last{
    width: 400px;
  } 
  footer .copyright .bar {
    width: 2px;
    height: 20px;
    background-color: #aaa;
  }
`;

export default FooterStyle;
