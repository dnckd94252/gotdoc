import HospitalStyle from "../../styles/hospital/HospitalStyle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import Location from "../../components/hospital/Location";
import Link from "next/link";
import { useState, useEffect , useRef } from "react";
import axios from "axios";

const Hospital = () => {
  const [page, setPage] = useState(1);
  const [list, setList] = useState([]);
  const [search, setSearch] = useState("");
  const [num, setNum] = useState(0);
  const searchRef = useRef<any>();

  const searchAction = (e: any) => {
    e.preventDefault();
    const val = searchRef.current.value;
    setSearch(val);
    searchRef.current.value = '';
  };  

  useEffect(() => {
    getList();
    getNum();
  }, [page , search]);

  const setArr = (val: number) => {
    let arr: any = [];

    for (let i:number = 1; i <= Math.ceil(val / 10); i++) {
      arr.push(i);
    }
    return arr;
  };

  const getList = async () => {
    const postVal = {
      page,
      search,
    };
    await axios.post("/api/hospital/list", postVal).then(res => {
      setList(res.data);
    });
  };

  const getNum = async () => {
    await axios.post("/api/hospital/get" , {search} ).then(res => {
      setNum(res.data[0].cnt);
    });
  };

  const prevPage = () => {
    const set = page - 1 <= 1 ? 1 : page - 1;
    setPage(set);
  };

  const nextPage = () => {
    const lastPage = Math.ceil(num / 10); 
    const set =
      page + 1 >= lastPage ? lastPage : page + 1;
    setPage(set);
  };

  return (
    <section id="hospital" className="container pt-5 pb-5">
      <div className="title mt-5 pt-5 d-flex align-items-center justify-content-center flex-column">
        <h3 className="mt-4 mb-4">Search properties to hospital</h3>
        <div className="search d-flex justify-content-center align-items-center">
          <form
            onSubmit={searchAction}
            className="d-flex justify-content-between align-content-center w-100 pl-3 pr-3"
          >
            <input
              type="text"
              placeholder="Search hospital name"
              className="form-control"
              ref={searchRef}
            />
            <button className="btn btn-dark">
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
          </form>
        </div>
      </div>
      <div className="d-flex align-items-center plus justify-content-end mt-5">
        <Link href="/hospital/add">
          <a>
            <button className="btn btn-dark pl-4 pr-4">병원추가</button>
          </a>
        </Link>
      </div>
      <div className="contents d-flex flex-wrap align-items-baseline mt-5 ">
        {!list || list.length <= 0
          ? null
          : list.map((item, i) => <Location item={item} key={i} />)}
      </div>
      <div className="d-flex align-items-center page justify-content-center mt-5">
        <nav aria-label="Page navigation example">
          <ul className="pagination">
            <li className="page-item" onClick={prevPage}>
              <span className="pageItem" aria-label="Previous">
                <span aria-hidden="true">&laquo;</span>
                <span className="sr-only">Previous</span>
              </span>
            </li>
            {!num
              ? null
              : setArr(num).map((item:any, i:number) => (
                  <li className="page-item" key={i} onClick={() => {
                    setPage(item);
                  }}>
                    <span
                      className={page === item ? "pageItem active" : "pageItem"}
                    >
                      {item}
                    </span>
                  </li>
                ))}
            <li className="page-item" onClick={nextPage}>
              <span className="pageItem" aria-label="Next">
                <span aria-hidden="true">&raquo;</span>
                <span className="sr-only">Next</span>
              </span>
            </li>
          </ul>
        </nav>
      </div>
      <style jsx>{HospitalStyle}</style>
    </section>
  );
};

export default Hospital;
