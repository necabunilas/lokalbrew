import React from 'react';
import Table from './Table';

export default function Orders() {
	return (
		<div>
			<div className="inner-page">
				<p>Tables</p>
			</div>
			<hr/>
			<Table name="table-1" />
			<Table name="table-2" />
			<Table name="table-3" />
			<Table name="table-4" />
			<Table name="table-5" />
			<Table name="table-6" />
			<Table name="table-7" />
			<Table name="takeout" />
		</div>
	);
}