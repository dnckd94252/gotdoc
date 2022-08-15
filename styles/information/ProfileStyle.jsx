import css from "styled-jsx/css";
const ProfileStyle = css`
  .profile .introduce {
    background-color: #fff;
    width: 400px;
    height: 400px;
    border: 1px solid #ddd;
  }

  .profile .introduce .img {
    width: 250px;
    height: 250px;
    border-radius: 100%;
    overflow: hidden;
  }
  .profile .introduce .image h5 {
    font-family: "notoBlack";
    font-size: 23px;
  }
  .profile .introduce .image span {
    font-family: "notoBold";
    color: #aab0b7;
  }
  .profile .item {
    width: 400px;
    height: 100px;
    background-color: #fff;
    border: 1px solid #ddd;
  }
  .profile .item span {
    font-family: "notoBold";
    font-size: 18px;
    color: #777;
  }
  .profile .item .heart {
    color: var(--point-red);
  }
  .profile .item .heart p {
    font-family: "notoBold";
    font-weight: bold;
  }
  .profile .item .review {
    color: var(--point-yellow);
  }
  .profile .item .review p {
    font-family: "notoBold";
    font-weight: bold;
  }
  .profile .item.follow {
    background-color: var(--point-blue);
    color: #fff;
    transition: 0.3s;
    border: none;
  }
  .profile .item.follow.red {
    background-color: var(--point-red);
  }
  .profile .item.follow.red:hover {
    background-color: #682020;
  }
  .profile .item.follow:hover {
    background-color: #252068;
  }
  .profile .item.follow span {
    color: #fff;
  }
  .profile .item.other {
    height: 250px;
  }
  .profile .item.other button {
    background-color: #fff;
    color: #666;
    font-family: "notoBold";
    width: 250px;
    height: 60px;
    border: 1px solid #ddd;
  }
  .profile .item.other .otherBtn {
    color: var(--point-blue);
  }
`;
export default ProfileStyle;
