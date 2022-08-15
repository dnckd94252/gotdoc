import Image from "next/image";
import ChatListStyle from "../../styles/message/ChatListStyle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";
import { getComment } from "../../fnc/chat";

const ChatRoomItem = (props:any) => {
  const { itemData, item, setActive, setActiveUser } = props;
  const [msg, setMsg] = useState<any>();

  const clickActive = () => {
    setActive(item.id);
    setActiveUser(itemData);
  };

  useEffect(() => {
    const room = `room${item.id}`;
    getComment({ room }, setMsg);
  }, []);

  const last = !msg || msg.length <= 0 ? null : msg[msg.length - 1];

  return (
    <div
      onClick={clickActive}
      className="item pointer border-bottom d-flex justify-content-between align-items-center"
    >
      <div className="img">
        <Image
          src={`/api/profile/${itemData.photo}`}
          width={70}
          height={70}
          objectFit="cover"
        />
      </div>
      <div className="text">
        <div className="name d-flex align-items-center justify-content-between">
          <span>{itemData.name}</span>
          <p>
            {!last
              ? "Not yet"
              : new Date(last["created_at"]).getMonth() +
                1 +
                `-` +
                new Date(last["created_at"]).getDate() +
                ` ` +
                new Date(last["created_at"]).getHours() +
                `:` +
                new Date(last["created_at"]).getMinutes()}
          </p>
        </div>
        <div className="content d-flex align-items-center mt-3 justify-content-between">
          <span>{!last ? "채팅을 시작해주세요." : last["content"]}</span>
          <div className="notice d-flex align-items-center justify-content-center">
            <FontAwesomeIcon icon={faArrowRight} />
          </div>
        </div>
      </div>
      <style jsx>{ChatListStyle}</style>
    </div>
  );
};

export default ChatRoomItem;
