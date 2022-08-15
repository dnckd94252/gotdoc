import axios from "axios";

export const getList = async (val: any, setFollow: any) => {
  await axios.post("/api/chat/list", val).then(res => {
    const data = res.data;
    setFollow(data);
  });
};

export const addChat = async (val: any) => {
  await axios.post("/api/chat/add", val).then(res => {});
};

export const getRoom = async (val: any, setRoom: any) => {
  await axios.post("/api/chat/room", val).then(res => {
    setRoom(res.data);
  });
}; 

export const comment = async (item: any) => {
  axios.post("/api/chat/comment", item);
};

export const getComment = async (val: any, setMsg: any) => {
  axios.post("/api/chat/getComment", val).then(res => {
    setMsg(res.data);
  });
};