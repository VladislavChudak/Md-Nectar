import React from 'react';
import { connect } from "react-redux";

import Button from '../Button';

import {
    clearFilterValues,
    deleteFilterValue
} from '../../actions/filterActions';

import styles from './styles.module.scss';

const AppliedFilters = (props) => {
    const {
        selectedValues
    } = props;

    const removeFilters = () => {
        const {
            clearFilterValues
        } = props;

        clearFilterValues();
    };

    const handleClose = (id) => {
        const {
            deleteFilterValue
        } = props;
        
        deleteFilterValue(id);
    };

    return (
        <div className={ styles.appliedFilters }>
            <span className={ styles.label }>
                Applied Filters:
            </span>

            <ul className={ styles.filtersList }>
                {
                    selectedValues.map(({id, title}) => (
                        <li key={ id }>
                            <Button label={ title } 
                                id={ id }
                                closable
                                onClose={ () => handleClose(id) }
                            />
                        </li>
                    ))
                }
                {
                    selectedValues.length !== 0 && 
                        <Button className={ styles.remove }
                            label='Remove All'
                            onClick={ removeFilters }
                        />
                }
            </ul>
        </div>
    )
};

export default connect(
    (state) => ({
        selectedValues: state.selectedValues
    }),
    {
        clearFilterValues,
        deleteFilterValue
    } 
)(AppliedFilters);
