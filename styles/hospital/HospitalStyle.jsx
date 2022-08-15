import css from "styled-jsx/css";
const HospitalStyle = css`
  #hospital .title h3 {
    font-family: "notoBold";
    font-size: 40px;
  }
  #hospital .title input {
    width: 400px;
    background-color: #fff;
    border: none;
  }
  #hospital .title .search {
    background-color: #fff;
    border: 1px solid #eee;
    border-radius: 100px;
    overflow: hidden;
    width: 600px;
    height: 60px;
    box-shadow: 3.8px 7.5px 7.5px hsl(0deg 0% 0% / 0.08);
  }
  #hospital .title .search button {
    background-color: #fff;
    border: none;
    color: #aaa;
  }

  #hospital .contents {
    height: 1900px;
    width: 1440px;
  }

  #hospital .contents .locationItem {
    background-color: #fff;
    border-radius: 10px;
    width: 400px;
    box-shadow: 30px 24px 64px -18px rgb(94 94 94 / 35%);
    margin-right: 30px;
  }

  #hospital .contents .locationItem h5 {
    font-weight: 800;
    font-family: "notoBlack";
    font-size: 20px;
  }
  #hospital .contents .locationItem p {
    font-weight: bold;
  }

  #hospital .contents .locationItem p b {
    font-family: "notoBlack";
    font-size: 18px;
    font-weight: "bold";
    color: var(--point-red);
  }

  #hospital .contents .option .item {
    width: 120px;
    color: var(--point-blue);
  }
  #hospital .contents .option .item span {
    color: #999;
  }
  #hospital .plus button {
    border-radius: 100px;
  }
  #hospital .page .pageItem {
    width: 30px;

    cursor: pointer;
    height: 30px;
    padding: 10px 20px;
    font-family: "notoBold";
    margin: 5px;
    color: #555;
    border-radius: 10px;
  }
  #hospital .page .pageItem.active {
    background-color: var(--point-blue);
    color: #fff;
  }
`;
export default HospitalStyle;
