import css from "styled-jsx/css";

const ContactStyle = css`
  #contact {
    background-color: var(--point-blue);
  }
  #contact .title h1 {
    color: #fff;
    font-family: "notoBlack";
    font-size: 60px;
    letter-spacing: 2px;
  }
  #contact .email input {
    width: 500px;
    border: none;
    border-radius: 100px;
    height: 70px;
    padding: 20px;
    font-size: 20px;
  }
  #contact .email button {
    border-radius: 100px;
    height: 70px;
    width: 200px;
    background-color: #000;
  }
`;

export default ContactStyle;
