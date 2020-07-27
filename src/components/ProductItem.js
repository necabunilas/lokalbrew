import React, { useState } from 'react';

export default function ProductItem(props) {

    const elementsIndex = props.orders.findIndex((orderItem) => orderItem.order === props.item.name);
    
	const [units, setUnits] = useState(elementsIndex !== -1 ? props.orders[elementsIndex].qty : 0);

	function isZero() {
		if (units === 0) {
			return true;
		} else {
			return false;
		}
	}

	function deduct(event) {
		let newVal = units - 1;
		event.preventDefault();
        setUnits(newVal);
        props.updateOrders({
			order: props.item.name,
			qty: newVal,
			price: props.item.price
		});
	}

	function add(event) {
		let newVal = units + 1;
		event.preventDefault();
		setUnits(newVal);
        props.updateOrders({
			order: props.item.name,
			qty: newVal,
			price: props.item.price
		});
    }

	return (
		<div key={props.index} className="product-cont">
			<img className="product-photo" src={process.env.PUBLIC_URL + props.item.url} alt="item" />
			<p className="product-name">{props.item.name}</p>
			<p className="product-price">{props.item.price}</p>
			<button onClick={deduct} className={isZero() ? 'deduct-disabled' : 'deduct'}>
				-
			</button>
			<p className="units">{units}</p>
			<button onClick={add} className="add">
				+
			</button>
		</div>
	);
}
