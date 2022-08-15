import ChatRoomStyle from "../../styles/message/ChatRoomStyle";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { useSelector } from "react-redux";

const ChatRoom = (props:any) => {
  const { msg, socket, activeUser } = props;
  const userList = useSelector((state:any) => state.usersList);
  const chatRef = useRef<any>();

  useEffect(() => {
    chatRef.current.scrollTop = chatRef.current.scrollHeight;
  }, [msg]);

  const image = (
    <Image
      src={`/api/profile/${activeUser.photo}`}
      width={60}
      height={60}
      objectFit="cover"
    />
  );

  return (
    <div ref={chatRef} className="chat-room ml-3 mr-3 d-flex flex-column">
      {msg.map((item: any, i: number) =>
        item.user_id !== userList.users.id ? (
          <div key={i} className="item mt-3">
            <div className="text d-flex align-items-end">
              <div className="img">{image}</div>
              <div className="content">
                <p className="m-0">{item.content}</p>
              </div>
            </div>
            <p className="ml-5 mt-2 mb-0 time">
              {new Date(item["created_at"]).getHours() +
                `:` +
                new Date(item["created_at"]).getMinutes()}
            </p>
          </div>
        ) : (
          <div
            key={i}
            className="item me mt-3 d-flex flex-column align-items-end"
          >
            <div className="text d-flex align-items-end">
              <div className="content">
                <p className="m-0">{item.content}</p>
              </div>
            </div>
            <p className="ml-5 mt-2 mb-0 time">
              {new Date(item["created_at"]).getHours() +
                `:` +
                new Date(item["created_at"]).getMinutes()}
            </p>
          </div>
        )
      )}
      <style jsx>{ChatRoomStyle}</style>
    </div>
  );
};
export default ChatRoom;
