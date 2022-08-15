import DoctorStyle from "../../styles/DoctorStyle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect, useRef } from "react";
import Loading from "../../components/Loading";
import { pages } from "../../fnc/doctor";
import List from "../../components/doctor/List";
import Page from "../../components/doctor/Page";
import { useSelector } from "react-redux";
import axios from "axios";
import Link from "next/link";

const Doctor = () => {
  const [list, setList] = useState<any>();
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const [num, setNum] = useState([]);
  const [checkArr, setCheckArr] = useState([]);
  const userList = useSelector((state:any) => state.usersList);
  const searchRef = useRef<any>();

  const getCheckArr = async () => {
    if (!userList.users) return;
    const val = {
      click_id: userList.users.id,
    };
    await axios.post("/api/doctor/check", val).then(res => {
      setCheckArr(res.data);
    });
  };
  
  const getList = async () => {
    const postVal = {
      page,
      search,
    };
    await axios.post("/api/doctor/list", postVal).then(res => {
      setList(res.data);
    });
  };

  useEffect(() => {
    getCheckArr();
  }, [userList, list]);

  useEffect(() => {
    getList();
    pages(setNum, page, search);
  }, [page, search]);

  useEffect(() => {
    pages(setNum, page, search);
  }, [list]);

  const prevPage = () => {
    const set = page - 1 <= 1 ? 1 : page - 1;
    setPage(set);
  };

  const nextPage = () => {
    const set = page + 1 >= num.length ? num.length : page + 1;
    setPage(set);
  };

  const searchKey = (e: any) => {
    e.preventDefault();
    const val = searchRef.current.value;
    setPage(1);
    setSearch(val);
    searchRef.current.value = "";
  };

  return !list ? (
    <Loading />
  ) : (
    <section id="doctor" className="container pt-5">
      <div className="head">
        <div className="title pt-5 mt-5">
          <h2>Find your doctor.</h2>
          <p>당신을 진료할 의사를 찾아보세요.</p>
        </div>
        <div className="d-flex align-items-center justify-content-between mt-5">
          <div className="search d-flex align-items-center">
            <form onSubmit={searchKey}>
              <input
                type="text"
                ref={searchRef}
                className="searchInput"
                placeholder="검색어를 입력해주세요."
                name="searchInput"
              />
              <button className="btn btn-dark" type="submit">
                <FontAwesomeIcon icon={faMagnifyingGlass} />
              </button>
            </form>
          </div>
          <select name="sort">
            <option value="star">인기순</option>
          </select>
        </div>
      </div>
      <div className="contents mt-5">
        <div className="tableTitle d-flex align-items-center justify-content-between">
          <div className="name">
            <span>FULL NAME</span>
          </div>
          <div className="mail">
            <span>MAIL</span>
          </div>
          <div className="phoneNumber">
            <span>PHONE NUMBER</span>
          </div>
          <div className="position">
            <span>POSITION</span>
          </div>
          <div className="heartCnt">
            <span>HEART COUNT</span>
          </div>
          <div className="heartBtn">
            <span>HEART BUTTON</span>
          </div>
        </div>
        <div className="items">
          {list.map((item: any, i: any) => (
            <Link
              key={i}
              href={{
                pathname: "/doctor/[pid]",
                query: { pid: item.id },
              }}
            >
              <a>
                <List target={item} checkArr={checkArr} getArr={getCheckArr} />
              </a>
            </Link>
          ))}
        </div>
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
              : num.map((item, i) => (
                  <Page num={item} key={i} setPage={setPage} page={page} />
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
      <style jsx>{DoctorStyle}</style>
    </section>
  );
};
export default Doctor;
