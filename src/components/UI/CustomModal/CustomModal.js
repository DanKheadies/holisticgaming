import React from 'react';

import './CustomModal.scss';
import Aux from '../../../hoc/Aux/Aux';
import Backdrop from '../Backdrop/Backdrop';

const customModal = props => (
    <Aux>
        <Backdrop
            clicked={props.closeModal}
            show={props.show}
        />
        <div 
            className="custom-modal"
            style={{
                opacity: props.show ? '1' : '0',
                transform: props.show ? 'translateY(0)' : 'translateY(-100vh)'
            }}
        >
            {props.children}
        </div>
    </Aux>
);

export default customModal;