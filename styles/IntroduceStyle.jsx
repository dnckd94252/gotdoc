import css from "styled-jsx/css";

const IntroduceStyle = css`
  #introduce {
    background-color: #222222;
  }
  #introduce .option {
    height: 700px;
  }
  #introduce .option .optionItem {
    width: 300px;
    height: 300px;
    background-color: #444444;
    border-radius: 15px;
    transition: 0.3s;
  }
  #introduce .option .optionItem:hover {
    background-color: var(--point-blue);
    transform: translateY(-20px);
  }
  #introduce .option .optionItem .icon {
    width: 100px;
    height: 100px;
    color: var(--point-blue);
    background-color: #ffffff;
    border-radius: 15px;
    box-shadow: 30px 24px 64px -18px rgb(94 94 94 / 65%);
  }

  #introduce .contentItem{
    opacity: 1 !important;
    transform: translateY(0) !important;
  }
  
  #introduce .option .optionItem h5 {
    font-size: 25px;
    font-family: "notoBold";
    font-weight: 500;
    margin-top: 20px;
    color: #ffffff;
    margin-bottom: 30px;
  }

  #introduce .option .optionItem span {
    color: #ccc;
  }

  #introduce .legend .locationItem {
    background-color: #fff;
    border-radius: 10px;
    width: 600px;
    box-shadow: 30px 24px 64px -18px rgb(94 94 94 / 35%);
    margin-right: 30px;
  }

  #introduce .legend .locationItem h5 {
    font-weight: 800;
    font-family: "notoBlack";
    font-size: 20px;
  }
  #introduce .legend .locationItem p {
    font-weight: bold;
  }

  #introduce .legend .locationItem p b {
    font-family: "notoBlack";
    font-size: 18px;
    font-weight: "bold";
    color: var(--point-red);
  }

  #introduce .legend .options .item {
    width: 200px;
    color: var(--point-blue);
  }
  #introduce .legend .options .item span {
    color: #999;
    font-size: 20px;
  }
`;

export default IntroduceStyle;
