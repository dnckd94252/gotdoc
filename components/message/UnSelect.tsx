import UnSelectStyle from "../../styles/message/UnSelectStyle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faHandPointLeft
} from "@fortawesome/free-solid-svg-icons";
const UnSelect = () => {
  return (
    <div className="unSelect h-100 w-100 d-flex align-items-center justify-content-center flex-column">
        <FontAwesomeIcon icon={faHandPointLeft} size="10x" className="mb-4" />
      <h1>채팅방을 선택해주세요.</h1>
      <style jsx>{UnSelectStyle}</style>
    </div>
  );
};

export default UnSelect;
