import { useRouter } from "next/router";
import InformationStyle from "../../styles/InformationStyle";
import { getDoctor } from "../../fnc/doctor";
import { useEffect, useState } from "react";
import Loading from "../../components/Loading";
import HeadLine from "../../components/doctor/information/HeadLine";
import Profile from "../../components/doctor/information/Profile";
import Introduce from "../../components/doctor/information/Introduce";
import axios from "axios";

const Information = () => {
  const router = useRouter();
  const { pid }: any = router.query;
  const [info, setInfo] = useState<any>();
  const [hospital , setHospital] = useState();

  const getHospital = async () => {
    if(!info.division) return;
    await axios.post('/api/hospital/show',{pid:info.division}).then(res => {
      setHospital(res.data);
    });
  }

  useEffect(() => {
    if (!pid) return;
    getDoctor(pid, setInfo);
  }, [pid]);

  useEffect(() => {
    if(!info) return;
    getHospital();
  },[info])

  return !info ? (
    <Loading />
  ) : (
    <section id="information" className="container pt-5 ">
      <HeadLine info={info} />
      <div className="contents  justify-content-between d-flex mt-5">
        <Profile info={info}  />
        <Introduce info={info} hospital={hospital} />
      </div>
      <style jsx>{InformationStyle}</style>
    </section>
  );
};

export default Information;
