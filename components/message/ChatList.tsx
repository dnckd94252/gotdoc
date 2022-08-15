import ChatListStyle from "../../styles/message/ChatListStyle";

import { useState, useEffect } from "react";
import { getRoom } from "../../fnc/chat";
import ChatFollowItem from "./ChatFollowItem";
import ChatRoomItem from "./ChatRoomItem";

const ChatList = (props:any) => {
  const follow = props.follow;
  const user = props.user;
  const setActive = props.setActive;
  const setActiveUser = props.setActiveUser;
  const [room, setRoom] = useState<any>();
  
  useEffect(() => {
    if (!user) return;
    getRoom(user, setRoom);
  }, [user]);

  return (
    <div className="list p-4 col-4">
      <div className="title d-flex align-items-center">
        <h3>Messages</h3>
      </div>
      <div className="contents pr-2">
        <div className="follow">
          {!follow || follow.length <= 0 ? null : (
            <h5 className="titleText">Follow</h5>
          )}
          {!follow || follow.length <= 0 || !room
            ? null
            : follow.map((item:any, i:number) => {
                const check = room['find'].find((ele:any) => {
                  if (
                    ele.user_id === item.user_id &&
                    ele.doctor_id === item.follow_id
                  )
                    return true;
                  else if (
                    ele.doctor_id === item.user_id &&
                    ele.user_id === item.follow_id
                  )
                    return true;
                  else return false;
                });
                return (
                  <ChatFollowItem
                    key={i}
                    check={check}
                    item={item}
                    user={user}
                    setRoom={setRoom}
                  />
                );
              })}
        </div>
        <div className="follow mt-5">
          <h5 className="titleText">Chat Rooms</h5>
          {!room || room['find'].length <= 0
            ? null
            : room['find'].map((item:any, i:number) => {
                const check = item.user_id === user.id ? true : false;
                const itemData = check
                  ? room['doctor'].find((ele:any) => ele.id === item.doctor_id)
                  : room['user'].find((ele:any) => ele.id === item.user_id);
                return <ChatRoomItem key={i} setActiveUser={setActiveUser} setActive={setActive} item={item} itemData={itemData} />;
              })}
        </div>
      </div>
      <style jsx>{ChatListStyle}</style>
    </div>
  );
};

export default ChatList;
