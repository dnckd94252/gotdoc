import css from "styled-jsx/css";

const HeaderStyle = css`
  header {
    z-index: 100;
    width: 100%;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  }
  header .logo h4 {
    font-family: "notoBlack";
  }
  header .menu {
    width: 350px;
    font-family: "notoBlack";
    color: #555;
    background-color: "#fdfd";
  }
  header a {
    transition: 0.3s;
  }
  header a:hover {
    color: var(--point-blue);
    text-decoration: none;
  }
  header  button {
    border-radius: 100px;
    width: 140px;
    height: 40px;
    background-color: var(--point-blue);
    border: none;
  }

  header .afterLogin button.icon {
    width: 50px;
    height: 50px;
  }

  header button.button-border {
    background-color: #fafafa;
    border: 1px solid var(--point-red);
    color: var(--point-red);
  }
  
  header button.button-border:hover {
    background-color: var(--point-red);
  }
  
  header button:hover {
    background-color: var(--point-sea);
    color: #fff;
  }
`;

export default HeaderStyle;
