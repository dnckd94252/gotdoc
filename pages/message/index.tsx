import { useEffect, useState } from "react";
import { io } from "socket.io-client";
import { useSelector } from "react-redux";
import ChatList from "../../components/message/ChatList";
import Chat from "../../components/message/Chat";
import MessageStyle from "../../styles/message/MessageStyle";
import axios from "axios";
import { getList, getComment } from "../../fnc/chat";

const Message = () => {
  const userList = useSelector((state: any) => state.usersList);
  const url = "https://gotdoc-server.herokuapp.com";
  const [follow, setFollow] = useState();
  const [active, setActive] = useState(null);
  const [activeUser, setActiveUser] = useState(null);
  const [from, setFrom] = useState(null);
  const [socket, setSocket] = useState<any>(
    io(url, { transports: ["websocket"] })
  );
  const [msg, setMsg] = useState([]);

  useEffect(() => {
    if (!userList.users) return;
    const val = {
      user: userList.users,
    };
    getList(val, setFollow);

    socket.on("join", async (req: any) => {
      const val = {
        room: req.room,
        user: userList.users,
      };
      await getComment(val, setMsg);
    });
  }, [userList]);

  useEffect(() => {
    if (!active) return;
    socket.emit("join", { active, from });
    setFrom(active);
  }, [active]);

  return (
    <section id="message" className=" container ">
      <div className="contents d-flex ">
        <ChatList
          setActive={setActive}
          setActiveUser={setActiveUser}
          follow={follow}
          user={userList.users}
        />
        <Chat
          active={active}
          activeUser={activeUser}
          msg={msg}
          setMsg={setMsg}
          socket={socket}
        />
      </div>
      <style jsx>{MessageStyle}</style>
    </section>
  );
};

export default Message;
