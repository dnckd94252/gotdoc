import css from "styled-jsx/css";

const ProfileStyle = css`
  .profile {
    background-color: #fff;
    /* height: 750px; */
    box-shadow: 3.8px 7.5px 7.5px hsl(0deg 0% 0% / 0.08);
    border-radius: 20px;
  }

  .profile .img {
    width: 160px;
    height: 160px;
    border-radius: 100%;
    overflow: hidden;
  }
  .profile .massegeBtn {
    background-color: #38a2ff;
    padding: 15px 30px;
    border-radius: 20px;
    border: none;
  }

  .profile h5 {
    font-family: "notoBlack";
    font-size: 30px;
    letter-spacing: 2px;
    margin-top: 10px;
  }
  .profile .tag {
    background-color: #ebf8ef;
    color: #72ce8f;
    font-weight: bold;
    padding: 5px 15px;
    border-radius: 100px;
  }
  .profile .item {
    width: 400px;
    background-color: #f9fafc;
    border: 1px solid #eef0f2;
    padding: 10px 30px;
    border-radius: 20px;
  }
  .profile .item span {
    color: #a8aeb6;
    font-size: 15px;
  }

  .profile .item p {
    color: #333;
    font-weight: bold;
    font-size: 20px;
  }

  .profile .item.empty {
    background-color: var(--point-blue);
  }
  .profile .item.empty span , .profile .item.empty p {
    color: #fff;
  }

`;
export default ProfileStyle;
