import React, { useContext } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";

export const Characters = props => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container-fluid">
			<div className="card" style={{ width: "18rem" }}>
				<img
					src="https://www.prensalibre.com/wp-content/uploads/2019/11/luke-skywalker-644x362.jpg?quality=82"
					className="card-img-top"
					alt=""
				/>
				<div className="card-body">
					<h5 className="card-title"> {props.character.name}</h5>
					<p className="card-text"> Gender :{props.character.gender}</p>
					<p className="card-text"> Hair-Color: {props.character.hair}</p>
					<p className="card-text"> Eye-Color: {props.character.eye_color}</p>

					<Link to={{ pathname: `/character/${props.character.name}`, state: props.character }}>
						<button className="btn bnt-primary"> See More</button>
					</Link>
					{store.favorites.length > 0 && store.favorite.includes(props.character) ? (
						<button style={{ float: "right" }}>
							<a href="#" className="btn btn-warning" style={{ with: "50px" }}>
								<i className="far fa-heart" />
							</a>
						</button>
					) : (
						<button
							onClick={() => {
								actions.addFavorite(props.character);
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

Characters.PropTypes = {
	character: PropTypes.json
};
