import DoctorStlye from "../../styles/DoctorStyle";
const Page = (props:any) => {
  const num = props.num;

  const setPage = () => {
    props.setPage(num);
  };
  
  return props.page === num ? (
    <li className="page-item " onClick={setPage}>
      <span className="pageItem active">{props.num}</span>
      <style jsx>{DoctorStlye}</style>
    </li>
  ) : (
    <li className="page-item " onClick={setPage}>
      <span className="pageItem">{props.num}</span>
      <style jsx>{DoctorStlye}</style>
    </li>
  );
};

export default Page;
