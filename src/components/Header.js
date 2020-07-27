import React from 'react';

export default function Header() {
    return (
		<div>
			<img className="logo-cup" src={process.env.PUBLIC_URL + '/lokalbrew.jpg'} alt="logo2_img" />
			<img className="logo" src={process.env.PUBLIC_URL + '/lokalbrew-logo.jpg'} alt="logo_img" />
			<h1 className="slogan">#DrinkLokalCoffee</h1>
		</div>
	);
}