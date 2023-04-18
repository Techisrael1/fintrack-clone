import React from "react";
import "./home.css";
const Home = () => {
	return (
		<div>
			<main>
				<h3>
					Simplify <span>Financial Management</span> <br /> With
					Fintrack
				</h3>
				<p>
					With Fintrack, you can now track your spending easily,make
					payments, pay your bills, and simplify your financial life.
					Let Fintrack help you become financially prudent.
				</p>
				<div className="appstore-btn">
					<img src="./images/appstore.svg" alt="" />
					<img src="./images/playstore.svg" alt="" />
				</div>
				<div className="mock-up">
					<img src="./images/mockup.png" alt="" />
				</div>
			</main>
		</div>
	);
};

export default Home;
