import mypageStyle from "../styles/mypage/MypageStyle";
import Profile from "../components/mypage/Profile";
import type { NextPage } from "next";
import Graph from "../components/mypage/Graph";
import Schedule from "../components/mypage/Schedule";
import { useSelector } from "react-redux";
import Loading from "../components/Loading";
import { useEffect, useState } from "react";
import axios from "axios";

const Mypage: NextPage = () => {
  const user = useSelector((state:any) => state.usersList);
  const [userList, setUserList] = useState<any>(null);
  const [list, setList] = useState([]);
  const getList = async () => {
    await axios
      .post("/api/reservation/get", { id: user.users.id })
      .then(res => {
        setList(res.data);
      });
  };
  
  useEffect(() => {
    if (!user || !user.users) return;
    setUserList(user);
    getList();
  }, [user]);

  return !userList || !userList.users ? (
    <Loading />
  ) : (
    <section id="mypage" className="container pt-5 pb-5">
      <div className="contents d-flex pt-5">
        <Profile userList={userList} setUserList={setUserList} />
        <div className="col-8">
          <Graph list={list} user={user.users} />
          <Schedule list={list} />
        </div>
      </div>
      <style jsx>{mypageStyle}</style>
    </section>
  );
};
export default Mypage;
