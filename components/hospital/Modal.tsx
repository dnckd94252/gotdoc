import React from "react";
import ModalStyle from "../../styles/hospital/ModalStyle";
import DaumPostcode from "react-daum-postcode";

const Modal = (props : any) => {
  const { open, close, header, addressRef, setModalOpen } = props;
  const [openPostcode, setOpenPostcode] = React.useState<boolean>(false);
  const handle = {
    clickButton: () => {
      setOpenPostcode(current => !current);
    },
    selectAddress: (data: any) => {
      addressRef.current.value = data.address;
      setModalOpen(false);
    },
  };
  
  return (
    <div className={open ? "openModal modal" : "modal"}>
      {open ? (
        <section>
          <header>
            {header}
            <button className="close" onClick={close}>
              &times;
            </button>
          </header>
          <main>
            <div>
                <DaumPostcode
                  onComplete={handle.selectAddress} // 값을 선택할 경우 실행되는 이벤트
                  autoClose={false} // 값을 선택할 경우 사용되는 DOM을 제거하여 자동 닫힘 설정
                />
            </div>
          </main>
        </section>
      ) : null}
      <style jsx>{ModalStyle}</style>
    </div>
  );
};
export default Modal;
