import ReactDOM from 'react-dom';

import classes from './Modal.module.scss';

interface IBackdrop {
  onClose: () => void;
}

interface IModal {
  onClose: () => void;
}

const Backdrop: React.FC<IBackdrop> = ({ onClose }) => {
  return <div className={classes.backdrop} onClick={onClose} />;
};

const ModalOverlay: React.FC = ({ children }) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{children}</div>
    </div>
  );
};

const portalElement = document.getElementById('overlays') as HTMLDivElement;

const Modal: React.FC<IModal> = ({ children, onClose }) => {
  return (
    <>
      {ReactDOM.createPortal(<Backdrop onClose={onClose} />, portalElement)}
      {ReactDOM.createPortal(
        <ModalOverlay>{children}</ModalOverlay>,
        portalElement
      )}
    </>
  );
};

export default Modal;
