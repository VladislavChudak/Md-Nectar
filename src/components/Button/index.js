import React from 'react';

import styles from './styles.module.scss';

const Button = (props) => {
    const handleClick = (event) => {
        const {
            onClick,
        } = props;

        if (typeof onClick === 'function') {
            return onClick(event);
        }
    };

    const handleClose = (event) => {
        const {
            onClose,
        } = props;

        if (typeof onClose === 'function') {
            return onClose(event);
        }
    };

    const {
        className,
        closable,
        disabled,
        id,
        label
    } = props;

    return (
        <div>
            <button className={ `${ styles.button } ${ className } ${ closable && styles.closable }` }
                disabled={ disabled }
                id={ id }
                onClick={ handleClick }
            >
                { label } 
            </button>
            
            { closable && 
                <span className={ styles.closeMark }
                    onClick={ handleClose }
                >
                    X
                </span> }
        </div>
    );
};

export default Button;
