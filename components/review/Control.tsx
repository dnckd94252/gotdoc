import ControlStyle from "../../styles/Review/ControlStyle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { useRef } from "react";

const Control = (props:any) => {
  const { setSearch, setRating, rating, getSearchList } = props;
  const searchRef = useRef<any>();

  const searchAction = async (e: any) => {
    e.preventDefault();
    setSearch(searchRef.current.value);
    searchRef.current.value = "";
    await getSearchList();
  };

  return (
    <div className="control col-3 mt-5 w-100 pl-0 pr-0">
      <form onSubmit={searchAction}>
        <div className="head d-flex align-items-center justify-content-center">
          <Link href="/review/write">
            <a>
              <button
                type="button"
                className="btn btn-dark pl-5 pt-2 pb-2 pr-5"
              >
                Add Review
              </button>
            </a>
          </Link>
        </div>
        <div className="filter p-4">
          <h3>Filter</h3>
          <div className="item pb-4 border-bottom">
            <h5>Search</h5>
            <input
              placeholder="검색어를 입력해주세요."
              type="text"
              className="form-control"
              ref={searchRef}
            />
          </div>
          <div className="item pt-4 pb-4 border-bottom">
            <h5>Rating</h5>
            <div className="buttons d-flex align-items-center justify-content-center flex-wrap">
              <button
                type="button"
                className="btn ratingBtn d-flex align-items-center justify-content-center btn-dark m-2"
                onClick={() => {
                  setRating(5);
                }}
                style={{
                  backgroundColor: rating === 5 ? "#ffaf13" : "#f5f6fb",
                  color: rating === 5 ? "#fff" : "#969698",
                }}
              >
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
              </button>
              <button
                type="button"
                className="btn ratingBtn d-flex align-items-center justify-content-center btn-dark m-2"
                onClick={() => {
                  setRating(4);
                }}
                style={{
                  backgroundColor: rating === 4 ? "#ffaf13" : "#f5f6fb",
                  color: rating === 4 ? "#fff" : "#969698",
                }}
              >
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
              </button>
              <button
                type="button"
                className="btn ratingBtn d-flex align-items-center justify-content-center btn-dark m-2"
                onClick={() => {
                  setRating(3);
                }}
                style={{
                  backgroundColor: rating === 3 ? "#ffaf13" : "#f5f6fb",
                  color: rating === 3 ? "#fff" : "#969698",
                }}
              >
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
              </button>
              <button
                type="button"
                className="btn ratingBtn d-flex align-items-center justify-content-center  btn-dark m-2 active"
                onClick={() => {
                  setRating(null);
                }}
                style={{
                  backgroundColor: rating === null ? "#ffaf13" : "#f5f6fb",
                  color: rating === null ? "#fff" : "#969698",
                }}
              >
                All
              </button>
            </div>
          </div>
          <div className="button d-flex align-items-center pt-3 pb-3">
            <button className="btn btn-dark w-100 pt-3 pb-3" type="submit">
              Search
            </button>
          </div>
        </div>
      </form>

      <style jsx>{ControlStyle}</style>
    </div>
  );
};

export default Control;
