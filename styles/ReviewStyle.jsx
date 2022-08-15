import css from "styled-jsx/css";

const ReviewStyle = css`
  #review {
    height: 100vh;
    background-color: #222;
  }
  #review .head {
    padding-top: 150px;
  }
  #review .title h3 {
    font-family: "notoBlack";
    font-size: 70px;
    color: #fff;
  }
  #review .title b {
    font-family: "notoBlack";
    font-size: 70px;
    color: var(--point-blue);
  }
  #review .head button {
    width: 70px;
    height: 70px;
  }
  #review .head button:hover {
    background-color: var(--point-blue);
  }
  #review .contents .item {
    width: 550px;
    height: 350px;
    margin-right: 30px;
    background-color: #343a40;
    padding: 40px;
    border-radius: 10px;
    transition: .3s;
  }
  #review .contents .item:hover{
    background-color: var(--point-blue);
    transform: translateY(-30px);
  } 
  #review .contents .item .itemText {
    color: #eee;
    font-size: 20px;
    height: 170px;
    letter-spacing: -1px;
  }
  #review .contents .item .img {
    width: 70px;
    height: 70px;
    border-radius: 100%;
    overflow: hidden;
  }
  #review .contents .item h5 {
    font-family: "notoBold";
    font-size: 22px;
    color: #fff;
  }
  #review .contents .item .introduce span {
    color: #aaa;
    font-size: 16px;
    font-family: "notoRegular";
    letter-spacing: 0;
  }
`;

export default ReviewStyle;