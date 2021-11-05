import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Characters } from "../component/Characters";
import { Planets } from "../component/Planets";
import "../../styles/home.scss";

export const Home = () => {
	const { store, actions } = useContext(Context);
	return (
		<div>
			<div className="container-fluid">
				<h1 style={{ color: "white" }}> Character:</h1>
				<div style={{ display: "flex", overflow: "scroll" }}>
					{store.character.map((value, index) => {
						return <Characters key={index} character={value} />;
					})}
				</div>
			</div>
			<div className="container-fluid">
				<h1 style={{ color: "white" }}> Planets:</h1>
				<div style={{ display: "flex", overflow: "scroll" }}>
					{store.planet.map((value, index) => {
						return <Planets key={index} planet={value} />;
					})}
				</div>
			</div>
		</div>
	);
};
