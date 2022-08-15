import axios from "axios";

export const followCheck = async (info: any, user: any, setFollow: any) => {
  const val = {
    info,
    user,
  };
  const { data } = await axios.post("/api/follow/check", val);
  return setFollow(data);
};

export const followClick = async (info: any, user: any, setFollow: any) => {
  const val = {
    user,
    info,
  };
  const { data } = await axios.post("/api/follow/click", val);
  if (data !== "success")
    return alert("오류가 발생했습니다. 다시 시도해 주세요.");
  followCheck(info, user, setFollow);
};