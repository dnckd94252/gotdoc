import ChatFormStyle from "../../styles/message/ChatFormStyle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperclip, faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import axios from "axios";

const ChatForm = (props: any) => {
  const socket = props.socket;
  const [val, setVal] = useState("");
  const userList = useSelector((state:any) => state.usersList);

  const submitAction = async (e: any) => {
    e.preventDefault();
    const time = Date.now();
    socket.emit("msg", { user: userList["users"], val, time });
    setVal("");
  };

  const valChange = (e:any) => {
    setVal(e.target.value);
  };

  return (
    <div className="chat-form d-flex justify-content-between m-3 w-100 align-items-center">
      <form onSubmit={submitAction} className="d-flex align-items-center">
        <div className="form d-flex align-items-center pt-3 pb-3 pl-3 pr-3 justify-content-between">
          <input
            type="text"
            placeholder="Type yout message..."
            value={val}
            onChange={valChange}
          />
          <div className="button d-flex align-items-center">
            <FontAwesomeIcon icon={faPaperclip} className="pointer" />
          </div>
        </div>
        <button className="ml-4 ">
          <FontAwesomeIcon icon={faPaperPlane} size="2x" />
        </button>
      </form>
      <style jsx>{ChatFormStyle}</style>
    </div>
  );
};
export default ChatForm;
