import css from "styled-jsx/css";
const ChatFormStyle = css`
  .chat-form .form {
    width: 800px;
    border: 1px solid #ddd;
    border-radius: 100px;
    color: #ddd;
  }
  .chat-form input:focus {
    outline: none;
  }
  .chat-form input {
    width: 100%;
    color: #555;
    border: none;
  }
  .chat-form input::placeholder {
    color: #aaa;
  }
  .chat-form button {
    width: 60px;
    border-radius: 100px;
    border: none;
    color: var(--point-blue);
    height: 60px;
  }
`;
export default ChatFormStyle;
