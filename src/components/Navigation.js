import React, { Component } from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import Orders from './Orders'
import Deals from './Deals';
import Queue from './Queue';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faWallet, faList } from '@fortawesome/free-solid-svg-icons';

class Navigation extends Component {
	render() {
		return (
			<Router>
				<div>
					<div className="nav-container">
						<img className="orders-logo" src={process.env.PUBLIC_URL + '/lokalbrew.jpg'} alt="logo_img" />
						<img
							className="orders2-logo"
							src={process.env.PUBLIC_URL + '/lokalbrew-logo.jpg'}
							alt="logo_img"
						/>
						<NavLink to="/" exact className="nav-link" activeClassName="active-link">
							<div className="nav-item">
								<FontAwesomeIcon className="icon" icon={faShoppingCart} size="2x" />
								<p>Orders</p>
							</div>
						</NavLink>
						<NavLink to="/queue" className="nav-link" activeClassName="active-link">
							<div className="nav-item">
								<FontAwesomeIcon className="icon" icon={faList} size="2x" />
								<p> Queue</p>
							</div>
						</NavLink>
						<NavLink to="/deals" className="nav-link" activeClassName="active-link">
							<div className="nav-item">
								<FontAwesomeIcon className="icon" icon={faWallet} size="2x" />
								<p> History</p>
							</div>
						</NavLink>
						<button className="logout" onClick={()=>this.props.getState(false)}>Logout</button>
					</div>
					<div className="pages">
						<Route exact path="/" component={Orders} />
						<Route path="/queue" component={Queue} />
						<Route path="/deals" component={Deals} />
					</div>
				</div>
			</Router>
		);
	}
}

export default Navigation;
