import React, { useState, useEffect } from 'react';
import socketIOClient from 'socket.io-client';
import List from './List';
import { CSVLink } from 'react-csv';
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

	function getData(){
		let data = [];
		deals.forEach(item => {
			let newObj = {
				table: item.table,
				date: item.date,
				order: item.order,
				qty: item.qty,
				profit: (item.qty * item.price)
			}
			data.push(newObj);
		})
		return data;
	}

	return (
		<div className="inner-page">
			<p>Transaction History</p>
			<List class="Deals" heading1="Orders" heading2="Qty" heading3="Date" orders={deals} />
			<CSVLink data={getData()}>
				<button className="export-button">Export</button>
			</CSVLink>
		</div>
	);	
}
