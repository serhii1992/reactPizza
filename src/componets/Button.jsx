import React from 'react';
import cn from 'classnames';

function Button({ children, className, outline, onClick }) {
	return (
		<div>
			<button onClick={onClick} className={cn('button', className, {'button--outline': outline})}>{children}</button>
		</div>
	);
}

export default Button;
