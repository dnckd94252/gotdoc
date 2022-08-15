import { useRouter } from "next/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleLeft,
  faShareNodes,
  faHeart,
  faEarthAmerica,
} from "@fortawesome/free-solid-svg-icons";
import ShowStyle from "../../styles/hospital/ShowStyle";
import Link from "next/link";
import Image from "next/image";
import { Map, MapMarker } from "react-kakao-maps-sdk";
import { useEffect, useState } from "react";
import axios from "axios";
import Loading from "../../components/Loading";
const Show = () => {
  const router = useRouter();
  const { pid } = router.query;
  const [state, setState] = useState<any>({
    center: { lat: 37.49676871972202, lng: 127.02474726969814 },
    isPanto: true,
  });
  const [info , setInfo] = useState<any>(null);

  const getInfo = async () => {
    await axios.post('/api/hospital/show',{pid}).then(res => {
      setInfo(res.data);
    });
  }

  useEffect(() => {
    if(!pid) return;
    getInfo();
  },[pid])

  const [searchAddress, SetSearchAddress] = useState();
  
  const SearchMap = () => {
    const geocoder = new kakao.maps.services.Geocoder();
    const callback = function (result: any, status: any) {
      if (status === kakao.maps.services.Status.OK) {
        const newSearch = result[0];
        setState({
          center: { lat: newSearch.y, lng: newSearch.x },
        });
      }
    };
    geocoder.addressSearch(`${searchAddress}`, callback);
  };

  const handleSearchAddress = (val: any) => {
    SetSearchAddress(val);
  };

  useEffect(() => {
    if(!info) return;
    handleSearchAddress(`${info.address}`);
    if (!searchAddress) return;
    setTimeout(() => {
      SearchMap();
    }, 300);
  }, [searchAddress , info]);

  return !info ? (
    <Loading />
  ) : (
    <section id="show" className="container pt-5 pb-5">
      <div className="back d-flex align-items-center mt-5">
        <Link href="/hospital">
          <a>
            <FontAwesomeIcon icon={faAngleLeft} />
            <span className="ml-3">Back to List</span>
          </a>
        </Link>
      </div>
      <div className="contents mt-3">
        <h2 className="title">{info.name}</h2>
        <div className="d-flex subTitle mb-4 align-items-center justify-content-between ">
          <h5>{info.address}</h5>
          <div className="d-flex align-items-center">
            <button className="btn btn-dark m-2">
              <FontAwesomeIcon icon={faShareNodes} />
              <span className="ml-2">Share</span>
            </button>
            <button className="btn btn-dark m-2">
              <FontAwesomeIcon icon={faHeart} />
              <span className="ml-2">Favorite</span>
            </button>
            <button className="btn btn-dark m-2">
              <FontAwesomeIcon icon={faEarthAmerica} />
              <span className="ml-2">Browsenearby listings</span>
            </button>
          </div>
        </div>
        <div className="info d-flex align-items-center">
          <div className="img col-8">
            <Image
              src={encodeURI(`/api/hospital/${info.hospital_photo}`)}
              width={950}
              objectFit="cover"
              height={500}
              className="border"
              style={{
                borderRadius: "10px",
                marginRight: "10px",
                boxShadow: "0px 0px 40px -18px rgb(94 94 94 / 30%)",
              }}
            />
          </div>
          <div className="col-4">
            <div className="item mb-3 border">
              <Map
                center={state.center}
                isPanto={state.isPanto}
                style={{ width: "100%", height: "300px" }}
                level={3}
              >
                <MapMarker position={state.center}></MapMarker>
              </Map>
            </div>
            <div className="item d-flex  align-items-center flex-column p-4 mt-3">
              <div className="profile d-flex align-items-center justify-content-center">
                <div className="bar"></div>
                <div className="imgBox ml-3 d-flex align-items-center justify-content-center mr-3">
                  <Image
                    src={`/api/profile/${info.user_photo}`}
                    width={70}
                    objectFit="cover"
                    height={70}
                  />
                </div>
                <div className="bar"></div>
              </div>
              <h5 className="m-2">{info.user_name}</h5>
              <span>{info.email}</span>
              <div className="badge mt-3">작성자</div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{ShowStyle}</style>
    </section>
  );
};

export default Show;
