import ReviewStyle from "../../styles/Review/ReviewStyle";
import Control from "../../components/review/Control";
import Contents from "../../components/review/Contents";
import axios from "axios";
import { useState, useEffect } from "react";

const Review = () => {
  const [search, setSearch] = useState("");
  const [rating, setRating] = useState(null);
  const [page, setPage] = useState(1);
  const [list, setList] = useState([]);
  const [num , setNum] = useState(1);
  
  const getSearchList = async () => {
    await axios.post("/api/review/list", { search, page, rating }).then(res => {
      const data = res.data;
      setList(data.find);
      setNum(data.num <= 0 ? 1 : Math.ceil(data.num / 4));
      setPage(1);
    });
  };

  useEffect(() => {
    getSearchList();
  }, [search , page]);

  return (
    <section id="review" className="container pb-5 d-flex pt-5">
      <Control
        search={search}
        setList={setList}
        page={page}
        setSearch={setSearch}
        setRating={setRating}
        rating={rating}
        getSearchList={getSearchList}
      />
      <Contents setPage={setPage} page={page} list={list} num={num} />
      <style jsx>{ReviewStyle}</style>
    </section>
  );
};
export default Review;
