import css from "styled-jsx/css";
const VisualStyle = css`
  #visual {
    overflow-y: hidden;
    height: 100vh;
  }
  #visual .textBox {
    height: 450px;
  }
  #visual .textBox .text {
    position: absolute;
  }

  #visual .textBox .text h1 {
    font-family: "notoBold";
    font-weight: bold;
    font-size: 90px;
    -webkit-clip-path: polygon(100% 0, 100% 100%, 0 100%, 0 80%);
    transform: translateY(-50px);
    clip-path: polygon(100% 0, 100% 100%, 0 100%, 0 80%);
    opacity: 0;
    animation-timing-function: ease;
    animation: titleAnimation 4s infinite;
    animation-duration: 5s;
  }
  #visual .textBox .text:nth-child(1) h1 {
    animation: titleAnimation1 12s infinite;
  }
  #visual .textBox .text:nth-child(2) h1 {
    animation: titleAnimation2 12s infinite;
  }
  #visual .textBox .text:nth-child(3) h1 {
    animation: titleAnimation3 12s infinite;
  }

  #visual .text b {
    font-family: "notoBold";
    font-weight: bold;
    color: #999;
    font-size: 90px;
  }
  #visual .visualBtn {
    width: 250px;
    background-color: var(--point-blue);
    height: 70px;
    border-radius: 100px;
    border: none;
    box-shadow: 30px 24px 64px -18px rgb(94 94 94 / 35%);
    font-size: 22px;
  }
  #visual .visualBtn:hover {
    background-color: var(--point-sky);
  }

  #visual .utilText {
    color: #1f1f1f;
    font-family: "notoBold";
  }

  #visual .legend .contents {
    width: 400px;
  }

  #visual .legend .item h5 {
    font-family: "notoBlack";
    font-size: 40px;
    font-weight: 800;
    margin: 0;
    letter-spacing: 2px;
  }
  #visual .legend .item p {
    color: #777;
  }
  #visual .legend .bar {
    width: 3px;
    height: 50px;
    border-radius: 100px;
    background-color: #aaa;
  }
  #visual .legend .location {
    left: 50%;
    border-radius: 10px;
    transform: rotate(-20deg);
  }
  #visual .legend .locationItem {
    background-color: #fff;
    border-radius: 10px;
    width: 400px;
    box-shadow: 30px 24px 64px -18px rgb(94 94 94 / 35%);
    margin-right: 30px;
  }

  #visual .legend .locationItem h5 {
    font-weight: 800;
    font-family: "notoBlack";
    font-size: 20px;
  }
  #visual .legend .locationItem p {
    font-weight: bold;
  }

  #visual .legend .locationItem p b {
    font-family: "notoBlack";
    font-size: 18px;
    font-weight: "bold";
    color: var(--point-red);
  }

  #visual .legend .option .item {
    width: 120px;
    color: var(--point-blue);
  }
  #visual .legend .option .item span {
    color: #999;
  }

  @keyframes titleAnimation1 {
    0% {
      transform: translateY(-50px);
      opacity: 0;
      -webkit-clip-path: polygon(100% 0, 100% 100%, 0 100%, 0 80%);
      clip-path: polygon(100% 0, 100% 100%, 0 100%, 0 80%);
    }
    6.6% {
      transform: translateY(0);
      opacity: 1;
      -webkit-clip-path: polygon(100% 0, 100% 100%, 0 100%, 0 15%);
      clip-path: polygon(100% 0, 100% 100%, 0 100%, 0 15%);
    }
    26.4% {
      transform: translateY(0);
      opacity: 1;
      -webkit-clip-path: polygon(100% 0, 100% 100%, 0 100%, 0 15%);
      clip-path: polygon(100% 0, 100% 100%, 0 100%, 0 15%);
    }
    33% {
      transform: translateY(50px);
      opacity: 0;
      -webkit-clip-path: polygon(100% 0, 100% -0%, 0 100%, 0 100%);
      clip-path: polygon(100% 0, 100% -0%, 0 100%, 0 100%);
    }
  }
  @keyframes titleAnimation2 {
    0% {
      transform: translateY(-50px);
      opacity: 0;
      -webkit-clip-path: polygon(100% 0, 100% 100%, 0 100%, 0 80%);
      clip-path: polygon(100% 0, 100% 100%, 0 100%, 0 80%);
    }
    33% {
      transform: translateY(-50px);
      opacity: 0;
      -webkit-clip-path: polygon(100% 0, 100% 100%, 0 100%, 0 80%);
      clip-path: polygon(100% 0, 100% 100%, 0 100%, 0 80%);
    }
    39.6% {
      transform: translateY(0);
      opacity: 1;
      -webkit-clip-path: polygon(100% 0, 100% 100%, 0 100%, 0 15%);
      clip-path: polygon(100% 0, 100% 100%, 0 100%, 0 15%);
    }
    59.4% {
      transform: translateY(0);
      opacity: 1;
      -webkit-clip-path: polygon(100% 0, 100% 100%, 0 100%, 0 15%);
      clip-path: polygon(100% 0, 100% 100%, 0 100%, 0 15%);
    }
    66% {
      transform: translateY(50px);
      opacity: 0;
      -webkit-clip-path: polygon(100% 0, 100% -0%, 0 100%, 0 100%);
      clip-path: polygon(100% 0, 100% -0%, 0 100%, 0 100%);
    }
    100% {
      transform: translateY(50px);
      opacity: 0;
      -webkit-clip-path: polygon(100% 0, 100% -0%, 0 100%, 0 100%);
      clip-path: polygon(100% 0, 100% -0%, 0 100%, 0 100%);
    }
  }
  @keyframes titleAnimation3 {
    0% {
      transform: translateY(-50px);
      opacity: 0;
      -webkit-clip-path: polygon(100% 0, 100% 100%, 0 100%, 0 80%);
      clip-path: polygon(100% 0, 100% 100%, 0 100%, 0 80%);
    }
    66% {
      transform: translateY(-50px);
      opacity: 0;
      -webkit-clip-path: polygon(100% 0, 100% 100%, 0 100%, 0 80%);
      clip-path: polygon(100% 0, 100% 100%, 0 100%, 0 80%);
    }
    72.6% {
      transform: translateY(0);
      opacity: 1;
      -webkit-clip-path: polygon(100% 0, 100% 100%, 0 100%, 0 15%);
      clip-path: polygon(100% 0, 100% 100%, 0 100%, 0 15%);
    }
    92.4% {
      transform: translateY(0);
      opacity: 1;
      -webkit-clip-path: polygon(100% 0, 100% 100%, 0 100%, 0 15%);
      clip-path: polygon(100% 0, 100% 100%, 0 100%, 0 15%);
    }
    100% {
      transform: translateY(50px);
      opacity: 0;
      -webkit-clip-path: polygon(100% 0, 100% -0%, 0 100%, 0 100%);
      clip-path: polygon(100% 0, 100% -0%, 0 100%, 0 100%);
    }
  }
`;

export default VisualStyle;
