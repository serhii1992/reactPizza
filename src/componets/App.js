import React from 'react';
import Header from './Header';
import { Route } from 'react-router-dom';

import MainContent from './Pages/MainContent';
import Cart from './Pages/Cart';


const App = () => {
	
	return (
		<div className="App">
			<div className="wrapper">
				<Header />
				<div className="content">
					    <Route path={'/cart'} render={() => <Cart />} exact />
					<Route path={'/'} render={() => <MainContent />} exact />
				</div>
			</div>
		</div>
	);
};

export default App;
