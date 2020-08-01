import React, { useState, useEffect } from 'react';
import socketIOClient from 'socket.io-client';
import List from './List';
const ENDPOINT = 'http://localhost:5000';


export default function Deals() {

	const [deals, setDeals] = useState([]);

	useEffect(() => {
		const socket = socketIOClient(ENDPOINT);
		socket.emit('get Deals');
		socket.on('get Deals', (data) => {
			setDeals(data);
		});

		// CLEAN UP THE EFFECT
		return () => socket.disconnect();
		//
	}, []);

	return (
		<div className="inner-page">
			<p>Transaction History</p>
			<List class="Deals" heading1="Orders" heading2="Qty" heading3="Date" orders={deals} />
		</div>
	);	
}
