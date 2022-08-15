import css from "styled-jsx/css";
const DoctorStlye = css`
  #doctor {
    height: 1800px;
  }
  #doctor .title h2 {
    font-weight: "bold";
    font-size: 50px;
    font-family: "notoBold";
  }
  #doctor .title p {
    color: #777;
    font-size: 20px;
  }
  #doctor .head select {
    background-color: #e7edfa;
    border: none;
    width: 200px;
    height: 50px;
    font-family: "notoBold";
    border-radius: 5px;
    color: #555;
    padding: 5px;
  }
  #doctor .head .search input[type="text"] {
    width: 300px;
    background-color: #e7edfa;
    padding: 10px 10px;
    border: 2px solid #e7edfa;
    border-radius: 10px;
    font-weight: "bold";
  }
  #doctor .head .search {
    background-color: #e7edfa;
    border-radius: 10px;
  }
  #doctor .head .search button {
    color: #555;
    background-color: #e7edfa;
    padding: 10px 10px;
    border: 2px solid #e7edfa;
    border-radius: 10px;
    font-weight: "bold";
  }

  #doctor .contents {
    height: 1150px;
  }
  #doctor .contents .name {
    width: 300px;
  }
  #doctor .contents .mail {
    width: 200px;
  }
  #doctor .contents .phoneNumber {
    width: 150px;
  }
  #doctor .contents .position {
    width: 100px;
  }
  #doctor .contents .heartCnt {
    width: 150px;
  }
  #doctor .contents .heartBtn {
    width: 200px;
  }
  #doctor .contents .tableTitle {
    border-radius: 10px;
    background-color: #eaedf1;
    border: 1px solid #ddd;
    padding: 15px 20px;
  }
  #doctor .contents .tableTitle span {
    font-family: "notoBold";
    color: #818181;
  }
  #doctor .contents .tableItem {
    padding: 15px 20px;
    border-radius: 10px;
  }
  #doctor .contents .items .tableItem:nth-child(2n) {
    background-color: #eaedf1;
  }
  #doctor .contents .tableItem .img {
    border-radius: 100%;
    overflow: hidden;
    width: 60px;
    height: 60px;
  }
  #doctor .contents .tableItem .heartItem {
    border-radius: 100px;
    background-color: #333;
    color: var(--point-red);
  }
  #doctor .contents .tableItem .heartItem span {
    color: #fff;
    font-family: "notoBold";
  }
  #doctor .contents .tableItem .heartBtn button {
    width: 50px;
    height: 50px;
    border-radius: 100%;
    background-color: #fff;
    color: var(--point-red);
    border: 1px solid var(--point-red);
  }
  #doctor .contents .tableItem .heartBtn button.active{
    background-color:var(--point-red);
    color: #fff;
  }
  #doctor .contents .tableItem .position span {
    border: 1px solid #777;
    border-radius: 100px;
    color: #777;
  }
  #doctor .contents .tableItem .name span {
    font-family: "notoBlack";
    color: #555;
    letter-spacing: 1px;
  }
  #doctor .contents .tableItem .mail span {
    font-family: "notoBold";
    color: #888;
  }
  #doctor .contents .tableItem .phoneNumber span {
    font-family: "notoBold";
    color: #888;
  }
  #doctor .page .pageItem {
    width: 30px;
    cursor: pointer;
    height: 30px;
    padding: 10px 20px;
    font-family: "notoBold";
    margin: 5px;
    color: #555;
    border-radius: 10px;
  }
  #doctor .page .pageItem.active {
    background-color: var(--point-blue);
    color: #fff;
  }
`;
export default DoctorStlye;
