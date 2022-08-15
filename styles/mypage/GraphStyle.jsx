import css from "styled-jsx/css";
const GraphStyle = css`
  .graph .item {
    background-color: #fff;
    width: 330px;
    height: 200px;
    border-radius: 20px;
    padding: 20px;
    box-shadow: 3.8px 7.5px 7.5px hsl(0deg 0% 0% / 0.08);
  }
  .graph .item h3 {
    font-size: 40px;
    font-family: "notoBlack";
  }
  .graph .item.blue h3 {
    color: var(--point-blue);
  }
  .graph .item.red h3 {
    color: var(--point-red);
  }
  .graph .item.green h3 {
    color: var(--point-yellow);
  }

  .graph .item .text h5 {
    color: #696b6f;
    font-family: "notoBold";
  }
  .graph .item .text span {
    color: #989ea7;
  }
  .graph .item .chart div {
    width: 15px;
    height: 100px;
    margin-left: 5px;
    border-radius: 5px;
  }
  .graph .item.blue .chart div {
    background-color: var(--point-blue);
  }
  .graph .item.red .chart div {
    background-color: var(--point-red);
  }
  .graph .item.green .chart div {
    background-color: var(--point-yellow);
  }
  .graph .item .chart div:nth-child(1) {
    height: 30px;
    opacity: 0.3;
  }
  .graph .item .chart div:nth-child(2) {
    height: 80px;
    opacity: 0.3;
  }
  .graph .item .chart div:nth-child(3) {
    height: 60px;
    opacity: 0.3;
  }
  .graph .item .chart div:nth-child(4) {
    height: 50px;
    opacity: 0.3;
  }
`;
export default GraphStyle;
