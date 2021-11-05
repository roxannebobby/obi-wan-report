import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1">
					<img
						src="https://logos-marcas.com/wp-content/uploads/2020/11/Star-Wars-Logo.png"
						style={{
							width: "90px",
							height: "70px",
							marginLeft: "100px",
							borderRadius: "10px"
						}}
					/>
				</span>
			</Link>
			<div className="nav-item dropdown">
				<button
					style={{ marginRight: "100px", color: "white" }}
					className="btn btn-primary btn-lg nav-link dropdown-toggle"
					type="button"
					data-toggle="dropdown"
					aria-haspopup="true"
					aria-expanded="false">
					<strong>Favorites </strong>
				</button>
			</div>
		</nav>
	);
};
