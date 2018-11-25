import React from 'react';
import Modal from 'react-modal';

const ModalOption = (props) => (
    <Modal
        isOpen={!!props.selectedOption}
        contentLabel="Modal text"
        ariaHideApp={false}
    >
        <h1>some text</h1> 
        {true && <p>{props.selectedOption}</p>}
        <button onClick={props.ClearSelectedOption}>Okay</button>
    </Modal>
);
export default ModalOption;