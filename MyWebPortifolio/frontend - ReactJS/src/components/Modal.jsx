import "../styles/modal.css";

const Modal = ({  isOpen, onClose, children }) => {
    if(!isOpen) return null;

    return (
       <div
         className="modal-overlay"
         onClick={onClose}
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