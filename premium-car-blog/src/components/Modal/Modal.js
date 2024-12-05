import React from 'react';
import Modal from 'react-modal';

const CustomModal = ({ isOpen, onRequestClose, children }) => {
    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            contentLabel="Example Modal"
            className="modal"
            overlayClassName="overlay"
            style={{
                overlay: {
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                },
                content: {
                    position: 'relative',
                    top: 'auto',
                    left: 'auto',
                    right: 'auto',
                    bottom: 'auto',
                    margin: 'auto',
                    width: '300px',
                    textAlign: 'center',
                },
            }}
        >
            {children}
        </Modal>
    );
};

export default CustomModal;