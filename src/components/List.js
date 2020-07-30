import React, { useState, useEffect, useCallback } from 'react';
import socketIOClient from 'socket.io-client';
const ENDPOINT = 'http://localhost:5000';

export default function List(props) {

	const [orders, setOrders] = useState([]);

	useEffect(() => {
		setOrders(props.orders);
	},[props.orders]);

	function formatText(text){
		if (text === 'table-1') {
			return 'Table 1';
		} else if (text === 'table-2') {
			return 'Table 2';
		} else if (text === 'table-3') {
			return 'Table 3';
		} else if (text === 'table-4') {
			return 'Table 4';
		} else if (text === 'table-5') {
			return 'Table 5';
		} else if (text === 'table-6') {
			return 'Table 6';
		} else if (text === 'table-7') {
			return 'Table 7';
		} else if (text === 'takeout') {
			return 'Takeout';
		}
	}

	function useForceUpdate() {
		const [, setTick] = useState(0);
		const update = useCallback(() => {
			setTick((tick) => tick + 1);
		}, []);
		return update;
	}

	const forceUpdate = useForceUpdate();

	function changeState(table, order, status){
		const socket = socketIOClient.connect(ENDPOINT);
		socket.emit('serve', { table: table, order: order, status: status});
		const elementsIndex = orders.findIndex((orderItem) => orderItem.order === order);
		let newArray = orders;
		if (props.class === 'Queue') {		
			newArray.splice(elementsIndex, 1);
		}else if(props.class === 'Table'){
			let newStatus = '';
			if (status === 'new') {
				newStatus = 'served';
			} else if (status === 'served') {
				newStatus = 'new';
			}
			newArray[elementsIndex] = { ...newArray[elementsIndex], status: newStatus };
			props.isAllServed();
		}
		setOrders(newArray);
		forceUpdate();
	}	

	function showList(orders, index) {
		return (
			<div onClick={orders.status !== "paid" ? () => changeState(orders.table, orders.order, orders.status): null} style={orders.status === "served" ? { background: 'rgba(151, 188, 150, 0.8)' } : null } key={index} className="Row">
				<div className="Cell1 cell">
					<p>{orders.order}</p>
				</div>
				<div className="Cell2 cell">
					<p>{orders.qty}</p>
				</div>
				<div className="Cell3 cell">
					<p>
						{props.class === 'Queue'
							? formatText(orders.table)
							: props.class === 'Table'
							? orders.price * orders.qty
							: orders.date}
					</p>
				</div>
			</div>
		);
	}

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
			<div className={props.class}>{orders.map(showList)}</div>
		</div>
	);
}
