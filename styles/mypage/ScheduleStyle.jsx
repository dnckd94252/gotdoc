import css from "styled-jsx/css";

const ScheduleStyle = css`
  .schedule {
    background-color: #fff;
    margin-top: 30px;
    box-shadow: 3.8px 7.5px 7.5px hsl(0deg 0% 0% / 0.08);
    border-radius: 20px;
    height: 600px;
  }
  .schedule .title p {
    font-family: "notoBold";
    font-size: 20px;
  }
  .schedule .title {
    border-bottom: 1px solid #ddd;
  }

  .schedule .check {
    color: #989ea7;
    width: 170px;
    box-shadow: 0px 0px 7px hsl(0deg 0% 0% / 0.15);
    border-radius: 20px;
  }
  .schedule .items .item .date h4 {
    font-family: "notoBlack";
  }
  .schedule .items .item .date h5 {
    font-family: "notoBold";
    color: #777;
  }
  .schedule .items .item .calendar {
    width: 300px;
  }
  .schedule .items .item .calendar h4 {
    font-family: "notoBold";
    color: #333;
    font-size: 20px;
  }
  .schedule .items .item .calendar h5 {
    font-family: "notoBold";
    color: #888;
    font-size: 18px;
  }
  .schedule .items .item .tag {
    padding: 10px 20px;
    background-color: #f9ebe3;
    border-radius: 15px;
    
  }
  .schedule .items .item .tag span {
    color : #f57732;
  }
  .schedule .items .item .money h4 {
    font-size: 20px;
    font-family:'notoBold';
    letter-spacing: 1px;
  }
  .schedule .items .item .money span {
    color: #888;
  }
`;

export default ScheduleStyle;
