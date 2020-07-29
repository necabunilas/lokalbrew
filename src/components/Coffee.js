import React from 'react';
import coffee from './CoffeeProducts';
import ProductItems from './ProductItem';

export default function Coffee(props) {

	return coffee.map((item, index) => (
		<ProductItems orders={props.orders} item={item} index={index} table={props.table} />
	));
}
