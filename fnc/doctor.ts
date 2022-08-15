import axios from "axios";

export const pages = async (setNum: any, page: any, search: any) => {
  const postVal = {
    page,
    search,
  };
  await axios.post("/api/doctor/page", postVal).then(res => {
    const pageCnt = Math.ceil(res.data.length / 10);
    let arr = [];
    for (let i = 1; i <= pageCnt; i++) {
      arr.push(i);
    }
    setNum(arr);
  });
};

export const getDoctor = async (id: string, setInfo: any) => {
  const { data } = await axios.post("/api/doctor/get", { id });
  setInfo(data);
};

export const getHeartList = async (id: string, setHeart: any) => {
  const val = {
    id,
  };
  const { data } = await axios.post("/api/doctor/getHeart", val);
  setHeart(data);
};
