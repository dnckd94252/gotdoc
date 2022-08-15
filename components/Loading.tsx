import LoadingStyle from "../styles/LoadingStyle";
const Loading = () => {
    return (
      <section id="loading" className="vw-100 vh-100 position-absolute">
        <div className="wrapper">
          <div className="box-wrap">
            <div className="box one"></div>
            <div className="box two"></div>
            <div className="box three"></div>
            <div className="box four"></div>
            <div className="box five"></div>
            <div className="box six"></div>
          </div>
        </div>
        <style jsx>{LoadingStyle}</style>
      </section>
    );
}

export default Loading;