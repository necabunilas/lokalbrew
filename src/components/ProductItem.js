import React, { useState } from 'react';
import socketIOClient from 'socket.io-client';
const ENDPOINT = 'https://192.168.254.107:5000';

export default function ProductItem(props) {

    const elementsIndex = props.orders.findIndex((orderItem) => orderItem.order === props.item.name);
	const [units, setUnits] = useState(elementsIndex !== -1 ? props.orders[elementsIndex].qty : 0);

	function isZero() {
		if (units < 1) {
			return true;
		}
			return false;
	}

	function sendData(action, item){
		const socket = socketIOClient.connect(ENDPOINT);
		socket.emit(action, item);
	}

	function deduct(event) {
		let newVal = parseInt(units) - parseInt(1);
		event.preventDefault();
        setUnits(newVal);
        updateOrders({
			table: props.table + '',
			order: props.item.name,
			qty: newVal,
			price: props.item.price,
		});
	}

	function add(event) {
		let newVal = parseInt(units) + parseInt(1);
		event.preventDefault();
		setUnits(newVal);
        updateOrders({
			table: props.table + '',
			order: props.item.name,
			qty: newVal,
			price: props.item.price,
		});
    }

	function updateOrders(item) {
		const { order, qty } = item;
		let newArray = props.orders;
		let action = '';
		if (newArray.some((item) => item.order === order)) {
			if (qty > 0) {
				action = 'update';
			} else {
				action = 'delete';
			}
		} else {
			action = 'new';
		}
		sendData(action, item);
	}

	return (
		<div key={props.index} className="product-cont">
			<img className="product-photo" src={process.env.PUBLIC_URL + props.item.url} alt="item" />
			<p className="product-name">{props.item.name}</p>
			<p className="product-price">{props.item.price}</p>
			<button onClick={deduct} disabled={isZero()} className={isZero() ? 'deduct-disabled' : 'deduct'}>
				-
			</button>
			<span className="units">{units}</span>
			<button onClick={add} className="add">
				+
			</button>
		</div>
	);
}
