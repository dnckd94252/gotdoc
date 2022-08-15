import ContentsStyle from "../../styles/Review/ContentsStyle";
import ContentsItem from "./ContentsItem";

const Contents = (props:any) => {
  const { list, setPage , page , num } = props;
  
  const prevPage = () => {
    const set = page - 1 <= 1 ? 1 : page - 1;
    setPage(set);
  };

  const nextPage = () => {
    const set = page + 1 >= num.length ? num.length : page + 1;
    setPage(set);
  };
  
  const setArr = (val: number) => {
    let arr: any = [];

    for (let i = 1; i <= Math.ceil(val / 10); i++) {
      arr.push(i);
    }
    return arr;
  };



  return (
    <div className="contents col-9 mt-5 ">
      <div className="head d-flex p-3 align-items-center justify-content-between">
        <h3>Reviews</h3>
        <select>
          <option value="Sort by">Sort by</option>
        </select>
      </div>
      <div className="items pl-5 pr-5 d-flex justify-content-between flex-wrap">
        {!list
          ? null
          : list.map((item: any, i: number) => (
              <ContentsItem key={i} item={item} />
            ))}
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
              : setArr(num).map((item: any, i: number) => (
                  <li
                    className="page-item"
                    key={i}
                    onClick={() => {
                      setPage(item);
                    }}
                  >
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
      <style jsx>{ContentsStyle}</style>
    </div>
  );
};
export default Contents;
