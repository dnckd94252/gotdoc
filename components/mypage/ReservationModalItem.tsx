import Image from "next/image";
import ReservationModalStyle from "../../styles/mypage/ReservationModalStyle";
import axios from "axios";

const ReservationModalItem = (props:any) => {
  const { item } = props;

  const selectStateReservation = async (e: any) => {
    const val = e.target.value;
    await axios.post("/api/reservation/update", { val , id:item.id }).then(res => {
      console.log(res.data);
    });
  };

  return (
    <div
      className="item pointer d-flex align-items-center justify-content-between"
    >
      <div className="img">
        <Image
          src={`/api/profile/${item.photo}`}
          width={60}
          height={60}
          objectFit="cover"
        />
      </div>
      <div className="text">
        <h5>{item.name}</h5>
        <span>{item.main_address}</span>
      </div>
      <div className="select">
        <select
          onChange={selectStateReservation}
          defaultValue={`${item.check_val}`}
        >
          <option value="none">신청대기중</option>
          <option value="wait">진료대기중</option>
          <option value="success">진료완료</option>
        </select>
      </div>
      <style jsx>{ReservationModalStyle}</style>
    </div>
  );
};
export default ReservationModalItem;
