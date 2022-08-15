import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import ContentsStyle from "../../styles/Review/ContentsStyle";
const ContentsItem = (props:any) => {
  const { item } = props;
  const date = new Date(item.created_at);
  const starIconArr = [1, 2, 3, 4, 5];
  
  return (
    <div className="item position-relative m-4 p-4">
      <div className="img position-absolute">
        <Image
          src={`/api/profile/${item.photo}`}
          width={80}
          height={80}
          objectFit="cover"
          style={{ borderRadius: "10px" }}
        />
      </div>
      <div className="text p-3">
        <div className="user d-flex align-items-center justify-content-between">
          <h3>{item.name}</h3>
          <div className="star d-flex align-items-center">
            {starIconArr.map((stars, i) => {
              return (
                <FontAwesomeIcon
                  key={i}
                  icon={faStar}
                  style={{ color: item.star >= stars ? "#ffaf13" : "#e0e0e0" }}
                />
              );
            })}
          </div>
        </div>
        <div className="d-flex align-items-center date mb-3">
          <span>{date.getFullYear()}.{date.getMonth()+1}.{date.getDate()}</span>
          <div className="bar w-100"></div>
        </div>
        <div className="content">
          <h5>{item.title}</h5>
          <span>
            {item.content}
          </span>
        </div>
      </div>
      <style jsx>{ContentsStyle}</style>
    </div>
  );
};
export default ContentsItem;
