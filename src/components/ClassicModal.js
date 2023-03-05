import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from "reactstrap";

const ClassicModal = ({ children, titleComponent, cancel, ok, isOpen, onToggle, bodyClassName }) => {
    return (
        <div>
            <Modal isOpen={isOpen} toggle={onToggle} scrollable={true} >
                <ModalHeader toggle={onToggle} className="text-primary bg-primary bg-opacity-10">{titleComponent}</ModalHeader>
                <ModalBody className={bodyClassName}>
                    {children}
                </ModalBody>
                <ModalFooter>
                    <Button outline color="secondary" className="px-4 me-2" onClick={cancel?.action || onToggle}>{cancel?.title || "Annuler"}</Button>
                    {ok && <Button color="primary" className="px-4" onClick={ok?.action || onToggle}>{ok?.title || "Continuer"}</Button>}
                </ModalFooter>
            </Modal>
        </div>
    );
};

export default ClassicModal;