import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1">React Boilerplate</span>
			</Link>
			<div className="ml-auto">
				<Link to="/demo">
					<button className="btn btn-primary">Check the Context in action</button>
				</Link>
			</div>
			<div className="ml-auto">
				<Link to="/addcontact">
					<button className="btn btn-success">Add New Contact</button>
				</Link>
			</div>
			<div className="ml-auto">
				<Link to="/contactlist">
					<button className="btn btn-secondary">Contact List</button>
				</Link>
			</div>
		</nav>
	);
};
