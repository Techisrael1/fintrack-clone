import React from "react";
import "./credit.css";
const Credit = () => {
	return (
		<div className="credit-card">
			<div className="credit-card-img">
				<img src="./images/creditcard.webp" alt="" />
			</div>
			<div className="credit-card-text">
				<h2>
					Pay, Invest, <span>Save</span> your
					<br /> money with one single app
				</h2>
				<p>
					The modern way to control all your financial transactions in
					one place, easily and securely.
				</p>
				<div className="appstorez">
					<img src="./images/playstore.svg" alt="" />
					<img src="./images/appstore.svg" alt="" />
				</div>
			</div>
		</div>
	);
};

export default Credit;
