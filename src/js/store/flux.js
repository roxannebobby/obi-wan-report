const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			character: [],
			planet: [],
			favorites: []
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				fecth("https://www.swapi.tech/api/people/")
					.then(response => response.json())
					.then(data => setStore({ character: data.results }))
					.catch(error => console.error(error));

				fecth("https://www.swapi.tech/api/planets/")
					.then(response => response.json())
					.then(data => setStore({ planet: data.results }))
					.catch(error => console.error(error));
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			},
			addFavorite: newItem => {
				let storeCopy = getStore();
				let newFavorites = storeCopy.favorites.concat(newItem);
				setStore({ favorites: newFavorites });
			},
			quitFavorite: element => {
				let storeCopy = getStore();
				let quitFavorite = storeCopy.favorites.filter((item, index) => {
					return item !== element;
				});
				setStore({ favorites: quitFavorite });
			},
			getCharacter: id => {
				const store = getStore();
				fetch(`${store.urlApi}/people/${id}`, {
					method: "GET",
					headers: {
						"Content-type": "application/json"
					}
				})
					.then(response => {
						if (response.ok) {
							return response.json();
						} else {
							setStore({ error: "No se pudo obtener el personaje" });
						}
					})
					.then(data => !!data && setStore({ people: data.result.properties }));
			}
		}
	};
};

export default getState;
