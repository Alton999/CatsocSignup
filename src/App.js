import React, { useState } from "react";
//Components
import Form from './components/Form/Form';

const App = () => {
	const [data, setData] = useState({
		firstName: "",
		lastName: "",
		email: "",
		USU: ""
	});
	const { firstName, lastName, email, USU } = data;
	const handleChange = (e) => {
		setData({
			...data,
			[e.target.name]: e.target.value
		});
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const response = await fetch(
				"https://v1.nocodeapi.com/altonong/google_sheets/bXWiEQmJJndwtgGS?tabId=Sheet1",
				{
					method: "POST",
					headers: {
						"Content-Type": "application/json"
					},
					body: JSON.stringify([
						[firstName, lastName, email, USU, new Date().toLocaleString()]
					])
				}
			);
			await response.json();
			setData({ ...data, firstName: "", lastName: "", email: "", usu: "" });
		} catch (err) {
			console.log(err);
		}
	};
	return (
		<div style={{backgroundColor: '#e1e0ff'}}>
			<Form/>
		</div>
	);
};

export default App;
