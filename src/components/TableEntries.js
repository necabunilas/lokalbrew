import React, { useState, useEffect, useCallback } from 'react';
import { Animated } from 'react-animated-css';
import { StartCase } from 'react-lodash';
import List from './List';
import Products from './Products';
import socketIOClient from 'socket.io-client';
const ENDPOINT = 'http://localhost:5000';

export default function TableEntries(props){

    const [showProducts, setShowProds] = useState(false);
    const [orders, setOrders] = useState([]);
    const [served, setServed] = useState(false);

    useEffect(() => {
		const socket = socketIOClient(ENDPOINT);
		socket.emit('get Orders', props.name);
		socket.on('get Orders', (data) => {
			setOrders(data);
		});

        let served = true;
		orders.forEach((item) => {
			if (item.status === 'new') {
				served = false;
			}
        });
        
        setServed(served);

		// CLEAN UP THE EFFECT
		return () => socket.disconnect();
		//
	}, [props.name, orders]);    

    function showProductsTable(event) {
		event.preventDefault();
		setShowProds(true);
	}

    function getTotal() {
		let total = 0;
		orders.forEach((item) => {
			total += item.qty * item.price;
		});
		return total;
	}

    function payOrders(event) {
        event.preventDefault();
        const socket = socketIOClient.connect(ENDPOINT);
		socket.emit('pay', props.name);
	}

    function closeWindow() {
        setShowProds(false);
	}    

    function exitPage(event) {
		event.preventDefault();
		props.exitPage();
	}

    function allServed(bool){
        setServed(bool);
    }

    return (
		<div>
			<Animated className="order-page" animationIn="fadeIn" animationOut="fadeOut" isVisible={true}>
				<p>
					<StartCase string={props.name} />
				</p>
				<button className="close-button" onClick={exitPage}>
					x
				</button>
				<List
					class="Table"
					heading1="Orders"
					heading2="Qty"
					heading3="Price"
					orders={orders}
					allServed={allServed}
				/>
				<button className="add-button" onClick={showProductsTable}>
					Edit Items
				</button>
				<p className="wordTotal">Total:</p>
				<div className="total">
					<p>{getTotal()}</p>
				</div>
				<button
					className={!served ? 'pay-button-disabled' : 'pay-button'}
					disabled={!served}
					onClick={payOrders}
				>
					Pay
				</button>
			</Animated>
			{showProducts === false ? null : (
				<Animated className="order-page" animationIn="fadeIn" animationOut="fadeOut" isVisible={true}>
					<Products closeWindow={closeWindow} orders={orders} table={props.name} />
				</Animated>
			)}
		</div>
	);

}