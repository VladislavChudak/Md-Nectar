import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Dropdown from '../Dropdown';

import styles from './styles.module.scss';

class FilterList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            preselectedValues: []
        };
    };

    toggleSelected = (id, title) => {
        const {
            preselectedValues
        } = this.state;

        const {
            data
        } = this.props;

        if (preselectedValues.find(item => item.id === id)) {
            this.setState({
                preselectedValues: preselectedValues.filter(item => item.id !== id)
            })

            return;
        };
        
        this.setState({
            preselectedValues: [...preselectedValues, data[title].find(item => item.id === id)]
        });
    };

    clearSelection = (value) => {
        this.setState({
            preselectedValues: value
        });
    };
    
    render() {
        const {
            preselectedValues
        } = this.state;
        const {
            data
        } = this.props;
        const renderData = Object.keys(data);

        return (
            <div className={ styles.filterList }>
            	{ 
					renderData.map((label, index) => (
                        <div className={ styles.filterListItem } key={ index }>
                            <Dropdown data={ data } 
                                label={ label }
                                listItem={ data[label] }
                                toggleItem={ this.toggleSelected }
                                preselectedValues={ preselectedValues }
                                clearSelection={ this.clearSelection }
                            />
                        </div>
					))
				}
            </div>
        );
    };
};

FilterList.propTypes = {
    data: PropTypes.object
};

export default (FilterList);
