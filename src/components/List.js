import React from 'react';

function showList(orders, index){
    return (
		<div key={index} className="Row">
			<div className="Cell1 cell">
				<p>{orders.order}</p>
			</div>
			<div className="Cell2 cell">
				<p>{orders.qty}</p>
			</div>
			<div className="Cell3 cell">
				<p>{orders.price * orders.qty}</p>
			</div>
		</div>
	);
}

export default function List(props) {
	return (
		<div>
			<div className="Heading">
				<div className="Cell1">
					<p>{props.heading1}</p>
				</div>
				<div className="Cell2">
					<p>{props.heading2}</p>
				</div>
				<div className="Cell3">
					<p>{props.heading3}</p>
				</div>
			</div>
			<div className="Table">{props.orders.map(showList)}</div>
		</div>
	);
}
