import React, { useState, useEffect } from 'react';
import socketIOClient from 'socket.io-client';
import List from './List';
import DatePicker from 'react-date-picker';
import { CSVLink } from 'react-csv';
const ENDPOINT = 'https://192.168.254.107:5000';


export default function Deals() {

	const [deals, setDeals] = useState([]);
	const [startDate, setStartDate] = useState(new Date(new Date().setHours(0, 0, 0, 0)));
	const [endDate, setEndDate] = useState(new Date(new Date().setHours(23, 59, 59, 0)));

	useEffect(() => {

		const socket = socketIOClient(ENDPOINT);
		socket.emit('get Deals', { start: startDate, end: endDate });
		socket.on('get Deals', (data) => {
			setDeals(data);
		});

		// CLEAN UP THE EFFECT
		return () => socket.disconnect();
	
	}, [endDate, startDate]);

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
			<DatePicker
				className="start"
				value={startDate}
				onChange={(date) => setStartDate(new Date(new Date(date).setHours(0, 0, 0, 0)))} //Check up to midnight of date
			/>
			<DatePicker
				className="end"
				value={endDate}
				onChange={(date) => setEndDate(new Date(new Date(date).setHours(23, 59, 59, 0)))} //Check until last minute of date
			/>
		</div>
	);	
}
