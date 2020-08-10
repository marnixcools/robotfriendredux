import React from 'react';

const Scroll = (props) => {
	//return prop.childrend();
	return (
		<div style={{ overflow: 'scroll' , border: '5px solid black', height: '500px'}}>
			{props.children}
		</div>
		);
}

export default Scroll;
