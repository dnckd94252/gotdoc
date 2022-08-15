import ChatStyle from "../../styles/message/ChatStyle";
import UnSelect from "./UnSelect";
import ChatHead from "./ChatHead";
import ChatForm from "./ChatForm";
import ChatRoom from "./ChatRoom";
import { useEffect, useState } from "react";
import { comment } from "../../fnc/chat";
import { useSelector } from "react-redux";

const Chat = (props:any) => {
  const active = props.active;
  const activeUser = props.activeUser;
  const socket = props.socket;
  const msg = props.msg;
  const setMsg = props.setMsg;
  const userList = useSelector((state:any) => state.usersList);

  useEffect(() => {
    if (!socket || !userList.users) return;
    socket.on("msg", (req: any) => {
      setMsg((old: any) => [...old, req]);
      if (userList.users.id === req.user_id) comment(req.postItem);
    });
  }, [socket , userList]);
  
  return (
    <div
      id="chat"
      className="col-8 p-4 d-flex align-items-center justify-content-between flex-column"
    >
      {!active ? (
        <UnSelect />
      ) : (
        <>
          <ChatHead activeUser={activeUser} />
          <ChatRoom msg={msg} socket={socket} activeUser={activeUser} />
          <ChatForm socket={socket} />
        </>
      )}
    </div>
  );
};

export default Chat;
