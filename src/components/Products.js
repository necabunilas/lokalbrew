import React from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import Coffee from './Coffee';
import Food from './Food';

export default function Products(props) {

    function exitPage(event){
        event.preventDefault();
        props.closeWindow();
    }
	
	return (
		<div>
			<div>
				<p>Products</p>
				<button className="go-orders" onClick={exitPage}>
					Go to Orders
				</button>
			</div>
			<Router>
				<div>
					<div>
						<NavLink
							className="selection-coffee select"
							activeClassName="active-selection"
							to="/coffee"
						>
							<p>Coffee</p>
						</NavLink>
						<NavLink className="selection-food select" activeClassName="active-selection" to="/food">
							<p>Food</p>
						</NavLink>
					</div>
					<div className="top-border" />
					<div className="products">
						<Route path="/coffee">
							<Coffee orders={props.orders} table={props.table} />
						</Route>
						<Route path="/food">
							<Food />
						</Route>
					</div>
				</div>
			</Router>
		</div>
	);
}
