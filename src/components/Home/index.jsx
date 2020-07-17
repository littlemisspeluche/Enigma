import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getData } from "../../actions/home.action";
import _ from "lodash";
export default function Home() {
	const { items } = useSelector(state => state.home);
	console.log("Home -> items", items);
	// console.log("Home -> items", items[0]);
	// const x = items.some(item => item.hasOwnProperty("error"));
	// console.log("Home -> x", x);

	const dispatch = useDispatch();

	useEffect(() => {
		// const fn = () => dispatch(getData());
		// fn();
		// const interval = setInterval(fn(), 3000);
		const interval = setInterval(() => {
			dispatch(getData());
		}, 3000);
		return () => clearInterval(interval);
	}, []);

	return (
		<div>
			{(items.length > 1 &&
				items.map(item => (
					<div style={{ display: "flex", border: "1px solid" }}>
						<div>Currency: {item.currency}</div>
						<div>Rate: {item.rate}</div>
						<div>Bid: {item.bid}</div>
						<div>Ask: {item.ask}</div>
						<div>High: {item.high}</div>
						<div>Low: {item.low}</div>
						<div>Open: {item.open}</div>
						<div>Close: {item.close}</div>
						<div>Timestamp: {item.timestamp}</div>
					</div>
				))) ||
				""}
		</div>
	);
}
