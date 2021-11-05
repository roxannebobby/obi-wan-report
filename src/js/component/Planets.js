import React, { useContext } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";

export const Planets = props => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container-fluid">
			<div className="card" style={{ width: "18rem" }}>
				<img
					src="http://4.bp.blogspot.com/-IUO_O-bojLM/TWE3Iy01V4I/AAAAAAAAA_w/UaPdiVYWbgo/s1600/Star+Wars+-+Tattoine+09.jpg"
					className="card-img-top"
					alt=""
				/>
				<div className="card-body">
					<h5 className="card-title"> {props.planet.name}</h5>
					<p className="card-text"> Gender :{props.planet.terrain}</p>
					<p className="card-text"> Hair-Color: {props.planet.population}</p>

					<Link to={{ pathname: `/character/${props.planet.name}`, state: props.planet }}>
						<button className="btn bnt-primary"> See More</button>
					</Link>
					{store.favorites.length > 0 && store.favorite.includes(props.planet) ? (
						<button style={{ float: "right" }}>
							<a href="#" className="btn btn-warning" style={{ with: "50px" }}>
								<i className="far fa-heart" />
							</a>
						</button>
					) : (
						<button
							onClick={() => {
								actions.addFavorite(props.planet);
							}}
							style={{ float: "right" }}>
							<a href="#" className="btn btn-primary" style={{ with: "50px" }}>
								<i className="far fa heart" />
							</a>
						</button>
					)}
				</div>
			</div>
		</div>
	);
};

Planets.PropTypes = {
	planet: PropTypes.json
};
