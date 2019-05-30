import React, { Component } from 'react';

import FilterList from './components/FilterList';
import Logo from './components/Logo';

import './App.scss';
import data from './data';
import AppliedFilters from './components/AppliedFilters';

class App extends Component {
	state = {
		modalId: null,
		modalOpen: false
	};

  	render() {
  	  	return (
  	    	<div className='App'>
			  	<Logo label='Vladislav Chudak Md-Nectar' />
				<FilterList data={ data }
					onClick={ this.handleOpenModal }
				/>
				<AppliedFilters data={ data } />
  	    	</div>
  	  	);
  	}
}

export default App;
