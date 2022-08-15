import axios from "axios";

export const insert = async (val: any) => {
  await axios.post("/api/reservation", val).then(res => {
    const data = res.data;
    if (data === "success") alert("진료 신청을 완료했습니다.");
  });
};
