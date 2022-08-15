import css from "styled-jsx/css";
const ShowStyle = css`
  #show .back {
    color: var(--point-blue);
    font-weight: bold;
    font-size: 20px;
    letter-spacing: 1px;
  }
  #show .title {
    font-weight: bold;
    font-family: "notoBlack";
    font-size: 40px;
  }
  #show .contents .subTitle h5{
    color: #777;
    font-weight: bold;
  } 
  #show .contents .subTitle button {
    color: var(--point-blue);
    transition: 0.2s;
    border: 1px solid var(--point-blue);
    background-color: #f8f6ff;
  }
  #show .contents .subTitle button:hover {
    background-color: var(--point-blue);
    color: #fff;
  }
  #show .contents .img {
    border-radius: 20px;
    overflow: hidden;
  }
  #show .contents .img img {
    box-shadow: 0px 0px 40px -18px rgb(94 94 94 / 30%);
  }
  #show .contents .item {
    background-color: #fff;
    width: 100%;
    height: 230px;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0px 0px 40px -18px rgb(94 94 94 / 30%);
  }
  #show .contents .item .imgBox {
    border-radius: 100%;
    overflow: hidden;
    width: 70px;
  }
  #show .contents .item .bar {
    width: 150px;
    height: 2px;
    border-radius: 100px;
    background-color: #ddd;
  }
  #show .contents .item h5 {
    font-family: "notoBlack";
  }
  #show .contents .item span {
    color: #aaa;
  }
  #show .contents .item .badge {
    background-color: var(--point-blue);
    color: #fff;
    padding: 10px 20px;
    font-size: 15px;
    border-radius: 100px;
  }
`;
export default ShowStyle;
