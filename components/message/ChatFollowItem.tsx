import { addChat , getRoom } from "../../fnc/chat";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import ChatListStyle from "../../styles/message/ChatListStyle";

const ChatFollowItem = (props:any) => {
    const item = props.item;    
    const user = props.user;
    const setRoom = props.setRoom;
    const check = props.check;
    
    return (
      <div
        className="item pointer border-bottom d-flex justify-content-between align-items-center"
      >
        <div className="img">
          <Image
            src={`/api/profile/${item.photo}`}
            width={70}
            height={70}
            objectFit="cover"
          />
        </div>
        <div className="text">
          <div className="name d-flex align-items-center justify-content-between">
            <span>{item.name}</span>
            {!check ? (
              <button
                className="btn btn-info"
                onClick={async () => {
                  await addChat({ item, user });
                  await getRoom(user, setRoom);
                }}
              >
                채팅 추가
                <FontAwesomeIcon className="ml-2" icon={faCirclePlus} />
              </button>
            ) : (
              <button className="btn btn-info" disabled>
                채팅 추가함
              </button>
            )}
          </div>
          <div className="content d-flex align-items-center mt-3 justify-content-between">
            <span>Doctor</span>
          </div>
        </div>
        <style jsx>{ChatListStyle}</style>
      </div>
    );
}

export default ChatFollowItem;