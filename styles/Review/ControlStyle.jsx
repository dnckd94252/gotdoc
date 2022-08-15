import css from "styled-jsx/css";
const ControlStyle = css`
  .control {
    box-shadow: 0 2px 4px rgb(0 0 0 / 10%), 0 8px 30px rgb(0 0 0 / 5%);
    border-radius: 15px;
    background-color: #fff;
    overflow: hidden;
  }
  .control .filter .item input {
    background-color: #f5f6fb;
    border: none;
    color: #969698;
  }
  .control .head {
    height: 150px;
    background-color: #081342;
  }
  .control .head button {
    background-image: linear-gradient(120deg, #99eecd 0%, #4c38ea 100%);
    border: none;
    font-weight: bold;
    letter-spacing: 1px;
  }
  .control .filter {
    background-color: #fff;
    height: 480px;
  }
  .control .item .buttons button {
    width: 135px;
    height: 50px;
    background-color: #f5f6fb;
    color: #969698;
    border: none;
  }
  .button button {
    background-image: linear-gradient(
      to top,
      #1e3c72 0%,
      #1e3c72 1%,
      #2a5298 100%
    );
    border: none;
  }
  .control h3 {
    font-weight: bold;
    letter-spacing: 2px;
    color: #333;
  }
  .control h5 {
    font-weight: bold;
    color: #777;
  }
  .control button .active {
    border: 1px solid #333 !important;
  }
`;
export default ControlStyle;
