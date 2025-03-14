import "../styles/modal.css";

const Modal = ({ isOpen, closeModal, children }) => {
    

    return (
        <div
         className="modal-overlay"
         >
        <div className="container-modal" onClick={(e) => e.stopPropagation()}>
            <div>
            {children}
            </div>
        </div>
        



        </div>

    )


}
export default Modal;