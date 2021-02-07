import React, {ReactNode} from 'react';
import Dialog from '@material-ui/core/Dialog';

type ModalProps = {
    close(): void;
    children: ReactNode;
};

const Modal = (props: ModalProps) => {
    return (
        <Dialog maxWidth={"sm"} open={true} onClose={props.close} onClick={props.close}>
            {props.children}
        </Dialog>
    );
};

export default Modal;