import React, { useState, useCallback } from 'react';
import socketIOClient from 'socket.io-client';
import endpoint from './Network';
const ENDPOINT = endpoint;

export default function List(props) {

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

	function isAllServed() {
		let served = true;
		props.orders.forEach((item) => {
			if (item.status === 'new') {
				served = false;
			}
		});
		props.allServed(served);
	}

	function changeState(table, order, status){
		const socket = socketIOClient.connect(ENDPOINT);
		socket.emit('serve', { table: table, order: order, status: status});
		const elementsIndex = props.orders.findIndex((orderItem) => orderItem.order === order);
		let newArray = props.orders;
		if (props.class === 'Queue') {		
			newArray.splice(elementsIndex, 1);
		}else if(props.class === 'Table'){
			isAllServed();
		}
		forceUpdate();
	}	

	function showList(orders, index) {
		return (
			<div
				onClick={orders.status !== 'paid' ? () => changeState(orders.table, orders.order, orders.status) : null}
				style={orders.status === 'served' ? { background: 'rgba(151, 188, 150, 0.8)' } : null}
				key={index}
				className="Row"
			>
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
							: new Date(orders.date).toLocaleDateString()}
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
			<div className={props.class}>{props.orders.map(showList)}</div>
		</div>
	);
}
