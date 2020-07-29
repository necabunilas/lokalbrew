import React, { useState, useEffect } from 'react';
import { StartCase } from 'react-lodash';
import { Animated } from 'react-animated-css';
import List from './List';
import Products from './Products';
import socketIOClient from 'socket.io-client';
const ENDPOINT = 'http://localhost:5000';

export default function Table(props) {

    const [ordersTable, setTable] = useState(false);
    const [showProducts, setShowProds] = useState(false);
    const [orders, setOrders] = useState([]);
    
    function showProductsTable(event){
        event.preventDefault();
        setShowProds(true);
    }

    function getTotal(){
        let total = 0;
        orders.map((item) => {
            total += item.qty * item.price;
        })
        return total;
    }

    function updateState(event){
        
      event.preventDefault();
      setTable(true);
  
    }

    function closeWindow(){
        setShowProds(false);
    }

    function exitPage(event){
        event.preventDefault();
		setTable(false);
    }

    useEffect(() => {

        const socket = socketIOClient(ENDPOINT);
        socket.emit('get Orders', props.name);
		socket.on('get Orders', (data) => {
			setOrders(data);
		});

		// CLEAN UP THE EFFECT
		return () => socket.disconnect();
		//
	}, []);

    if(ordersTable){
        return (
			<div>
				<Animated className="order-page" animationIn="fadeIn" animationOut="fadeOut" isVisible={true}>
					<p>
						<StartCase string={props.name} />
					</p>
					<button className="close-button" onClick={exitPage}>
						x
					</button>
					<List class="Table" heading1="Orders" heading2="Qty" heading3="Price" orders={orders} />
					<button className="add-button" onClick={showProductsTable}>
						Edit Items
					</button>
					<p className="wordTotal">Total:</p>
					<div className="total">
						<p>{getTotal()}</p>
					</div>
					<button className="pay-button">Pay</button>
				</Animated>
				{showProducts === false ? null : (
					<Animated className="order-page" animationIn="fadeIn" animationOut="fadeOut" isVisible={true}>
                        <Products closeWindow={closeWindow} orders={orders} table={props.name}/>
					</Animated>
				)}
			</div>
		);
    }else{
        return (
			<div className={props.name + ' table'} onClick={updateState}>
				<p>
					<StartCase string={props.name} />
				</p>
			</div>
		);
    }
	
}
