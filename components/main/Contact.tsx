import ContactStyle from "../../styles/ContactStyle";
const Contact = () => {
  return (
    <section
      id="contact"
      className="vh-100 pageItem d-flex align-items-center justify-content-center"
    >
      <div className="contents d-flex align-items-center justify-content-center flex-column">
        <div className="title d-flex align-items-center flex-column  justify-content-center">
          <h1>Start contact new doctor</h1>
          <h1>to the fullest</h1>
        </div>
        <div className="d-flex email align-items-center mt-5">
          <input type="text" className="" placeholder="Email address..." />
          <button className="btn btn-dark ml-4">Request Demo</button>
        </div>
      </div>
      <style jsx>{ContactStyle}</style>
    </section>
  );
};

export default Contact;
