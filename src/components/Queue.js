import React, {useState, useEffect} from 'react';
import List from './List';
import socketIOClient from 'socket.io-client';
const ENDPOINT = 'http://192.168.254.107:5000';

export default function Queue() {

	const [queue, setQueue] = useState([]);

	useEffect(() => {
		const socket = socketIOClient(ENDPOINT);
		socket.emit('get Queue');
		socket.on('get Queue', (data) => {
			setQueue(data);
		});

		// CLEAN UP THE EFFECT
		return () => socket.disconnect();
		//
	}, []);


	return (
		<div className="inner-page">
			<p>Queue</p>
			<List class="Queue" heading1="Orders" heading2="Qty" heading3="Table" orders={queue} />
		</div>
	);
}
