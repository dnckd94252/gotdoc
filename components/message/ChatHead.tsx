import ChatHeadStyle from "../../styles/message/ChatHeadStyle";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook , faArrowPointer } from "@fortawesome/free-solid-svg-icons";
const ChatHead = (props:any) => {
  const activeUser = props.activeUser;  

  return (
    <div className="d-flex justify-content-between m-3 align-items-center chat-head">
      <div className="info d-flex align-items-center ml-4 mr-4">
        <div className="img">
          <Image
            src={`/api/profile/${activeUser.photo}`}
            width={50}
            height={50}
            objectFit="cover"
          />
        </div>
        <div className="text ml-4">
          <h5 className="m-0">{activeUser.name}</h5>
          <span>{activeUser.email}</span>
        </div>
      </div>
      <div className="buttons d-flex align-items-center mr-4">
        <button className="btn btn-dark d-flex align-items-center justify-content-center">
          <FontAwesomeIcon icon={faBook} size="2x" />
        </button>
        <button className="btn ml-3 btn-dark d-flex align-items-center justify-content-center">
          <FontAwesomeIcon icon={faArrowPointer} size="2x" />
        </button>
      </div>
      <style jsx>{ChatHeadStyle}</style>
    </div>
  );
};
export default ChatHead;
