import React, { Component } from 'react';
import { connect } from "react-redux";

import Button from '../Button';

import {
    addFilterValues,
    cancelFilterValues
} from '../../actions/filterActions';

import styles from './styles.module.scss';

class Dropdown extends Component  {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false
        };
    };

    toggleDropdown = () => {
        const {
            clearSelection,
            selectedValues
        } = this.props;

        clearSelection(selectedValues)

        this.setState({
            isOpen: !this.state.isOpen
        })
    };

    applySelecting = () => {
        const {
            addFilterValues,
            preselectedValues
        } = this.props;

        this.setState({
            isOpen: false
        });
        
        addFilterValues(preselectedValues);
    };

    cancelSelecting = () => {
        const {
            cancelFilterValues,
            data,
            selectedValues,
            label
        } = this.props;

        const canceledValues = data[label].filter(item => selectedValues.map(value => value.id).indexOf(item.id) !== -1);

        this.setState({
            isOpen: false
        });

        cancelFilterValues(canceledValues);
    };

    render () {
        const {
            isOpen
        } = this.state;

        const {
            listItem,
            label,
            index,
            toggleItem,
            selectedValues,
            preselectedValues
        } = this.props;

        const selectedCountFilter = listItem.filter(item => selectedValues.map(value => value.id).indexOf(item.id) >= 0);
        const selectedCount = selectedCountFilter.length === 0 ? '' : `(${selectedCountFilter.length})`;

        return (
            <div className={ styles.dropdown }>
                <Button className={ (isOpen || selectedCountFilter.length > 0)  && styles.active } 
                    label={ `${ label } ${ selectedCount }` }
	    			id={ index }
                    onClick={ this.toggleDropdown }
	    		/>

                {   isOpen && 
                    <div className={ styles.dropdownBox }>
                        <ul className={ styles.dropdownList }>
                            { 
                                listItem.map(({id, title}) => ( 
                                    <li className={ styles.dropdownListItem } key={ id }>
                                        <Button className={ preselectedValues.find(item => item.id === id) && styles.active }
                                            label={ title }
                                            id={ id }
                                            onClick={ () => toggleItem(id, label)}
                                        />
                                    </li>
                                ))
                            }
                        </ul>

                        <div className={ `${ styles.buttons } ${ selectedCountFilter.length === 0 && styles.flexEnd }` }>
                            {
                                selectedCountFilter.length > 0 && 
                                <Button label='Cancel'
                                    onClick={ this.cancelSelecting  }
                                />
                            }

                            <Button label='Apply' 
                                onClick={ this.applySelecting }
                            />
                        </div>
                    </div>
                }
            </div>
        );
    };
};

export default connect(
    (state) => ({
        selectedValues: state.selectedValues
    }), 
    {
        addFilterValues,
        cancelFilterValues
    }
)(Dropdown);
