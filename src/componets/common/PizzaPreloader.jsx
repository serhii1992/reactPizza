import React from 'react';
import ContentLoader from 'react-content-loader';
import '../../scss/app.scss';

function PizzaPreloader() {
	return (
		<div	className={'pizza-block'}>
			<ContentLoader
				speed={2}
				width={260}
				height={468}
				viewBox="0 0 280 468"
				backgroundColor="#f3f3f3"
				foregroundColor="#ecebeb"
			>
				<circle cx="140" cy="140" r="130" />
				<rect x="-1" y="287" rx="0" ry="0" width="280" height="22" />
				<rect x="176" y="327" rx="0" ry="0" width="2" height="0" />
				<rect x="2" y="321" rx="0" ry="0" width="280" height="85" />
				<rect x="127" y="412" rx="25" ry="25" width="150" height="45" />
				<rect x="5" y="423" rx="0" ry="0" width="88" height="26" />
			</ContentLoader>
		</div>
	);
}

export default PizzaPreloader;
