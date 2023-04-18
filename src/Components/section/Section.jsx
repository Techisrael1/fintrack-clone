import React from "react";
import "./section.css";
const Section = () => {
	return (
		<div className="serviz">
			<div className="services">
				<div className="service-1">
					<h2>100%</h2>
					<p>
						Security on all savings <br /> and investments
					</p>
				</div>
				<div className="vertical-rule"></div>
				<div className="service-2">
					<h2>24</h2>
					<p>
						Hours customer <br /> support
					</p>
				</div>
				<div className="vertical-rule"></div>
				<div className="service-3">
					<h2>10</h2>
					<p>
						Years banking <br /> experience
					</p>
				</div>
			</div>
			<div className="partners">
				<p>Businesses and individuals who trust Fintrack</p>
				<div className="partners-logo">
					<img src="./images/piggyvest.png" alt="" />
					<img src="./images/payoneer.png" alt="" />
					<img src="./images/getequity.png" alt="" />
					<img src="./images/google.png" alt="" />
					<img src="./images/paystack.svg" alt="" />
					<img src="./images/flutterwave.png" alt="" />
				</div>
				<div className="why-us">
					<p>Why Us?</p>
					<h2>
						Carry Out Your <br /> Transactions Easily And Fast
					</h2>
				</div>
			</div>
			<div className="money-flow">
				<div className="moneyflow-chart">
					<img src="./images/money-chart.png" alt="" />
				</div>
				<div className="money-flow-text">
					<div className="numbers">
						<h2>1</h2>
						<h2>2</h2>
						<h2>3</h2>
					</div>
					<div className="texts">
						<div className="text1">
							<h4>Easy Onboarding</h4>
							<p>
								Our seamless onboarding process will guide you
								step-by-step to get started with Fintrack
								quickly and easily, so you can control of your
								finance in no time.
							</p>
						</div>
						<div className="text1">
							<h4>Add Funds</h4>
							<p>
								Adding money to your Fintrack account is easy
								and secure, with multiple options available such
								as direct deposit, bank transfers, and much
								more.
							</p>
						</div>
						<div className="text1">
							<h4>Quick Access</h4>
							<p>
								With mobile app, you can access your finances
								anytime, anywhere so you can stay on top of your
								finances even when you're on the go.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Section;
