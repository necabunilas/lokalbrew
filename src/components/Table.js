import React, { useState } from 'react';
import { StartCase } from 'react-lodash';
import { Animated } from 'react-animated-css';
import List from './List';
import Products from './Products';

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

    function updateOrders(item){
        console.log("update orders");
        const { order, qty, price } = item;
        const elementsIndex = orders.findIndex((orderItem) => orderItem.order === order);
        let newArray = [...orders];
        setOrders((prev) => {
            if(prev.some((prevItem,index) => prevItem.order === order)){
                if(qty > 0){
                    newArray[elementsIndex] = { ...newArray[elementsIndex], qty: qty };
					return newArray;
                }else{
                    return newArray.splice(elementsIndex, 1);
                }
            }else{
                return [...prev, { order, qty, price }];
            }   
        });
    }

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
					<List heading1="Orders" heading2="Qty" heading3="Price" orders={orders} />
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
						<Products closeWindow={closeWindow} updateOrders={updateOrders} orders={orders}/>
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
